function note1() {
    alert("nothing here yet ;-;");
}

function note2() {
    alert("nothing here yet ;-;");
}

function note3() {
    alert("nothing here yet ;-;");
}

function note4() {
    alert("nothing here yet ;-;");
}

function doodle1() {
    alert("THE MOON IS MADE OF CHEESE I SWEAR !!");
}

var pin1clicked = 0;

function pin1() {
    pin1clicked++;
    if (pin1clicked == 5) {
        alert("what on earth are you doing");
        pin1clicked = -11;
    }
}

function reveal() {
    document.getElementById("reveal").style.display = "none";
    document.getElementById("revealtext").style.display = "none";
}

const music = new Audio("evil circus music.mp3");
var musicplaying = false;

function evilmusic() {
    if (musicplaying == false) {
        music.play();
        alert("music turned on")
        musicplaying = true;
    } else {
        music.pause();
        alert("music paused")
        musicplaying = false;
    }
}

var rotation = 0;

setInterval(() => {
    if (musicplaying == true) {
        rotation += 1;
        document.getElementById("music").style.transform = `rotate(${rotation}deg)`;
    }
}, 10);