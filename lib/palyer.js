
    window.onload = function(){
        "use strict";
        var index = 0; 
        var video = document.getElementById("videos"); // get the element id
        function playnext(){
                    document.getElementById("vtc").innerHTML = "Overclock your CPU with BIOS";
                    video.autoplay="autoplay"; //autopaly second video after video1 fingished 
                    video.src="video/p2.mp4";  //play second video
                    }
            video.onended = function() 
            {
                if(index){
                    index = 0;
                    video.src="video/p1.mp4";
                }else{
                    index = 1;
                    setTimeout(playnext,3000); //do the function playnext after 3 seconds delay.
                  }        
            };
    };// JavaScript Document