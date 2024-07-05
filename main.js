/* elementos del dom */
const cambiarElemento = () => {
    var element = document.getElementById('miElemento');
    console.log(element);
    element.innerHTML = 'Nuevo Contenido';
}

const cambiarImagen = () => {
    var img = document.getElementById('miImagen');
    console.log(img);
    img.setAttribute('src', 'https://jbstechinfo.com/wp-content/uploads/2023/08/JavaScript-Symbol.png');
}

const cambiarStyle = () => {
    var div = document.getElementById('elementoPrueba');
    console.log(div);
    div.style.backgroundColor = 'green';
}

const crearElemento = () => {
    var nuevoParrafo = document.createElement('p');
    nuevoParrafo.textContent = 'Este es un parrafo creado';
    document.body.appendChild(nuevoParrafo);
}

const eliminarElemento = () => {
    var viejoParrafo = document.getElementById('parrafoViejo');
    viejoParrafo.parentNode.removeChild(viejoParrafo);
}

const navegarLista = () => {
    var primerHijo = document.getElementById('miLista').firstElementChild;
    console.log(primerHijo.textContent);

    var siguienteHermano = primerHijo.nextElementSibling;
    console.log(siguienteHermano.textContent);
}

/* elementos del bom */
const redireccionar = () => {
    window.location.href = 'https://developer.mozilla.org/es/docs/Web/JavaScript';
}

const redireccionarNuevaVentana = () => {
    window.open('https://developer.mozilla.org/es/docs/Web/JavaScript', '_blank', 'width=600,height=400');
}

const infoNav = () => {
    console.log(navigator.appName);
    console.log(navigator.appVersion);
}

const infoScreen = () => {
    console.log(screen.width);
    console.log(screen.height);
}

const historyNav1 = () => {
    window.history.back();
}

const historyNav2 = () => {
    window.history.forward();
}