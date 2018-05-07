import '../styles/main.scss';

const canvas : HTMLCanvasElement = document.querySelector('#hangmanCanvas');
const ctx = canvas.getContext('2d');
const { width, height } = canvas;
const styles = {
	'width': 5,
	'color': 'black'
}


// ctx.fillStyle = 'green';
// ctx.fillRect(10, 10, width, height);

const draw = () => {
   ctx.beginPath();
   ctx.moveTo(345.5, 345.5);
   ctx.lineTo(0, 345.5);
   ctx.lineWidth = styles.width;
   ctx.strokeStyle = styles.color;
   ctx.stroke();
}

draw();
