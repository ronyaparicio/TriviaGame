$('document').ready(function() {
  var corretAnswers = 0;
  var incorrectAnswers = 0;
  var i = 0;
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
    {
      answer1: "Mercury, Mars, Earth, Venus, Jupiter, Saturn, Uranus, Neptune, Pluto",
      answer2: "Mars, Mercury, Venus, Earth, Jupiter, Saturn, Uranus, Neptune, Pluto",
      answer3: "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune, Pluto",
      answer4: "Mars, Mercury, Venus, Earth, Jupiter, Saturn, Uranus, Neptune, Pluto"
   },

    {
      answer1: "Aprox. 6 billion miles.",
      answer2: "Aprox. 9 billion miles.",
      answer3: "Aprox. 6 billion miles.",
      answer3: "Aprox. 6 billion miles."
    },

    {
      answer1: "Europa",
      answer2: "Sao",
      answer3: "Titan",
      answer4: "Moon"
   },

   {
      answer1: "29 million miles",
      answer2: "66 million miles",
      answer3: "93 million miles",
      answer4: "142 million miles"
    },

   {
      answer1: "White Giant",
      answer2: "Neutron Star",
      answer3: "Red Supergiant",
      answer4: "Yellow Dwarf"
    },

   {
      answer1: "Betelguse",
      answer2: "sirius",
      answer3: "Regulus",
      answer4: "Capella"
    },

    {
      answer1: "A small particle from a comet or asteroid orbiting the sun",
      answer2: "The light phenomenon which results when a meteoroid enters the Earth's atmosphere",
      answer3: "A relatively small, inactive, rocky body orbiting the Sun",
      answer4: "A relatively small, at times active, object whose ices can vaporize in sunlight forming an atmosphere of dust and gas and sometimes a tail of dust and/or gas."
    },

   {
     answer1: "Nicolaus Copericus",
     answer2: "Galileo Galilei",
     answer3: "Johannes Kepler",
     answer4: "Carl Sagan"
  }
  ];
  function update () {
    $("#question").html(questions[i]);
    $("#answer1").html(answers[i].answer1);
    $("#answer2").html(answers[i].answer2);
    $("#answer3").html(answers[i].answer3);
    $("#answer4").html(answers[i].answer4);
  };


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
    update();
  });

  $("#answer1").on("click", function(){
    if (question[4]) {
      corretAnswers++;
      i++;
      counter = 30;
      update();
    } else if (!question[4]) {
      incorrectAnswers++;
      i++;
      counter = 30;
      update();
    }
  });
  $("#answer2").on("click", function(){
    if (question[5]||question[6]) {
      corretAnswers++;
      i++;
      counter = 30;
      update();
    } else if () {
      incorrectAnswers++;
      i++;
      counter = 30;
      update();

    }
  });
  $("#answer3"). on("click", function() {
    if (question[0]||question[1]||question[3]||question[7]) {
      corretAnswers++;
      i++;
      counter = 30;
      update();
    } else if (true) {
      incorrectAnswers++;
      i++;
      counter = 30;
      update();
    }
  });
  $("#answer4").on("click", function(){
    if (questions[2]) {
      corretAnswers++;
      i++;
      counter = 30;
      update();
    } else if (true) {
      incorrectAnswers++;
      i++;
      counter = 30;
      update();

    }
  })



});
