let noms = [];
let ruleta = document.getElementById('ruleta');
let spinButton = document.getElementById('spin-button');

fetch('noms.txt')
    .then(response => response.text())
    .then(data => {
        noms = data.split('\n');
        crearRuleta(noms);
    });

function crearRuleta(noms) {
    let angle = 360 / noms.length;
    let rotation = 0;
    
    noms.forEach(nom => {
        let section = document.createElement('div');
        section.className = 'section';
        section.style.transform = `rotate(${rotation}deg) skewY(${90 - angle}deg)`;
        section.style.position = 'absolute';
        section.style.width = '200px'; // ajusta este valor a la mitad del ancho de la ruleta
        section.style.height = '200px'; // ajusta este valor a la mitad del alto de la ruleta
        section.style.left = '50px'; // ajusta este valor a la mitad del ancho de la ruleta
        section.style.top = '50px'; // ajusta este valor a la mitad del alto de la ruleta
        section.style.transformOrigin = 'bottom center';
        section.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
        let text = document.createElement('div');
        text.textContent = nom;
        text.style.transform = `skewY(${-90 + angle}deg) rotate(${angle / 2}deg)`;
        text.style.position = 'absolute';
        text.style.width = '100%';
        text.style.height = '100%';
        text.style.display = 'flex';
        text.style.justifyContent = 'center';
        text.style.alignItems = 'center';
    
        section.appendChild(text);
        ruleta.appendChild(section);
        rotation += angle;
    });
    
    spinButton.addEventListener('click', spinRuleta);
}
    





