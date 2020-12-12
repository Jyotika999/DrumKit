window.addEventListener("keydown", function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!audio) return;
    audio.currentTime =0;
    audio.play();
    key.childNodes[1].classList.add('playing');
    setTimeout(function(){
        key.childNodes[1].classList.remove('playing');
    }, 90);
})
