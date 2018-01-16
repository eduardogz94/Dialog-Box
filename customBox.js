 var dialogbox = document.getElementById('dialogbox'); 
 var dialogboxhead = document.getElementById('dialogboxhead');
 var dialogboxbody = document.getElementById('dialogboxbody');
 var dialogboxfooter = document.getElementById('dialogboxfooter'); 
 var pos1x = 400;
 var pos1y = 200;
 var onMove = false;
 
     class Alert{
         constructor(){
         	 this.x = pos1x;
         	 this.y = pos1y;
       	 }

         dibujar(dialog){    
         	 var dialogoverlay = document.getElementById('dialogoverlay');
         	 var dialogbox = document.getElementById('dialogbox');
         	 dialogbox.style.left = pos1x + "px";
         	 dialogbox.style.top = pos1y + "px";
         	 dialogbox.style.display = "inline";
         	 dialogboxhead.innerHTML = "Web Development";
         	 dialogboxbody.innerHTML = dialog;
         	 dialogboxfooter.innerHTML = '<button onclick="dialogb.ok()">OK</button>';  
       	 }
  
       	 ok(){
         	 document.getElementById('dialogbox').style.display = "none";
         	 document.getElementById('dialogoverlay').style.display = "none";
       	 }
     
     }
 

 var dialogb = new Alert();

 //Make the DIV element draggagle:
 dragElement(dialogbox);

 function dragElement(elmnt) {
     var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  	 if (document.getElementById(dialogbox + "header")) {
     /* if present, the header is where you move the DIV from:*/
     	 document.getElementById(dialogbox + "header").onmousedown = dragMouseDown;
     } else {
     /* otherwise, move the DIV from anywhere inside the DIV:*/
    	 dialogbox.onmousedown = dragMouseDown;
  	 }

 function dragMouseDown(e) {
     e = e || window.event;
     // get the mouse cursor position at startup:
     pos3 = e.clientX;
     pos4 = e.clientY;
     document.onmouseup = closeDragElement;
     // call a function whenever the cursor moves:
     document.onmousemove = elementDrag;
 }

 function elementDrag(e) {
     e = e || window.event;
     // calculate the new cursor position:
     pos1 = pos3 - e.clientX;
     pos2 = pos4 - e.clientY;
     pos3 = e.clientX;
     pos4 = e.clientY;
     // set the element's new position:
     dialogbox.style.top = (dialogbox.offsetTop - pos2) + "px";
     dialogbox.style.left = (dialogbox.offsetLeft - pos1) + "px";
 }

 function closeDragElement() {
     /* stop moving when mouse button is released:*/
     document.onmouseup = null;
     document.onmousemove = null;
 }


}
