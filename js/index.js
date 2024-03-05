// import { filtrarEquipos } from "./busqueda.js";

const albunContainer = document.querySelector('.album .container');

fetch('./data/equipos.json')
    .then(res => res.json())
    .then(data => mostrarEquipos(data))
    .catch(err => console.error(err));


function mostrarEquipos(data){
    
    const div = document.createElement('div');
    div.className = 'row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3';
    
    data.forEach(equipo => {
        const card = document.createElement('div'); 
        card.className = 'col';
        card.innerHTML = `
        <div class="card shadow-sm">
        <img class="bd-placeholder-img card-img-top" src="${equipo.crestUrl}" width="100%" height="200" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
            <div class="card-body">
                <p class="card-text"><strong>${equipo.name}</strong> equipo de <strong>${equipo.area.name}</strong>, su estadio es <strong>${equipo.venue}</strong> que se encuentra en <strong>${equipo.address}</strong>, sus colores principales son <strong>${equipo.clubColors}</strong> y fue fundado en <strong>${equipo.founded}</strong>.</p>
                <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-primary btn-outline-secondary"><a href="${equipo.website}">Sitio Web</a></button>
                    <button type="button" class="btn btn-sm btn-primary btn-outline-secondary"><a href="${equipo.tla}">Ver Equipo</a></button>
                </div>
                </div>
            </div>
            </div>
        `;
        div.appendChild(card);
    });
    albunContainer.appendChild(div);
}