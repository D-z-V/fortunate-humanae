const title = document.getElementById("title");
const btn = document.getElementById("btn");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

var counter_1, counter_2 = [0,0,0,0,0];
var game_status = 1;
var turn = 1;

startGame();

function startGame() {
    btn.onclick = function() {
        var start_player = 0;
        game_status = 1;
        var choice = 0;
        title.innerHTML = "Toss, Player 1 Choose";
        btn.style.display = "none";
        btn2.style.display = "block";
        btn3.style.display = "block";
        btn2.addEventListener("click", function() {
            choice = 0;
            var r = Math.floor(Math.random() * 2);
            if (r == 0) {
                title.innerHTML = "Toss Won by Player 1";
                start_player = 1;
            }
            else {
                title.innerHTML = "Toss Won by Player 2";
                start_player = 2;
            }
            if (game_status == 1) {
                game_status = 0;
                counter_1 = [0,0,0,0,0]
                counter_2 = [0,0,0,0,0]
                for (var i = 0; i < 5; i++) {
                    l_c = document.getElementById("l-" + i).children;
                    r_c = document.getElementById("r-" + i).children;
                    for(var j = 0; j < l_c.length; j++) {
                        l_c[j].style.display = "none"; 
                        r_c[j].style.display = "none";
                    }
                }
                btn.style.display = "none";
                btn2.style.display = "none";
                btn3.style.display = "none";
                btn1.style.display = "block";
                btn1.innerHTML = "Player " + (start_player).toString() + " Generate";
                btn1.onclick = function() {
                    nextSequence(start_player);
                }
            }
        })
        btn3.addEventListener("click", function() {
            choice = 1;
            var r = Math.floor(Math.random() * 2);
            if (r == 0) {
                title.innerHTML = "Toss Won by Player 1";
                start_player = 1;
            }
            else {
                title.innerHTML = "Toss Won by Player 2";
                start_player = 2;
            }
            if (game_status == 1) {
                game_status = 0;
                counter_1 = [0,0,0,0,0]
                counter_2 = [0,0,0,0,0]
                for (var i = 0; i < 5; i++) {
                    l_c = document.getElementById("l-" + i).children;
                    r_c = document.getElementById("r-" + i).children;
                    for(var j = 0; j < l_c.length; j++) {
                        l_c[j].style.display = "none"; 
                        r_c[j].style.display = "none";
                    }
                }
                btn.style.display = "none";
                btn2.style.display = "none";
                btn3.style.display = "none";
                btn1.style.display = "block";
                btn1.innerHTML = "Player " + (start_player).toString() + " Generate";
                btn.onclick = nextSequence(start_player);
            }
        })
    }
}

function toss() {

}

function nextSequence(player) {
    random = Math.floor(Math.random() * 5);
        if (player == 1) {
            if (counter_1[random] <= 3) {
                id = "l-" + random.toString();
                title.innerHTML = "Player 1, Generated Number : " + (random + 1).toString();
                part = document.getElementById(id).children[counter_1[random]];
                part.style.display = "flex";
                counter_1[random]++;
                btn1.innerHTML = "Player 2, Generate";
                checkGameStatus();
            }
            else {
                title.innerHTML = "Player 1, Generated Number : " + (random + 1).toString();
                btn1.innerHTML = "Player 2, Generate";
                checkGameStatus();
            }
        }
        else if (player == 2) {
            if (counter_2[random] <= 3) {
                id = "r-" + random.toString();
                title.innerHTML = "Player 2, Generated Number : " + (random+1).toString();
                part = document.getElementById(id).children[counter_2[random]];
                part.style.display = "flex";
                counter_2[random]++;
                btn1.innerHTML = "Player 1, Generate";
            }
            else {
                title.innerHTML = "Player 2, Generated Number : " + (random + 1).toString();
                btn1.innerHTML = "Player 1, Generate";
                checkGameStatus();
            }
        }
        checkGameStatus();
}

function checkGameStatus() {
    if (counter_1[0] == 4 && counter_1[1] == 4 && counter_1[2] == 4 && counter_1[3] == 4 && counter_1[4] == 4) {
        game_status = 0;
        title.innerHTML = "Player 1 Wins";
        GameOver();
    }
    else if (counter_2[0] == 4 && counter_2[1] == 4 && counter_2[2] == 4 && counter_2[3] == 4 && counter_2[4] == 4) {
        game_status = 0;
        title.innerHTML = "Player 2 Wins";
        GameOver();
    }
    else {
        game_status = 1;

        btn1.onclick = function() {
            if (turn == 1) {
                turn = 2;
            }
            else {
                turn = 1;
            }
            nextSequence(turn);
        }
    }
}

function GameOver() {
    btn.innerHTML = "Start Over";
    btn.style.display = "block";
    btn1.style.display = "none";
    startGame();
}
