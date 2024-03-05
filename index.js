const listadoEquipos = document.querySelector('.container');

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
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="${equipo.crestUrl}" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em"></text></svg>
            <div class="card-body">
                <p class="card-text">${equipo.name} equipo de ${equipo.area.name}, su estadio es ${equipo.venue} que se encuentra en ${equipo.address}, sus colores principales son ${equipo.clubColors} y fue fundado en ${equipo.founded}.</p>
                <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                </div>
            </div>
            </div>
        `;
        div.appendChild(card);
    });
    listadoEquipos.appendChild(div);
}