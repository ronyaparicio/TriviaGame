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
  var answers = [
    ["Mercury, Mars, Earth, Venus, Jupiter, Saturn, Uranus, Neptune, Pluto",
     "Mars, Mercury, Venus, Earth, Jupiter, Saturn, Uranus, Neptune, Pluto",
     "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune, Pluto",
     "Mars, Mercury, Venus, Earth, Jupiter, Saturn, Uranus, Neptune, Pluto"],

    ["Aprox. 6 billion miles."
      "Aprox. 9 billion miles."
      "Aprox. 6 billion miles."
      "Aprox. 6 billion miles."],

     ["Europa",
      "Sao",
      "Titan",
      "Moon"],

     ["29 million miles",
      "66 million miles",
      "93 million miles",
      "142 million miles"],

     ["White Giant",
      "Neutron Star",
      "Red Supergiant",
      "Yellow Dwarf"],
     [],
     [],
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
