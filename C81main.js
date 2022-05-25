canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
colour ="yellow";


ctx.beginPath();
ctx.strokeStyle=colour;
ctx.linewidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) 
{ //taking color from input box
     //additional activity start
      colour=document.getElementById("colour").value;
       console.log(colour);
        //addition activity ends 
        mouse_x = e.clientX - canvas.offsetLeft; 
        mouse_y = e.clientY - canvas.offsetTop;
         console.log("X = " + mouse_x + " ,Y = " + mouse_y);
          circle(mouse_x , mouse_y); }



          function circle(mouse_x , mouse_y)
           { ctx.beginPath();
             ctx.strokeStyle = colour;
              ctx.lineWidth = 5;
               ctx.arc(mouse_x, mouse_y, 40 ,0 , 2*Math.PI);
                ctx.stroke(); }


                function clearArea() { ctx.clearRect(0, 0, canvas.width, canvas.height); }
