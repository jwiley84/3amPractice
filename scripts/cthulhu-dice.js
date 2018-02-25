var cthulhuSanity, gameOver, players;


cthulhuSanity = 0;
gameOver = false;
 
players = [{name: "Player 1, Cultist 1", sanity: 3, isMad: false}, 
                {name: "Player 1, Cultist 2", sanity: 3, isMad: false}, 
                {name: "Player 2, Cultist 1", sanity: 3, isMad: false}, 
                {name: "Player 2, Cultist 2", sanity: 3, isMad: false}];

//SET BUTTONS
var buttonP1C1 = document.getElementById("P1C1");
var buttonP1C2 = document.getElementById("P1C2");
var buttonP2C1 = document.getElementById("P2C1");
var buttonP2C2 = document.getElementById("P2C2");
var buttonRoll = document.getElementById("roll");

//BUTTONS CHANGE VICTIM LABEL
buttonP1C1.addEventListener("click", function(){
    var victim = document.querySelectorAll("#victimRow div");
    victim[1].innerHTML = "";
    victim[2].innerHTML = "";
    victim[3].innerHTML = "";
    victim[0].innerHTML = "<span class='current'>VICTIM</span>";
});
buttonP1C2.addEventListener("click", function(){
    var victim = document.querySelectorAll("#victimRow div");
    victim[0].innerHTML = "";
    victim[2].innerHTML = "";
    victim[3].innerHTML = "";
    victim[1].innerHTML = "<span class='current'>VICTIM</span>";
});
buttonP2C1.addEventListener("click", function(){
    var victim = document.querySelectorAll("#victimRow div");
    victim[1].innerHTML = "";
    victim[0].innerHTML = "";
    victim[3].innerHTML = "";
    victim[2].innerHTML = "<span class='current'>VICTIM</span>";
});
buttonP2C2.addEventListener("click", function(){
    var victim = document.querySelectorAll("#victimRow div");
    victim[1].innerHTML = "";
    victim[2].innerHTML = "";
    victim[0].innerHTML = "";
    victim[3].innerHTML = "<span class='current'>VICTIM</span>";
});

roll.addEventListener("click", function(){
    roll_Die();
    setSanity();
});

setSanity();
var caster = document.querySelectorAll("#casterRow div");
caster[2].innerHTML = "<span class='current'>CASTER</span>";
    
//maybe an end turn button?


//ROLLING THE DIE

function roll_Die() {
    var die_Face = Math.floor(Math.random() * 12) + 1;
    if (die_Face < 6) {
        console.log("YELLOW SIGN!", die_Face);
        document.querySelector("img").setAttribute("src", "images/pokemon/jolteon.png");
        players[1].sanity -= 1;
        cthulhuSanity += 1;
        document.querySelector("#cSanity").innerHTML = "<span class='pretty'>" + cthulhuSanity;
    }
    else if (die_Face < 10) {
        console.log("TENTACLE!", die_Face);
        document.querySelector("img").setAttribute("src", "images/pokemon/leafeon.png");
        players[1].sanity -= 1;
        players[0].sanity +=1;
    }
    else if (die_Face === 10) {
        console.log("ELDER SIGN!", die_Face);
        document.querySelector("img").setAttribute("src", "images/pokemon/sylveon.png")
        cthulhuSanity -= 1;
        players[0].sanity += 1;
    }
    else if (die_Face === 11) {
        console.log("EYE OF HORUS!", die_Face);
        document.querySelector("img").setAttribute("src", "images/pokemon/vaporeon.png")
    }
    else {
        console.log("CTHULHU!", die_Face);
        document.querySelector("img").setAttribute("src", "images/pokemon/umbreon.png")
        cthulhuSanity += 1;
        for (i = 0; i < 4; i++) {
            players[i].sanity -= 1;
        }
        //console.log(players[0].sanity + " is p1c1's sanity");
        document.querySelector("#cSanity").innerHTML = "<span class='pretty'>" + cthulhuSanity;
    }
};


//SETTING INTIAL SANITY
function setSanity() {
    for (g = 1; g <= 4; g++) {
        var madAsAHatter = document.querySelectorAll("#sanityRow div");
        madAsAHatter[g-1].innerHTML = "Sanity: <span class='current'>" + players[g-1].sanity;
    }
    document.querySelector("#cSanity").innerHTML = "<span class='pretty'>" + cthulhuSanity; 
}
//CHOOSING THE CASTER AND VICTIM
/*
var caster = document.querySelectorAll("tr:nth-child(4) td");

caster[0].innerHTML = "<span class='current'>CASTER</span>";
console.log(caster[0]);

var victim = document.querySelectorAll("tr:nth-child(5) td");

victim[2].innerHTML = "<span class='current'>VICTIM</span>";
*/

//ALTERING SANITY
function sanityCheck() {
    var sanityArray = [players[0].sanity, players[1].sanity, players[2].sanity, players[3].sanity];
    console.log(sanityArray);
    var stillAlive = 0;

    for (f = 1; f <=4; f++) {
        stillAlive += sanityArray[f-1];
    }
    
    console.log(stillAlive);
}
//player chooses victim
//player clicks to roll die
//effect applied
//victim clicks to roll, previous player as new "victim"
//check if game over


//}

/*if (blep > 0) {
    gameOver = false;
};
else if ()*/
