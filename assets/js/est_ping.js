    function cambiarContenido_virginia() {
    var div_virginia = document.getElementById("virginia");

    var nuevo_virginia = Math.floor(Math.random() * (30 - 15 + 1)) + 15;

    div_virginia.textContent = nuevo_virginia;
  }

  setInterval(cambiarContenido_virginia, 1000);




  function cambiarContenido_montevideo() {
    var div_montevideo = document.getElementById("montevideo");

    var nuevo_montevideo = Math.floor(Math.random() * (140 - 120 + 1)) + 120;

    div_montevideo.textContent = nuevo_montevideo;
  }

  setInterval(cambiarContenido_montevideo, 1000);