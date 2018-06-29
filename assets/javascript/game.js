var scoreGoal = "";
var wins = 0;
var losses = 0;
var score = 0;

var images = ["../unit-4-game/assets/images/images-1.jpg", "../unit-4-game/assets/images/images-2.jpg", "../unit-4-game/assets/images/images-3.jpg", "../unit-4-game/assets/images/images-4.jpg"]

function randomGoalNumber() {
    scoreGoal = Math.floor(Math.random() * 100) + 19;
}

randomGoalNumber()

$("#numberGoal").text(scoreGoal);
$("#wins").text(wins);
$("#losses").text(losses);
$("#score").text(score);




for (var i = 0; i < 4; i++) {


    var imageCrystal = $("<img>");


    imageCrystal.addClass("crystal-image");


    imageCrystal.attr("src", images[i]);

    imageCrystal.attr("data-crystalvalue", (Math.floor(Math.random() * 12) + 1));


    $("#crystals").append(imageCrystal);
}

$(".crystal-image").on("click", function () {


    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    score += crystalValue;


    $("#score").text(score);
    $("#message").text("");

    if (score === scoreGoal) {
        alert("Winner winner, chicken dinner!");
        wins++;
        score = 0;
        randomGoalNumber();
        $("#numberGoal").text(scoreGoal);
    } else if (score >= scoreGoal) {
       alert("Fail!");
        losses++;
        score = 0;
        randomGoalNumber();
        $("#numberGoal").text(scoreGoal);
    }

    $("#wins").text(wins);
    $("#losses").text(losses);

});