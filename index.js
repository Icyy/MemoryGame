var buttonColors = ["yellow", "blue", "red", "green"];
var choices = [];
var tey = false;
var lvl = 0;
var userchoice = [];


$(document).keypress(function () {
    if (!tey) {
        $("h1").text("Level " + lvl);
        nextSeqence();
        tey = true;


    }
});

$(".btn").on("click", function () {

    userchoice.push(this.id);
    console.log(userchoice.length);
    playSound(this.id);
    aniPress(this.id);
    check(userchoice.length - 1);
});

function nextSeqence() {


    lvl++;
    $("h1").text("Level " + lvl);
    var num = Math.floor(Math.random() * 4);
    var cId = buttonColors[num];
    choices.push(cId);
    console.log(choices.length);
    $("#" + cId).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(cId);

}



// // console.log(choices);
// console.log(userchoice.length);
// console.log(choices.length);


function playSound(sname) {
    var sound = new Audio("./sounds/" + sname + ".mp3");
    sound.play();
}

function aniPress(incolor) {
    // console.log(incolor);
    $("#" + incolor).addClass("pressed");
    setTimeout(() => {
        $("#" + incolor).removeClass("pressed");
    }, 100);;
}

function check(level) {
    if (choices[level] === userchoice[level]) {
        if (choices.length === userchoice.length) {
            setTimeout(function () {
                userchoice.length = 0;
                nextSeqence();
            }, 1000);

        }
    } else {

        playSound("wrong");
        $("body").addClass("game-over");
        $("h1").text("Sorry this is the wrong sequence!");
        setTimeout(() => {
            $("h1").text("Press any button to restart");
            $("body").removeClass("game-over");
        }, 3000);

        $(document).keypress(function () {
            
                choices.length=0;
                userchoice.length=0;
                lvl = 0;
                nextSeqence();
                


            
        });
    }
}