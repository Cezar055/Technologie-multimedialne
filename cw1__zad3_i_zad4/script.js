const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.style.background = 'yellow';

const div = document.querySelector('div');
div.style.color = 'blue';

function getPointerPosition(e) {
    let canvasPosition = canvas.getBoundingClientRect();
    let x = e.clientX - canvasPosition.left;
    let y = e.clientY - canvasPosition.top;
    div.innerText = `Pozycja wskaźnika: x:${x},y:${y}`
    console.log(e.clientX - canvasPosition.left);
    console.log(e.clientY - canvasPosition.top);
}

canvas.addEventListener("pointermove", e => {
    const pointer = getPointerPosition(e);

})

canvas.addEventListener("pointerleave", () => {
    div.innerText = `Wskaźnik poza płótnem`;
})
const kwadrat = { a:30, x:0, y:0, dx:0, dy:0 };
function rysuj_kwadrat() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'red';
    ctx.fillRect(kwadrat.x, kwadrat.y, kwadrat.a, kwadrat.a);
}

window.addEventListener('keydown', (e) => {

    const step = 30;

    switch (e.keyCode) {
        case 37:
            kwadrat.x = ((kwadrat.x - step) < 0) ? kwadrat.x : kwadrat.x - step;
            break;
		case 38:
            kwadrat.y = ((kwadrat.y - step) < 0) ? kwadrat.y : kwadrat.y - step;
            break;
        case 39:
            kwadrat.x = ((kwadrat.x + step) > (canvas.width - kwadrat.a)) ? kwadrat.x : kwadrat.x + step;
            break;
		case 40:
            kwadrat.y = ((kwadrat.y + step) > (canvas.height - kwadrat.a)) ? kwadrat.y : kwadrat.y + step;
            break;
    }
    rysuj_kwadrat();
});