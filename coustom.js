let color1Class = document.querySelectorAll('.color1');
const color1Length = color1Class.length;
let colorPicker = document.querySelector('.colorPicker');
let drawingColor = "black"; // initial pen lnk color
let penSize = 1; // initial pen size

// handle color picker
colorPicker.addEventListener('input', e => {
    drawingColor = e.target.value;
});

// --------------- Add Event Listener to color Plate -------------------
for (let i = 0; i < color1Length; i++) {
    let selectedClass = document.querySelectorAll('.color1')[i];
    selectedClass.addEventListener('click', e => {
        let color = selectedClass.attributes[1].value;
        drawingColor = color;
    })
}

// --------------- Add Event Listener to color Plate -------------------
let color2Class = document.querySelectorAll('.color2');
const color2Length = color2Class.length;

for (let i = 0; i < color2Length; i++) {
    let selectedClass = document.querySelectorAll('.color2')[i];
    selectedClass.addEventListener('click', e => {
        let color = selectedClass.attributes[1].value;
        drawingColor = color;
    })
}

// --------------- Add Event Listener to Pen Plate -------------------
let penControl = document.querySelectorAll('.pen1');
const penLength = penControl.length;

function erageAll() {
    context.clearRect(0, 0, canvas.width, canvas.height); // clean canva
    penSize = 1;
}

for (let i = 0; i < penLength; i++) {
    let selectedClass = document.querySelectorAll('.pen1')[i];
    selectedClass.addEventListener('click', e => {
        let getPenSize = selectedClass.attributes[1].value;
        drawingColor = "black";
        document.querySelector('canvas').style.cursor = "default"

        if (getPenSize == 0) {
            erageAll();
        } else penSize = getPenSize; // update pen size

        // erage line by line using white color
        if (getPenSize == 2) {
            penSize = 12;
            drawingColor = "white";
            document.querySelector('canvas').style.cursor = "cell";
        }
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
    context.lineWidth = penSize; // update drawing color
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