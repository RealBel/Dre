onload = () => {
  document.body.classList.remove("container");

  const frases = [
    "I love you 🤍💜",
    "You are my everything",
    "You make my world brighter 🤍💜",
    "I think of you every day",
    "You are special to me",
    "Te amo 🤍💜",
    "Eres mi razón",
    "Siempre tú",
    "Mi corazón es tuyo",
    "Y hoy en nuestro 3er Mes💜",
    "Hay tantas cosas que quiero decirte",
    "Y tantas cosas que quisiera hacer",
    "Para que sepas que te amo!!!🤍💜",
    "Con todo mi ser",
    "Pronto te daré más y más",
    "Citas y proyectos juntos!🤍💜",
    "Pero por ahora quisiera decirte que:",
    "Desde que llegaste, mi vida dejó de sentirse sola.",
    "Eres el milagro cotidiano que el universo me regaló.",
    "Hacemos el silencio perfecto.",
    "Tres meses contigo, y mi alma ya te reconoce desde siempre.🤍💜💜🤍",
    "Si estos meses fueran un poema, serías tú cada verso.",
    "El tiempo pasa distinto desde que te amo: más suave, más vivo",
    "Tres meses que saben a eternidad contigo.🤍💜",
    "Eres la flor que abrió luz en todos mis inviernos.",
    "Tu risa tiene el poder de moverme y curarme el alma.",
    "Cuando te miro, mi mundo encuentra sentido.💜🤍",
    "Gracias por estos tres meses de magia, ternura y destino.",
    "Amarte es aprender que la felicidad sí existe.",
    "Hoy celebramos tres meses, pero yo celebro tu existencia entera.",
    "Lo mejor que me pasó… fuiste tú.",
    "TE AMO INFINITO, MI AMOR COMPLETO💜🤍💜🤍",
  ];

  let index = 0;
  const texto = document.getElementById("loveText");

  function cambiarTexto() {
    texto.style.opacity = 0; // fade out

    setTimeout(() => {
      texto.textContent = frases[index];
      texto.style.opacity = 1; // fade in

      index = (index + 1) % frases.length; // loop infinito
    }, 800);
  }

  setInterval(cambiarTexto, 3000); // cambia cada 3 segundos
};
