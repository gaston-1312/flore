// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

audio.volume = 0.15;
// Array de objetos que contiene cada línea y su tiempo de aparición en segundos

var lyricsData = [
  { text: "Yo lo único que quise fue guardarte un lugar ", time: 10.5 },
  { text: "Junto con todos mis sueños en el centro del corazón", time: 16 },
  { text: "Tu lo único que hiciste fue tratar de escapar", time: 22 },
  { text: "Y con ello arrancar todo lo bello", time: 26 },
  { text: "Y con ello arrancar todo lo bello", time: 27 },
  { text: "De esta historia, todo lo especial", time: 33 },
  { text: "Todo lo que no todo suele pasar todo lo mágico", time: 38 },
  { text: "Tú lo quisiste borrar", time: 43 },
  { text: "Y me dijiste un estúpido excusa que me hizo llorar", time: 50 },
  { text: "Una frase trillada que no quiero ni recordar", time: 54 },
  { text: "Escogiste al tiempo, de pretexto", time: 60 },
  { text: "Pero recuerda que el tiempo es oro", time: 67 },
  { text: "No se te vaya a terminar conmigo", time: 70 },
  { text: "Porque tú me conoces bien, sabes que muy muy bien", time: 74 },
  { text: "Sigo siendo el terco, que en vez de dormir ", time: 77 },
  { text: "Se puso a escribir esta canción", time: 81 },
  { text: "Pensando en ti, y yo te conozco bien, sabes que muy muy bien", time: 85 },
  { text: "Está bien ser sincera, pero no está bien, no, olvidarse de...", time: 90 },
  { text: "Está bien ser sincera, pero no está bien, no, olvidarse de...", time: 93 },
  { text: "Que tú y yo y la música, las tardes que se ", time: 100 },
  { text: "Convertían en noches con solo charlar ", time: 104 },
  { text: "Acuérdate cuando no importaba nada más ", time: 108 },
  { text: "Que tú y yo y la eternidad", time: 113 },
  { text: "Las vacas y la casualidad, la luna y la estrella ", time: 116 },
  { text: "La necesidad de juntos los dos escapar... ", time: 113 },
  { text: "Y tú y yo la casualidad, los mejores conciertos ", time: 123 },
  { text: "Y tú y yo la casualidad, los mejores conciertos ", time: 126 },
  { text: "Y sin escuchar los pasteles feos", time: 129 },
  { text: "Los besos largos que parecían cortos en realidad", time: 131 },
  { text: "Tú y yo y las ganas de amar, la funda", time: 136 },
  { text: "Que hoy cubre mi almohada", time: 139 },
  { text: "Los dulces raros, las fotos y los recados", time: 142 },
  { text: "Las flores que no sé si un día cambien de color...", time: 146 },
  { text: "Y tú y yo y la improvisación, la imprudencia", time: 150 },
  { text: "Y una canción o dos o tres.", time: 153 },
  { text: "Y una canción o dos o tres.", time: 155 },
  { text: "Perdí la cuenta, tú date de cuenta que... yo solo quise quererte... (te)", time: 157 },
  { text: "Perdí la cuenta, tú date de cuenta que... yo solo quise quererte... (te)", time: 161 }
];
/*var lyricsData = [
  { text: "At the time", time: 15 },
  { text: "The whisper of birds", time: 18 },
  { text: "Lonely before the sun cried", time: 27 },
  { text: "Fell from the sky", time: 32 },
  { text: "Like water drops", time: 33 },
  { text: "Where I'm now? I don't know why", time: 41 },
  { text: "Nice butterflies in my hands", time: 47 },
  { text: "Too much light for twilight", time: 54 },
  { text: "In the mood for the flowers love", time: 59 },
  { text: "That vision", time: 67 },
  { text: "Really strong, blew my mind", time: 72 },
  { text: "Silence Let me see what it was", time: 78 },
  { text: "I only want to live in clouds", time: 83 },
  { text: "Where I'm now? I don't know why", time: 91 },
  { text: "Nice butterflies in my hands", time: 97 },
  { text: "Too much light for twilight", time: 104 },
  { text: "In the mood for the flowers love", time: 108 },
  { text: "At the time", time: 144 },
  { text: "The whisper of birds", time: 148 },
  { text: "Lonely before the sun cried", time: 153 },
  { text: "Fell from the sky", time: 158 },
  { text: "Like water drops", time: 164 },
  { text: "Where I'm now? I don't know why", time: 169 },
  { text: "Nice butterflies in my hands", time: 176 },
  { text: "Too much light for twilight", time: 183 },
  { text: "In the mood for the flowers", time: 188 },
  { text: "Love.", time: 140 },
];*/


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);