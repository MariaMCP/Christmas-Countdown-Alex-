window.onload = function(){
	var canvas = document.getElementById('sky');
	var ctx = canvas.getContext("2d");
	var W = window.innerWidth;
	var H = window.innerHeight;
	canvas.width = W;
	canvas.height = H;
	var mf = 100;
	var flakes = [];
	for(var i = 0; i < mf; i++){
		flakes.push({
			x:Math.random()*W,
			y:Math.random()*H,
			r:Math.random()*3+2,
			d:Math.random()+1
		})
	}
	function drawFlakes(){
		ctx.clearRect(0,0,W,H);
		ctx.fillStyle="MediumPurple";
		ctx.beginPath();
		for (var i = 0; i<mf;i++)
		{
			var f = flakes[i];
			ctx.moveTo(f.x, f.y);
			ctx.arc(f.x, f.y, f.r, 0, Math.PI*2, true);
		}
		ctx.fill();
		moveFlakes();
	}
	var angle = 0;
	function moveFlakes(){
		angle += 0.01;
		for (var i=0;i<mf;i++) {
			var f = flakes[i];
			f.y += Math.pow(f.d, 2) +1;
			f.x += Math.sin(angle);
			if (f.y > H){
				flakes[i] = {x:Math.random()*W, y:0, r:f.r, d:f.d};
			}
		}
	}
	setInterval(drawFlakes, 10);
}

//You can change the date and time to whatever you want to count down to
var countDownDate = new Date("December 25, 2018 11:31:00").getTime();

//Update the count down every 1 second
var x = setInterval(function() {

	//Get today's date and time
	var now = new Date().getTime();

	//Find the distance between now and the count down date
	var distance = countDownDate - now;

	//Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000*60*60*24));

	var hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));

	var minutes = Math.floor((distance % (1000*60*60))/(1000*60));

	var seconds = Math.floor((distance % (1000*60))/1000);

	//Display the result in the correct HTML elements
	document.getElementById("days").innerHTML = days + " Days "
	document.getElementById("hours").innerHTML = hours + " Hours "
	document.getElementById("minutes").innerHTML = minutes + " Minutes "
	document.getElementById("seconds").innerHTML = seconds + " Seconds "


	//If the count down is finished, write some text
	if (distance < 0) 
	{
		clearInterval(x);

		document.getElementById("timer").innerHTML = "Time Is Up!";
	}
}, 1000);