const divVideo = document.querySelector('.videoSection');

function insertarVideo(opcion) {

    Spinner(); //MUESTRA EL SPINNER

    const mp4 = document.createElement("div");
    mp4.innerHTML = `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${opcion}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   `;
    divVideo.appendChild(mp4);
}

function limpiarHTML() {
    while (divVideo.firstChild) {
        divVideo.removeChild(divVideo.firstChild);
    }
}

function Spinner() {

    limpiarHTML();

    const divSpinner = document.createElement('div');
    divSpinner.classList.add('sk-chase');

    divSpinner.innerHTML = `
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    `;

    divVideo.appendChild(divSpinner);
}