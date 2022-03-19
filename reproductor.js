function iniciar(){
	var maximo = 600;
	var medio = document.getElementById('medio');
	var reproducir = document.getElementById('reproducir');
	var barra = document.getElementById('barra');
	var progreso = document.getElementById('progreso');

	reproducir.addEventListener('click', presionar, false);
	barra.addEventListener('click', mover, false);
}

function presionar(){
	if(!medio.paused && !medio.ended){
		medio.pause();
		reproducir.innerHTML='Reproducir';
		window.clearInterval(bucle);
	}else{
		medio.play();
		reproducir.innerHTML='Pausa';
		bucle=setInterval(estado, 1000);
	}
}


function estado(){
	if(!medio.ended){
		var total = parseInt(medio.currentTime*maximo/medio.duration);
		progreso.style.width = total+'px';
	}else{
		progreso.style.width = '0px';
		reproducir.innerHTML='reproducir';
		window.clearInterval(bucle);
	}
}

function mover(e){
	if(!medio.paused && !medio.ended){
		var ratonX = e.pageX-barraoffsetLeft;
		var nuevoTiempo = ratonX*medio.duration/maximo;
		medio.currentTime = nuevoTiempo;
		progreso.style.width = ratonX+'px';
	}
}

window.addEventListener("load", iniciar, false);
