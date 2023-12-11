// Importiere die Canvas-Bibliothek
const Canvas = require('canvas');

// Erstelle ein neues Canvas-Objekt
const canvas = new Canvas(500, 500);

// Zeichne einen Kreis auf das Canvas
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'red';
ctx.beginPath();
ctx.arc(250, 250, 100, 0, 2 * Math.PI);
ctx.fill();

// Zeige das Canvas an
canvas.draw();
