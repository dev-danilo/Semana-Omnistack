const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');


module.exports = {
    async index(request, response) {
        const { latitude, longitude, techs } = request.query;
        const techsArray = parseStringAsArray(techs);
        console.log(techsArray);
        // Buscar todos os devs num raio de 10km
        // Filtrar por tecnologias

        const devs = await Dev.find({
            techs: {
                $in: techsArray,   //encontrar se o usuario tem as tecnologias que estao dentro do techsArray
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude,latitude],
                    },
                    $maxDistance: 10000,
                }        //encontrar objetos perto de uma localização
            },
        });




        return response.json({ devs });
    } 
}