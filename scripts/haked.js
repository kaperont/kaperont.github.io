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
}
display('https://kperont.github.io/assets/scary-face.png', 840, 199, 'Dr. Nefario')
