let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('soy estudiante de preparatoria y tengo conocimientos en programacion')
  .pauseFor(200)
  .deleteChars(10)
  .start();
