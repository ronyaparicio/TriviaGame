$('document').ready(function() {
  var questions = [
    "PUT THE PLANETS IN ORDER FROM THE SUN?",
    "HOW MANY MILES ARE IN A LIGHT YEAR?",
    "WHAT'S THE NAME OF EARTH'S MOON?",
    "HOW FAR IS EARTH FROM THE SUN?",
    "WHICH IS NOT A TYPE OF STAR?",
    "WHICH STAR IS THE BRIGHTEST?",
    "DEFINE A METEOR.",
    "WHO PROPOSED THE 3 LAWS OF PLANETARY MOTION?",
  ];

  //timer
  var counter = 30;

  function time() {
    counter--;
    $("#time").html(counter);
  }

//Start Game
  $("#start").on("click", function() {
    setInterval(time, 1000);
    $("#start").hide(1000);
    $(".game").show(1000);
    $(".text").show(1000);

    //Pick a questions a answers.
    for (var i = 0; i < questions.length; i++) {
      $("#question").html(questions[i]);

    }


  });

});
