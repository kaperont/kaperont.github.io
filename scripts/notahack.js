function display(src, width, height, alt) {
    // var a = document.createElement("img");
    // a.src = src;
    // a.width = width;
    // a.height = height;
    // a.alt = alt;
    // a.display = "block";
    // a.style.margin = "0 auto";
    // a.style.top = "100px";
    // document.body.appendChild(a);

    // // Load some scary audio bro
    // var source = "https://kperont.github.io/assets/scaarryy.mp3"
    // var audio = document.createElement("audio");
    // //
    // audio.autoplay = true;
    // //
    // audio.load()
    // audio.addEventListener("load", function() { 
    //     audio.play(); 
    // }, true);
    // audio.src = source;
    // document.body.appendChild(audio);
    var obj = {"video": {
        "value": "<iframe title='YouTube video player' type=\"text/html\" width='640' height='390' src='https://www.youtube.com/watch?v=dQw4w9WgXcQ' frameborder='0' allowFullScreen></iframe>"
    }}

    document.activeElement.appendChild(obj.video.value);
    
    // var obj = {"video": {
    //     "value": "<iframe title='YouTube video player' type=\"text/html\" width='640' height='390' src='http://www.youtube.com/embed/W-Q7RMpINVo' frameborder='0' allowFullScreen></iframe>"
    // }}
    // $("#test").html(obj.video.value);
}