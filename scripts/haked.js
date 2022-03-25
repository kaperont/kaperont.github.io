function display(src, width, height, alt) {
    var a = document.createElement("img");
    a.src = src;
    a.width = width;
    a.height = height;
    a.alt = alt;
    a.display = "block";
    a.style.margin = "0 auto";
    a.style.top = "100px";
    // document.body.style.backgroundImage = "url('https://kperont.github.io/assets/scary-face.png')";
    document.body.appendChild(a);

    // Load some scary audio bro
    var source = "https://kperont.github.io/assets/scaarryy.mp3"
    var audio = document.createElement("audio");
    //
    audio.autoplay = true;
    //
    audio.load()
    audio.addEventListener("load", function() { 
        audio.play(); 
    }, true);
    audio.src = source;
}
display('https://kperont.github.io/assets/scary-face.png', 840, 199, 'Dr. Nefario')