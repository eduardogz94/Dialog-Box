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
       	 	 dialogbox.style.width = "600" + "px";
 	 	 	 dialogbox.style.height = "250" + "px";
 	 		 dialogboxbody.style.width = "545" + "px";
 	 		 dialogboxbody.style.height = "66" + "px";
 	 		 dialogboxhead.style.width = "575" + "px";
 	 		 dialogboxhead.style.height = "66" + "px";
 	 		 dialogboxfooter.style.width = "585" + "px";
 	 		 dialogboxfooter.style.height = "46" + "px";
 		 }

 		 cerrar(){
     	 	 dialogbox.style.display = "none";
      	     dialogoverlay.style.display = "none";
 		 }

 		 minA(){
     	 	 dialogbox.style.width = "400" + "px";
 	 	 	 dialogbox.style.height = "138" + "px";
 	 		 dialogboxbody.style.width = "346" + "px";
 	 		 dialogboxbody.style.height = "12" + "px";
 	 		 dialogboxhead.style.width = "376" + "px";
 	 		 dialogboxhead.style.height = "31" + "px";
 	 		 dialogboxfooter.style.width = "386" + "px";
 	 		 dialogboxfooter.style.height = "25" + "px";
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


 function getRandomColor() {
     var letters = '0123456789ABCDEF';
     var color = '#';
     for (var i = 0; i < 6; i++) {
   	 	 color += letters[Math.floor(Math.random() * 16)];
  	 }
  	 return color;
 }

 function setRandomColorDb() {
  dialogbox.style.backgroundColor = getRandomColor();
 }
 
 function setRandomColorDbh() {
  dialogboxhead.style.backgroundColor = getRandomColor();
 }

 function setRandomColorDbb() {
  dialogboxbody.style.backgroundColor = getRandomColor();
 }
 
 function setRandomColorDbf() {
  dialogboxfooter.style.backgroundColor = getRandomColor();
 }