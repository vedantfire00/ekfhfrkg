canvas =document.getElementById("canmy");
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 4;
ctx.rect(170,143,430,200);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 4;
ctx.arc(250,200,50,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 4;
ctx.arc(300,250,50,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 4;
ctx.arc(350,200,50,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.arc(400,250,50,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = "orange";
ctx.lineWidth = 4;
ctx.arc(450,200,50,0,2*Math.PI);
ctx.stroke();

