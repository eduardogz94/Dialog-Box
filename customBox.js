 var dialogbox = document.getElementById('dialogbox'); 
 var dialogboxhead = document.getElementById('dialogboxhead');
 var dialogboxbody = document.getElementById('dialogboxbody');
 var dialogboxfooter = document.getElementById('dialogboxfooter'); 
 var dialogoverlay = document.getElementById('dialogoverlay');
 var posx = 400;
 var posy = 200;
 var onMove = false;
 
     class Alert{
         constructor(){
         	 this.x = posx;
         	 this.y = posy;
       	 }

         box(dialog){    
         	 dialogbox.style.left = posx + "px";
         	 dialogbox.style.top = posy + "px";
         	 dialogbox.style.display = "block";
         	 dialogoverlay.style.display = "block";
         	 dialogboxbody.innerHTML = dialog;
       	 }
     	
       	 maxA(){
 	 		 dialogbox.style.width = "1000" + "px";
 	 		 dialogbox.style.height = "600" + "px";
 		 }

 		 cerrar(){
     	 	 dialogbox.style.display = "none";
      	     dialogoverlay.style.display = "none";
 		 }

 		 minA(){
     	 	 dialogbox.style.width = "400" + "px";
 	 	 	 dialogbox.style.height = "108" + "px";
 		 }

     }

 var dialogb = new Alert();

 //Make the DIV element draggagle:
 dragElement(dialogb);

 function dragElement(elmnt) {
     var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  	 if (dialogboxhead) { /* if present, the header is where you move the DIV from:*/
     	 dialogboxhead.onmousedown = dragMouseDown;
     } else { /* otherwise, move the DIV from anywhere inside the DIV:*/
    	 dialogbox.onmousedown = dragMouseDown;
  	 }

 	 function dragMouseDown(e) {
     	 e = e || window.event; // get the mouse cursor position at startup:
     	 pos3 = e.clientX;
     	 pos4 = e.clientY;
     	 document.onmouseup = closeDragElement; // call a function whenever the cursor moves:
     	 document.onmousemove = elementDrag;
 	 }

 	 function elementDrag(e) {
     	 e = e || window.event; // calculate the new cursor position:
     	 pos1 = pos3 - e.clientX;
     	 pos2 = pos4 - e.clientY;
     	 pos3 = e.clientX;
     	 pos4 = e.clientY;
     	 dialogbox.style.top = (dialogbox.offsetTop - pos2) + "px";
     	 dialogbox.style.left = (dialogbox.offsetLeft - pos1) + "px";
 	 }

 	 function closeDragElement() {
     	 document.onmouseup = null;
     	 document.onmousemove = null;
 	 }

 }
