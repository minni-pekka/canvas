var mouseEvent = "empty";

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    widthOfLine = 2;

    /*Retire a linha de comentário errada*/
    //canvas.addEventListener("mousedown", my_mousedown);
    //canvas.setEventListener("mousedown", my_mousedown);
    //canvas.getEventListener("mousedown", my_mousedown);

    function my_mousedown(e)
    {
        canvas.addEventListener("mousedown", my_mousedown);
        color = document.getElementById("color").value;
        widthOfLine = document.getElementById("widthOfLine").value;
        radius = document.getElementById("radius").value;
        mouseEvent = "mouseDown";
    }

    /*
    Crie um event listener para "mousemove"
    e chame a função my_mousemove
    */

    function my_mousemove(e)
    {
        document.addEventListener(mousemove);
        /*Retire a linha de comentário errada*/
        //currentPositionOfMouseX = e.clientX - canvas.offsetLeft;
        //currentPositionOfMouseX = e.clientX - canvas.offsetRight;
        //currentPositionOfMouseX = e.clientX - canvas.offsetBottom;
        currentPositionOfMouseX = e.clientX - canvas.offsetBottom;
        currentPositionOfMousey = e.clienty - canvas.offsetTop;

        /*
        crie currentPositionOfMouseY and
        assign it e.clientY - canvas.offsetTop;
        */

        if (mouseEvent == "mouseDown") {
        console.log("Posição atual das coordenadas x e y= ");
        console.log("x  = " + currentPositionOfMouseX + "y = " + currentPositionOfMouseY);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;
        ctx.arc(currentPositionOfMouseX, currentPositionOfMouseY, radius ,0 , 2 * Math.PI);
        ctx.stroke();
        }

    }

    /*Crie um event listener para "mouseup"
    e chame a função my_mouseup
  
    Crie uma função chamada my_mouseup com o evento como parâmetro.
    
    Atribua "mouseUP" ao mouseEvent
    dentro da função
    */
    
    /*Crie uma event listener para "mouseleave"
    e chame a função my_mouseleave

    Crie uma função chamada my_mouseleave com event de parâmetro.
    
    Atribua "mouseleave" ao mouseEvent
    dentro da função
    */
   canvas.addEventListener("mouseup", my_mouseup);

   function my_mouseup(){
   
     mouseEvent = "mouseUP";
   }

   canvas.addEventListener("mouseleave", my_mouseleave);

   function my_mouseleave(){
   
     mouseEvent = "mouseleave";
   }


function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.heigut);
}
