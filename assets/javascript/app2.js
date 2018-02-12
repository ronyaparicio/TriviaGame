

var astronomy = [
    {
        question: "The Chained Woman is an alternative name for which constellation?",
        correctAnswer: "Andromeda",
        incorrectAnswers: ["Libra","Virgo","Lyra"]
    },
    {
        question: "The Painter's Easel is an alternative name for which constellation?",
        correctAnswer: "Pictor",
        incorrectAnswers: ["Lyra","Grus","Camelopardalis"]
    },

    {
        question: "The Scales is an alternative name for which constellation?",
        correctAnswer: "Libra",
        incorrectAnswers: ["Crux","Gemini","Pisces"]
    },

    {
        question: "The Southern Cross is an alternative name for which constellation?",
        correctAnswer: "Crux",
        incorrectAnswers: ["Fornax", "Virgo", "Corona Australis"]
    },

    {
        question: "The Pendulum is an alternative name for which constellation?",
        correctAnswer: "Horologium",
        incorrectAnswers: ["Pictor","Fornax","Grus"]
    },

    {
        question: "The Lesser Dog is an alternative name for which constellation?",
        correctAnswer: "Canis Minor",
        incorrectAnswers: ["Ursa Minor", "Equuleus", "Carina"]
    },

    {
        question: "The Dragon is an alternative name for which constellation?",
        correctAnswer: "Draco",
        incorrectAnswers: ["Pegasus", "Taurus", "Aries"]
    },

    {
        question: "The Twins is an alternative name for which constellation?",
        correctAnswer: "Gemini",
        incorrectAnswers: ["Virgo", "Aquila", "Libra"]
    },

    {
        question: "The Greater Dog is an alternative name for which constellation?",
        correctAnswer: "Canis Major",
        incorrectAnswers: ["Ursa Major", "Gemini", "Lupus"]
    },

    {
        question: "The Bull is an alternative name for which constellation?",
        correctAnswer: "Taurus",
        incorrectAnswers: ["Draco", "Lupus", "Capricornus"]
    }

];



var categories = document.querySelectorAll(".start");

console.log(categories);

categories.forEach(button => {
    button.addEventListener("click",function(){
        console.log(button.value);

        function trivia(arr) {
            
            arr.forEach();
        }



        switch (button.value) {
            case "constellations":
                trivia(astronomy);
                break;
        
            default:
                break;
        }


    });
});









