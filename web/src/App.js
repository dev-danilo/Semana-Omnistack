import React from 'react';

import './App.css';
import './global.css';

// Componente = Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
// Estado = Informações mantidas pelo componente (lembrar:imutabilidade)
// Propriedade = Informações que um componente PAI passa para o componente FILHO


function App() { //JSX uniao JS e HTML
  return (
   <div id="app">
     <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="username_github" required />
          </div>

          <label htmlFor="techs">Tecnologias</label>
          <input name="techs" id="techs" required />
        
        <div className="input-group">
          <div class="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input name="latitude" id="latitude" required />
          </div>
          <div class="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input name="Longitude" id="Longitude" required />
          </div>
        </div>
        button
        </form>
     </aside>
      <main>

      </main>

   </div>

  );
}

export default App;
