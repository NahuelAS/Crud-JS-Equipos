
function mostarJson(tla) {
    const URL = `./data/equipos/${tla}.json`;

    fetch(URL)
    .then(res => res.json())
    .then(datos => console.log(datos))
    .catch((err) => console.error(err))
}
