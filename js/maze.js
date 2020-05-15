var template1 = [
    0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];

var template2 = [
    0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1,
    1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1,
    1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1,
    1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1,
    1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1,
    1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1,
    1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1,
    1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1,
    1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];

var template3 = [
    0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1,
    1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1,
    1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1,
    1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1,
    1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1,
    1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1,
    1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1,
    1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
    1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1,
    1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1,
    1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1,
    1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];

function saveToLocalStorage() {
    var myDate = new Date();
    var key = String(myDate.getDate()).padStart(2, '0') + "." + (myDate.getMonth() + 1).toString() + "." + myDate.getFullYear().toString();
    var name = document.getElementById("playerName").value;
    var steps = player.moves;
    if (true) {
        myObj = {
            Name: name,
            Pocet_Krokov: steps
        };
        myJSON = JSON.stringify(myObj);

        localStorage.setItem(key, myJSON);
    }
}

function mute() {

    console.log(document.getElementById("pic").src);
    if (song.muted == false || pop.muted == false) {
        document.getElementById("pic").src = "https://chiller104.github.io/TAMZ/images/sprites/mute.svg";
        song.muted = true;
        pop.muted = true;
    } else if (song.muted == true || pop.muted == true) {
        document.getElementById("pic").src = "https://chiller104.github.io/TAMZ/images/sprites/sound.svg";
        song.muted = false;
        pop.muted = false;
    }
    console.log(document.getElementById("pic").src);
}

function enableMute() {
    song.muted = true;
    pop.muted = true;
    changePicture()
}

function disableMute() {
    song.muted = false;
    pop.muted = false;
    changePicture()
}

function displayVictoryMess(moves) {
    document.getElementById("moves").innerHTML = "Prešiel si " + moves + " krokov";
    toggleVisablity("Message-Container");

    var playerName = document.getElementById("playerName").value;

    document.getElementById("congrats").innerHTML = `Gratulujeme ${playerName}, dorazil si na skúšku!`;
}

function toggleVisablity(id) {
    if (document.getElementById(id).style.display == "block") {
        document.getElementById(id).style.display = "none";
    } else {
        document.getElementById(id).style.display = "block";
    }
}

var canvas = document.getElementById("canvas1");
var ctx1 = canvas.getContext("2d");

var canvas2 = document.getElementById("canvas2");
var ctx2 = canvas2.getContext("2d");

var canvas3 = document.getElementById("canvas3");
var ctx3 = canvas3.getContext("2d");

var student = new Image();
student.src = "./images/sprites/student.svg"

var ciel = new Image();
ciel.src = "./images/sprites/degree.png"

var wall = new Image();
wall.src = "./images/sprites/wall.png"

var pop = new Audio("./audio/pop.mp3");
var song = new Audio("./audio/overtune.mp3");

var maze = [];

var player = new Object({
    x: 0,
    y: 0,
    loc: 0,
    moves: 0
});

var x = 0;
var y = 0;

function MoveUp() {
    if (document.getElementById("obtiaznost").value == 1) {
        if (player.y != 0) {
            player.loc -= 12;
            if (maze[player.loc].state != 1) {
                ctx1.clearRect(player.x * 25, player.y * 25, 25, 25);
                player.y--;
                player.moves++;
                pop.play();
            } else {
                player.loc += 12;
            }
        }
        ctx1.drawImage(student, player.x * 25, player.y * 25, 25, 25);
        if (maze[player.loc].state == 2) {
            toggleVisablity("canvas1");
            song.pause();
            saveToLocalStorage();
            displayVictoryMess(player.moves);
        }
    } else if (document.getElementById("obtiaznost").value == 2) {
        if (player.y != 0) {
            player.loc -= 18;
            if (maze[player.loc].state != 1) {
                ctx2.clearRect(player.x * 16, player.y * 16, 16, 16);
                player.y--;
                player.moves++;
                pop.play();
            } else {
                player.loc += 18;
            }
        }
        ctx2.drawImage(student, player.x * 16, player.y * 16, 16, 16);
        if (maze[player.loc].state == 2) {
            toggleVisablity("canvas2");
            song.pause();
            saveToLocalStorage();
            displayVictoryMess(player.moves);
        }
    } else if (document.getElementById("obtiaznost").value == 3) {
        if (player.y != 0) {
            player.loc -= 25;
            if (maze[player.loc].state != 1) {
                ctx3.clearRect(player.x * 12, player.y * 12, 12, 12);
                player.y--;
                player.moves++;
                pop.play();
            } else {
                player.loc += 25;
            }
        }
        ctx3.drawImage(student, player.x * 12, player.y * 12, 12, 12);
        if (maze[player.loc].state == 2) {
            toggleVisablity("canvas3");
            toggleVisablity("control");
            song.pause();
            saveToLocalStorage();
            displayVictoryMess(player.moves);
        }
    }
}

function MoveDown() {
    if (document.getElementById("obtiaznost").value == 1) {
        if (player.y != 11) {
            player.loc += 12;
            if (maze[player.loc].state != 1) {
                ctx1.clearRect(player.x * 25, player.y * 25, 25, 25);
                player.y++;
                player.moves++;
                pop.play();
            } else {
                player.loc -= 12;
            }
        }
        ctx1.drawImage(student, player.x * 25, player.y * 25, 25, 25);
        if (maze[player.loc].state == 2) {
            toggleVisablity("canvas1");
            song.pause();
            saveToLocalStorage();
            displayVictoryMess(player.moves);
        }
    } else if (document.getElementById("obtiaznost").value == 2) {
        if (player.y != 17) {
            player.loc += 18;
            if (maze[player.loc].state != 1) {
                ctx2.clearRect(player.x * 16, player.y * 16, 16, 16);
                player.y++;
                player.moves++;
                pop.play();
            } else {
                player.loc -= 18;
            }
        }
        ctx2.drawImage(student, player.x * 16, player.y * 16, 16, 16);
        if (maze[player.loc].state == 2) {
            toggleVisablity("canvas2");
            song.pause();
            saveToLocalStorage();
            displayVictoryMess(player.moves);
        }
    } else if (document.getElementById("obtiaznost").value == 3) {
        if (player.y != 24) {
            player.loc += 25;
            if (maze[player.loc].state != 1) {
                ctx3.clearRect(player.x * 12, player.y * 12, 12, 12);
                player.y++;
                player.moves++;
                pop.play();
            } else {
                player.loc -= 25;
            }
        }
        ctx3.drawImage(student, player.x * 12, player.y * 12, 12, 12);
        if (maze[player.loc].state == 2) {
            toggleVisablity("canvas3");
            song.pause();
            saveToLocalStorage();
            toggleVisablity("control");
            displayVictoryMess(player.moves);
        }
    }
}

function MoveLeft() {
    if (document.getElementById("obtiaznost").value == 1) {
        if (player.x != 0) {
            player.loc--;
            if (maze[player.loc].state != 1) {
                ctx1.clearRect(player.x * 25, player.y * 25, 25, 25);
                player.x--;
                player.moves++;
                pop.play();
            } else {
                player.loc++;
            }
        }
        ctx1.drawImage(student, player.x * 25, player.y * 25, 25, 25);
        if (maze[player.loc].state == 2) {
            toggleVisablity("canvas1");
            song.pause();
            saveToLocalStorage();
            displayVictoryMess(player.moves);
        }
    } else if (document.getElementById("obtiaznost").value == 2) {
        if (player.x != 0) {
            player.loc--;
            if (maze[player.loc].state != 1) {
                ctx2.clearRect(player.x * 16, player.y * 16, 16, 16);
                player.x--;
                player.moves++;
                pop.play();
            } else {
                player.loc++;
            }
        }
        ctx2.drawImage(student, player.x * 16, player.y * 16, 16, 16);
        if (maze[player.loc].state == 2) {
            toggleVisablity("canvas2");
            song.pause();
            saveToLocalStorage();
            displayVictoryMess(player.moves);
        }
    } else if (document.getElementById("obtiaznost").value == 3) {
        if (player.x != 0) {
            player.loc--;
            if (maze[player.loc].state != 1) {
                ctx3.clearRect(player.x * 12, player.y * 12, 12, 12);
                player.x--;
                player.moves++;
                pop.play();
            } else {
                player.loc++;
            }
        }
        ctx3.drawImage(student, player.x * 12, player.y * 12, 12, 12);
        if (maze[player.loc].state == 2) {
            toggleVisablity("canvas3");
            song.pause();
            saveToLocalStorage();
            toggleVisablity("control");
            displayVictoryMess(player.moves);
        }
    }
}

function MoveRight() {
    if (document.getElementById("obtiaznost").value == 1) {
        if (player.x != 11) {
            player.loc++;
            if (maze[player.loc].state != 1) {
                ctx1.clearRect(player.x * 25, player.y * 25, 25, 25);
                player.x++;
                player.moves++;
                pop.play();
            } else {
                player.loc--;
            }
        }
        ctx1.drawImage(student, player.x * 25, player.y * 25, 25, 25);
        if (maze[player.loc].state == 2) {
            toggleVisablity("canvas1");
            song.pause();
            saveToLocalStorage();
            displayVictoryMess(player.moves);
        }
    } else if (document.getElementById("obtiaznost").value == 2) {
        if (player.x != 17) {
            player.loc++;
            if (maze[player.loc].state != 1) {
                ctx2.clearRect(player.x * 16, player.y * 16, 16, 16);
                player.x++;
                player.moves++;
                pop.play();
            } else {
                player.loc--;
            }
        }
        ctx2.drawImage(student, player.x * 16, player.y * 16, 16, 16);
        if (maze[player.loc].state == 2) {
            toggleVisablity("canvas2");
            song.pause();
            saveToLocalStorage();
            displayVictoryMess(player.moves);
        }
    } else if (document.getElementById("obtiaznost").value == 3) {
        if (player.x != 24) {
            player.loc++;
            if (maze[player.loc].state != 1) {
                ctx3.clearRect(player.x * 12, player.y * 12, 12, 12);
                player.x++;
                player.moves++;
                pop.play();
            } else {
                player.loc--;
            }
        }
        ctx3.drawImage(student, player.x * 12, player.y * 12, 12, 12);
        if (maze[player.loc].state == 2) {
            toggleVisablity("canvas3");
            song.pause();
            saveToLocalStorage();
            toggleVisablity("control");
            displayVictoryMess(player.moves);
        }
    }
}

function keyPress(e) {

    switch (e.keyCode) {

        case 68: // D - VPRAVO
            MoveRight();
            break;

        case 65: // A - VLAVO
            MoveLeft();
            break;

        case 83: // S - DOLE
            MoveDown();
            break;

        case 87: // W - HORE
            MoveUp();
            break;
        case 39: // D - VPRAVO
            MoveRight();
            break;

        case 37: // A - VLAVO
            MoveLeft();
            break;

        case 40: // S - DOLE
            MoveDown();
            break;

        case 38: // W - HORE
            MoveUp();
            break;
    }
}

function start() {

    toggleVisablity("control");
    toggleVisablity("menu");
    song.play();

    if (document.getElementById("obtiaznost").value == 1) {

        for (var i = 0; i < 12 * 12; i++) {
            maze.push({
                "x": x,
                "y": y,
                "state": template1[i]
            });
            if (x == 11) {
                y++;
                x = 0;
            } else {
                x++;
            }
        }
        toggleVisablity("canvas1");

        for (var i = 0; i < 12 * 12; i++) {
            if (maze[i].state == 1 || maze[i].state == "1")
                ctx1.drawImage(wall, maze[i].x * 25, maze[i].y * 25, 25, 25);
            if (maze[i].state == 2 || maze[i].state == "2")
                ctx1.drawImage(ciel, maze[i].x * 25, maze[i].y * 25, 25, 25);
        }
        ctx1.drawImage(student, player.x * 25, player.y * 25, 25, 25)

    }

    if (document.getElementById("obtiaznost").value == 2) {

        for (var i = 0; i < 18 * 18; i++) {
            maze.push({
                "x": x,
                "y": y,
                "state": template2[i]
            });
            if (x == 17) {
                y++;
                x = 0;
            } else {
                x++;
            }
        }

        toggleVisablity("canvas2");
        for (var i = 0; i < 18 * 18; i++) {
            if (maze[i].state == 1 || maze[i].state == "1")
                ctx2.drawImage(wall, maze[i].x * 16, maze[i].y * 16, 16, 16);
            if (maze[i].state == 2 || maze[i].state == "2")
                ctx2.drawImage(ciel, maze[i].x * 16, maze[i].y * 16, 16, 16);
        }
        ctx2.drawImage(student, player.x * 16, player.y * 16, 16, 16)

    }

    if (document.getElementById("obtiaznost").value == 3) {

        for (var i = 0; i < 25 * 25; i++) {
            maze.push({
                "x": x,
                "y": y,
                "state": template3[i]
            });
            if (x == 24) {
                y++;
                x = 0;
            } else {
                x++;
            }
        }

        toggleVisablity("canvas3");
        for (var i = 0; i < 25 * 25; i++) {
            if (maze[i].state == 1 || maze[i].state == "1")
                ctx3.drawImage(wall, maze[i].x * 12, maze[i].y * 12, 12, 12);
            if (maze[i].state == 2 || maze[i].state == "2")
                ctx3.drawImage(ciel, maze[i].x * 12, maze[i].y * 12, 12, 12);
        }
        ctx3.drawImage(student, player.x * 12, player.y * 12, 12, 12)

    }
    window.addEventListener("keydown", keyPress, true);
}