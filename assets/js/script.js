// buscar por nombre 
let consultarDigimon = () => {
    let nombreParaConsultar = document.getElementById('nombreProp').value;
    let endpoint = 'https://digimon-api.vercel.app/api/digimon/name/'+ nombreParaConsultar;

    fetch(endpoint)
    .then(respuestaDigimon => respuestaDigimon.json())
    .then(datosDigimon => {
        console.log(datosDigimon[0].name);

        let nombreRecuperado = datosDigimon[0].name;
        let nivelRecuperado = datosDigimon[0].level;
        let imagenRecuperada = datosDigimon[0].img;

        let etiquetaNombre = document.getElementById('nombreDigimon');
        etiquetaNombre.innerHTML = nombreRecuperado;

        let etiquetaNivel = document.getElementById('nivelDigimon');
        etiquetaNivel.innerHTML = nivelRecuperado;

        let etiquetaImagen = document.getElementById('imagenDigimon');
        etiquetaImagen.src = imagenRecuperada;

    });
}

// select

const select = document.getElementById('selectDigi')
const url = 'https://digimon-api.vercel.app/api/digimon'

fetch (url)
.then(res => res.json())
.then(data => { 
    data.forEach(digi => {
       /* console.log(digi.name) */
       // obtener datos de api e insertar como 'option' en <select>
       const nombre = digi.name
       const op = document.createElement ('option')
        op.text = digi.name;
        op.value = digi.name;
        select.add(op)

        // evento change para seleccionar un digimon especifico
        select.addEventListener("change", event => {
            //def variable
        const digiselected = data.find(digi => digi.name == event.target.value);
        if (digiselected) {
        let nombre = digiselected.name;
        let nivel = digiselected.level;
        let imgen = digiselected.img;
              
        //mostrar datos en <card> html
        let nombreDigimon = document.getElementById('nombreDigimon');
        nombreDigimon.innerHTML = nombre;
        let nivelDigimon = document.getElementById('nivelDigimon');
        nivelDigimon.innerHTML =nivel;
        let imagenDigimon = document.getElementById('imagenDigimon');
        imagenDigimon.src = imgen;
            }
          });
    });
    
})
   
.catch(err=> console.log(err))