function display(src, width, height, alt) {
    var a = document.createElement("img");
    a.src = src;
    a.width = width;
    a.height = height;
    a.alt = alt;
    a.display = "block";
    a.style.margin = "0 auto";
    a.style.top = "100px";
    document.body.appendChild(a);

    // // Load some scary audio bro
    var source = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    var video = document.createElement("video");
    //
    video.src = source;
    video.autoplay = true;
    video.controls = true;
    video.muted = false;
    video.height = 240;
    video.width = 320;
    //
    video.load()
    video.addEventListener("load", function() { 
        video.play(); 
    }, true);
    
    document.body.appendChild(video);
    document.activeElement.appendChild(video);
    
    // var obj = {"video": {
    //     "value": "<iframe title='YouTube video player' type=\"text/html\" width='640' height='390' src='http://www.youtube.com/embed/W-Q7RMpINVo' frameborder='0' allowFullScreen></iframe>"
    // }}
    // $("#test").html(obj.video.value);
}