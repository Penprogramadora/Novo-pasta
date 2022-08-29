var canvas = new fabric.canvas('myCanvas');

bally=0;
ballx=0;
holey=400;
holex=800;



blockImageWidth = 5;
blockImageHeight = 5;

function loadImg(){
	fabric.Image.fromURL("golf-h.png",function(img) {
holeobj = img;
holeobj.scaleToWidth(50);
holeobj.scaleToHeight(50);
holeobj.set({
top:holeY,
left:holeX
    });
canvas.add(holeobj);
    });

	newImage();
}

function newImage()
{
    fabric.Image.fromURL("ball.png",function(img) {
        ballobj = img;
        ballobj.scaleToWidth(50);
        ballobj.scaleToHeight(50);
        ballobj.set({
        top:ballY,
        left:ballX
        }       
    });
    canvas.add(ballobj);

    
window.addEventListener("keydown", myKeyDown);

if((ballx==holleX)&&(bally==holleY))
canvas.remove("ballobj");

document.getElementById("hd3").innerHTML="você atingiu o objetivo!!!";
document.getElementById("myCanvas").style.borderColor="red";
function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(bally <=5)
		bally = bally - blockImageHeight;
		console.log("Altura da imagem do bloco = " + block_Image_Height);
		console.log("quando a tecla direcional baixo é pressiona, X = " ball_x + " , Y = ball_y" );
		canvas.remove("ballobj");
		newImage()
	}

	function down()
	{
		 if(bally <=450)
bally = bally + blockImageHeight;
console.log("Altura da imagem do bloco = " + block_Image_Height);
console.log("quando a tecla direcional baixo é pressiona, X = " ball_x + " , Y = ball_y" );
canvas.remove("ballobj");
newImage()

	}

	function left()
	{
		if(ballX >5)
		{
			ballx = ballx - blockImageWidth;
			console.log("Largura da imagem do bloco = " + block_Image_Width);
			console.log("quando a tecla direcional baixo é pressiona, X = " ball_x + " , Y = ball_y" );
			canvas.remove("ballobj");
			newImage()
		}
	}

	function right()
	{
		if(ballX <=1050)
		{
			ballx = ballx - blockImageWidth;
			console.log("Largura da imagem do bloco = " - block_Image_Width);
			console.log("quando a tecla direcional baixo é pressiona, X = " ball_x + " , Y = ball_y" );
			canvas.remove("ballobj");
			newImage()
		}
	}
	
}