var drumBtn = document.querySelectorAll(".drum").length;



console.log(drumBtn);

for (var i = 0; i < drumBtn; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function (){

        this.style.color = "white"

        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();

    });
}


 