window.addEventListener("load", function() {
	var boton = document.getElementById("iniciar");
	boton.addEventListener("click", function() {
		var tiempo = document.getElementById("tiempo").value;

		setInterval(cambiarcolorFondoRandom, tiempo*1000);
	});

	function cambiarcolorFondoRandom() {
			document.body.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
			}


});