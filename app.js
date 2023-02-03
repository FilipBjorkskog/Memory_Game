document.querySelector('#button1').addEventListener('click', function(e){
    var audio = new Audio('Hi-hat.mp3');
    audio.play();
});

document.querySelector('#button2').addEventListener('click', function(e){
    var audio = new Audio('Snare.mp3');
    audio.play();
});

document.querySelector('#button3').addEventListener('click', function(e){
    var audio = new Audio('Clap.wav');
    audio.play();
});

document.querySelector('#button4').addEventListener('click', function(e){
    var audio = new Audio('Cymbal.mp3');
    audio.play();
});