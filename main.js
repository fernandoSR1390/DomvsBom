/* ejemplos JS */
/* localStorage.setItem('nombre', 'Juan');
const nombre = localStorage.getItem('nombre');
console.log(nombre);

const usuario = {
    nombre: 'Fernando',
    edad: 30
}
localStorage.setItem('usuario', JSON.stringify(usuario));
const usuarioObj = JSON.parse(localStorage.getItem('usuario'));
console.log(usuarioObj.nombre);
console.log(usuarioObj.edad);

localStorage.removeItem('nombre');
localStorage.clear(); */

/* sessionStorage.setItem('nombre', 'Juan');
const nombre = sessionStorage.getItem('nombre');
console.log(nombre);

const usuarioObj = {
    nombre: 'Fernando',
    edad: 30
}
sessionStorage.setItem('usuario', JSON.stringify(usuarioObj));
const usuario = JSON.parse(sessionStorage.getItem('usuario'));
console.log(usuario.nombre);
console.log(usuario.edad);


sessionStorage.removeItem('nombre');
sessionStorage.clear(); */

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