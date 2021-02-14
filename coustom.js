let color1Class = document.querySelectorAll('.color1');
const color1Length = color1Class.length;
let drawingColor = "black";

for (let i = 0; i < color1Length; i++) {
    let selectedClass = document.querySelectorAll('.color1')[i];
    selectedClass.addEventListener('click', e => {
        let color = selectedClass.attributes[1].value;
        drawingColor = color;
    })
}

let color2Class = document.querySelectorAll('.color2');
const color2Length = color2Class.length;

for (let i = 0; i < color2Length; i++) {
    let selectedClass = document.querySelectorAll('.color2')[i];
    selectedClass.addEventListener('click', e => {
        let color = selectedClass.attributes[1].value;
        drawingColor = color;
    })
}

//  ==================== Canvas Work Start =================
let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

let drawing = false;

let oldX = 0;
let oldY = 0;

canvas.addEventListener('mousedown', e => {
    drawing = true;
    oldX = e.offsetX;
    oldY = e.offsetY;
    console.log(drawingColor)
    context.strokeStyle = `${drawingColor}`;
});

canvas.addEventListener('mouseup', e => {
    drawing = false;
});

canvas.addEventListener('mousemove', e => {
    if (!drawing) return false;

    context.beginPath();
    context.moveTo(oldX, oldY);
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();

    oldX = e.offsetX;
    oldY = e.offsetY;

})
// ========================= Canvas Work End =========================