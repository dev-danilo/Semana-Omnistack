const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');


//o Controller geralmente tem 5 funções, sendo:
// index: mostrar uma lista do recurso
// show: mostrar um unico dev
// store: criar
// update: alterar
// destroy: deletar



module.exports = {
    async index(request,response) {
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store(request,response) {
        //request requisiçao do frontend
        //response resposta para o cliente
        const { github_username, techs, latitude, longitude } = request.body;
    
        let dev = await Dev.findOne({ github_username }); //pesquisa no banco de dados se ja existe algum igual ao que esta sendo cadastrado

        if (!dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    
            const { name = login, avatar_url, bio } = apiResponse.data;
        
            console.log(name,avatar_url,bio);
            const techsArray = parseStringAsArray(techs);
            //trim remove espaçamentos antes e depois
            //split para quebrar a string em array strings
            
            const location = { 
                type: 'Point',
                coordinates: [longitude,latitude],
            };
            
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            })
        }
        return response.json(dev);
    }
};
