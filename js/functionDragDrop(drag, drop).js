function DragDrop(drag, drop)
	{
	 var drag = document.getElementById(drag);
	 var drop = document.getElementById(drop);
	 
	 drag.ondragstart = function(e)
	 {
		//Guardamos el id del elemento para transferirlo al elemento drop
		//Content es una clave que nos permitirá acceder al valor asignado
		e.dataTransfer.setData("content", e.target.id);
	 }
	 
	 drop.ondragover = function(e){
		//Cancelar el evento que impide que podamos soltar el elemento drag
		e.preventDefault();
	 }
	 
	 drop.ondrop = function(e){
		//Obtenemos los datos a través de la clave content, en este caso el id
		var id = e.dataTransfer.getData("content");
		e.target.appendChild(document.getElementById(id));
	 }
	 
	}
	
	window.onload = function(){
		DragDrop("pieza2", "prosesador");
		DragDrop("pieza3", "ram1");
		DragDrop("drag3", "drop1");
		DragDrop("drag4", "drop1");
	}

	if (id == ram1) && (elmet);