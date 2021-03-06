function mostrarVentana(e){
	document.getElementById('nombreContenido').style.display='block';
	document.getElementById('nombreContenedor').style.display='block';
}

function ocultarVentana(e){
	document.getElementById('nombreContenido').style.display='none';
	document.getElementById('nombreContenedor').style.display='none';
}

function start(e) {
	e.dataTransfer.effecAllowed = 'move'; // Define el efecto como mover (Es el por defecto)
	e.dataTransfer.setData("Data", e.target.id); // Coje el elemento que se va a mover
	e.dataTransfer.setDragImage(e.target, 0, 0); // Define la imagen que se vera al ser arrastrado el elemento y por donde se coje el elemento que se va a mover (el raton aparece en la esquina sup_izq con 0,0)
	e.target.style.opacity = '0.4'; 
}

function end(e){
	e.target.style.opacity = ''; // Pone la opacidad del elemento a 1 			
	e.dataTransfer.clearData("Data");
}

function enter(e) {
	e.target.style.border = '3px dotted #555'; 
}

function leave(e) {
	e.target.style.border = ''; 
}

function over(e) {
	var elemArrastrable = e.dataTransfer.getData("Data"); // Elemento arrastrado
	var id = e.target.id; // Elemento sobre el que se arrastra
	
	// return false para que se pueda soltar
	//if (id == ''){
	//	return false; // Admite todas las piezas
	//}

	if ((id == 'pieza3') && (elemArrastrable == 'procesador')){ 
		return false; // Solo la pieza 2 se puede soltar en el procezador
	} 

	if ((id == 'pieza1') && (elemArrastrable == 'ram1')){
		return false; // En el cuadro2 se puede soltar cualquier elemento menos el elemento con id=arrastrable3
	}

	if ((id == 'pieza2') && (elemArrastrable == 'ram1')){
		return false; // En el cuadro2 se puede soltar cualquier elemento menos el elemento con id=arrastrable3
	}

	if ((id == 'pieza4') && (elemArrastrable == 'tarjetavideo')){
		return false; // En el cuadro2 se puede soltar cualquier elemento menos el elemento con id=arrastrable3
	}	

	if ((id == 'pieza5') && (elemArrastrable == 'discoduro')){
		return false; // En el cuadro2 se puede soltar cualquier elemento menos el elemento con id=arrastrable3
	}	

	if ((id == 'pieza6') && (elemArrastrable == 'fan')){
		return false; // En el cuadro2 se puede soltar cualquier elemento menos el elemento con id=arrastrable3
	}	

	if ((id == 'pieza7') && (elemArrastrable == 'pieza8')){
		return false; // En el cuadro2 se puede soltar cualquier elemento menos el elemento con id=arrastrable3
	}	

		
}


/**
* 
* Mueve el elemento
*
**/
function drop(e){

	e.preventDefault(); // Evita que se ejecute la accion por defecto del elemento soltado.

	var elementoArrastrado = e.dataTransfer.getData("Data"); // Elemento arrastrado
	e.target.appendChild(document.getElementById(elementoArrastrado));
	e.target.style.border = '';  // Quita el borde
	e.target.style.opacity = '';
	tamContX = $('#'+e.target.id).width();
	tamContY = $('#'+e.target.id).height();

	tamElemX = $('#'+elementoArrastrado).width();
	tamElemY = $('#'+elementoArrastrado).height();

	posXCont = $('#'+e.target.id).position().left;
	posYCont = $('#'+e.target.id).position().top;

	// Posicion absoluta del raton
	x = e.layerX;
	y = e.layerY;

	// Si parte del elemento que se quiere mover se queda fuera se cambia las coordenadas para que no sea asi
	if (posXCont + tamContX <= x + tamElemX){
		x = posXCont + tamContX - tamElemX;
	}

	if (posYCont + tamContY <= y + tamElemY){
		y = posYCont + tamContY - tamElemY;
	}

	document.getElementById(elementoArrastrado).style.position = "absolute";
	document.getElementById(elementoArrastrado).style.left = x + "px";
	document.getElementById(elementoArrastrado).style.top = y + "px";
	//$(elementoArrastrado).show();

}

function procesador(e){
	if ((id == 'pieza3') && (elemArrastrable == 'procesador')){ 
		alert("echo")
	} 
}



