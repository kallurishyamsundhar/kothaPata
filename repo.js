function click1() {
    var container1= document.querySelector(".container1");
    
    container1.style.animation = "none";  // Reset the animation
    void container1.offsetWidth;  // Trigger a reflow to apply the reset
    container1.style.animation = "move1 1s forwards";  // Apply the animation again
    document.querySelector(".topdown").style.display = "none";
}
var adds = 0;
var audio1 = new Audio('./harley.mp3');
var audio2 = new Audio('./calm.mp3');
var audio3 = new Audio('./closer.mp3');
var audio4 = new Audio('./levitating.mp3');
var audio5 = new Audio('./blinding.mp3');
var audio6 = new Audio('./perfect.mp3');


var fbutton=document.querySelector(".songitemplay")
var secondbutton=document.querySelector("#secondbutton")
var thirdbutton=document.querySelector(".thirdbutton")
var fourthbutton=document.querySelector(".fourthbutton")
var fifthbutton=document.querySelector(".fifthbutton")
var sixthbutton=document.querySelector(".sixthbutton")


function red1() {
    var favsub = document.querySelector(".favsub");
    var newText1 = document.createTextNode("harley in hawai");
    favsub.style.visibility="visible"
    if (adds === 0) {
        var emoji = document.getElementById("w1");
        emoji.src = "./pink.png";

        // Create a new paragraph element
        var paragraph = document.createElement("p");
        paragraph.addEventListener("click",()=>{
            var musicplayer=document.querySelector(".musicplayer")
            musicplayer.style.visibility="visible"
            paragraph.style.color="pink"
            audio1.play()
            audio2.pause()
            audio3.pause()
            audio4.pause()
            audio5.pause()
            audio6.pause()
            var head=document.querySelector(".musicname")
            var harleyPic = document.querySelector(".harleypic");
            harleyPic.src="./harley.jpg"
            head.innerHTML="harley in hawai"
            var playbutton=document.querySelector("#a")
            playbutton.src="./pause.png"
            fbutton.src="./pause.png"
            secondbutton.src="play-button.png"
            thirdbutton.src="play-button.png"
            fourthbutton.src="play-button.png"
           fifthbutton.src="play-button.png"
            sixthbutton.src="play-button.png"
        })
        // Store the text node reference in a variable
        paragraph.textNodeReference = newText1;

        // Append the text node to the paragraph
        paragraph.appendChild(newText1);

        // Append the paragraph to the favsub div
        favsub.appendChild(paragraph);
        adds = adds + 1;
    } else {
        var emoji = document.getElementById("w1");
        emoji.src = "./white.png";
        
        // Remove the last added paragraph
        favsub.removeChild(favsub.lastChild);
        adds = 0;
    }
}

function hides(){
    var favsub = document.querySelector(".favsub");
    favsub.style.visibility="hidden"
}
var adds2 = 0;

function red2() {
    var favsub = document.querySelector(".favsub");
    var newText = document.createTextNode("calmdown");
    favsub.style.visibility="visible"
    
    if (adds2 === 0) {
        var emoji1 = document.getElementById("w2");
        emoji1.src = "./pink.png";

        // Create a new paragraph element
        var paragraph = document.createElement("p");
        paragraph.addEventListener("click",()=>{
            var musicplayer=document.querySelector(".musicplayer")
            musicplayer.style.visibility="visible"
            paragraph.style.color="pink"
            audio2.play()
            audio1.pause()
            audio3.pause()
            audio4.pause()
            audio5.pause()
            audio6.pause()
            var playbutton=document.querySelector("#a")
            playbutton.src="./pause.png"
            var head=document.querySelector(".musicname")
            var harleyPic = document.querySelector(".harleypic");
            harleyPic.src="./calmdown.jpg"
            head.innerHTML="calmdown"
            secondbutton.src="pause.png"
            fbutton.src="play-button.png"
            thirdbutton.src="play-button.png"
            fourthbutton.src="play-button.png"
            fifthbutton.src="play-button.png"
            sixthbutton.src="play-button.png"
        })
        // Store the text node reference in a variable
        paragraph.textNodeReference2 = newText;

        // Append the text node to the paragraph
        paragraph.appendChild(newText);

        // Append the paragraph to the favsub div
        favsub.appendChild(paragraph);
        favsub
        adds2 = adds2 + 1;
    } else {
        var emoji1 = document.getElementById("w2");
        emoji1.src = "./white.png";

        // Remove the last added paragraph
        favsub.removeChild(favsub.lastChild);
        adds2 = 0;
    }
}

var adds3 = 0;

function red3() {

    var favsub = document.querySelector(".favsub");
    favsub.style.visibility="visible"
    var newText = document.createTextNode("closer");

    if (adds3 === 0) {
        var emoji1 = document.getElementById("w3");
        emoji1.src = "./pink.png";

        // Create a new paragraph element
        var paragraph = document.createElement("p");
        paragraph.addEventListener("click",()=>{
            var musicplayer=document.querySelector(".musicplayer")
            musicplayer.style.visibility="visible"
            paragraph.style.color="pink"
            audio1.pause()
            audio2.pause()
            audio3.play()
            audio4.pause()
            audio5.pause()
            audio6.pause()
            var playbutton=document.querySelector("#a")
            playbutton.src="./pause.png"
            var head=document.querySelector(".musicname")
            var harleyPic = document.querySelector(".harleypic");
            harleyPic.src="./closer.png"
            head.innerHTML="closer"
            thirdbutton.src="./pause.png"
            fbutton.src="./play-button.png"
            secondbutton.src="./play-button.png"
            fourthbutton.src="./play-button.png"
            fifthbutton.src="./play-button.png"
            sixthbutton.src="./play-button.png"
        })
        // Store the text node reference in a variable
        paragraph.textNodeReference3 = newText;

        // Append the text node to the paragraph
        paragraph.appendChild(newText);

        // Append the paragraph to the favsub div
        favsub.appendChild(paragraph);
        adds3 = adds3 + 1;
    } else {
        var emoji1 = document.getElementById("w3");
        emoji1.src = "./white.png";
       
        // Remove the last added paragraph
        favsub.removeChild(favsub.lastChild);
        adds3 = 0;
    }
}
var adds4 = 0;

function red4() {
    var favsub = document.querySelector(".favsub");
    favsub.style.visibility="visible"
    var newText = document.createTextNode("levitating");

    if (adds4 === 0) {
        var emoji1 = document.getElementById("w4");
        emoji1.src = "./pink.png";

        // Create a new paragraph element
        var paragraph = document.createElement("p");
        paragraph.addEventListener("click",()=>{
            var musicplayer=document.querySelector(".musicplayer")
            musicplayer.style.visibility="visible"
            paragraph.style.color="pink"
            audio1.pause()
            audio2.pause()
            audio3.pause()
            audio4.play()
            audio5.pause()
            audio6.pause()
            var head=document.querySelector(".musicname")
            var harleyPic = document.querySelector(".harleypic");
            harleyPic.src="./levitating.jpeg"
            head.innerHTML="levitating"
            var playbutton=document.querySelector("#a")
            playbutton.src="./pause.png"
            fourthbutton.src="./pause.png"
            fbutton.src="./play-button.png"
            secondbutton.src="./play-button.png"
            thirdbutton.src="./play-button.png"
            fifthbutton.src="./play-button.png"
        })
        // Store the text node reference in a variable
        paragraph.textNodeReference4 = newText;

        // Append the text node to the paragraph
        paragraph.appendChild(newText);

        // Append the paragraph to the favsub div
        favsub.appendChild(paragraph);
        adds4 = adds4 + 1;
    } else {
        var emoji1 = document.getElementById("w4");
        emoji1.src = "./white.png";

        // Remove the last added paragraph
        favsub.removeChild(favsub.lastChild);
        adds4 = 0;
    }
}
var adds5 = 0;

function red5() {
    var favsub = document.querySelector(".favsub");
    favsub.style.visibility="visible"
    var newText = document.createTextNode("blindinglights");

    if (adds5 === 0) {
        var emoji1 = document.getElementById("w5");
        emoji1.src = "./pink.png";

        // Create a new paragraph element
        var paragraph = document.createElement("p");
        paragraph.addEventListener("click",()=>{
            var musicplayer=document.querySelector(".musicplayer")
            musicplayer.style.visibility="visible"
            paragraph.style.color="pink"
            audio1.pause()
            audio2.pause()
            audio3.pause()
            audio4.pause()
            audio5.play()
            audio6.pause()
            var head=document.querySelector(".musicname")
            var harleyPic = document.querySelector(".harleypic");
            harleyPic.src="./blindinglights.jpeg"
            head.innerHTML="blindinglights"
            var playbutton=document.querySelector("#a")
            playbutton.src="./pause.png"
            fifthbutton.src="./pause.png"
            fbutton.src="./play-button.png"
            secondbutton.src="./play-button.png"
            thirdbutton.src="./play-button.png"
            fourthbutton.src="./play-button.png"
            fifthbutton.src="./play-button.png"
        })
        // Store the text node reference in a variable
        paragraph.textNodeReference5 = newText;

        // Append the text node to the paragraph
        paragraph.appendChild(newText);

        // Append the paragraph to the favsub div
        favsub.appendChild(paragraph);
        adds5 = adds5 + 1;
    } else {
        var emoji1 = document.getElementById("w5");
        emoji1.src = "./white.png";

        // Remove the last added paragraph
        favsub.removeChild(favsub.lastChild);
        adds5 = 0;
    }
}
var adds6 = 0;

function red6() {
   
    var favsub = document.querySelector(".favsub");
    favsub.style.visibility="visible"
    var newText = document.createTextNode("perfect");

    if (adds6 === 0) {
        var emoji1 = document.getElementById("w6");
        emoji1.src = "./pink.png";

        // Create a new paragraph element
        var paragraph = document.createElement("p");
        paragraph.addEventListener("click",()=>{
            var musicplayer=document.querySelector(".musicplayer")
            musicplayer.style.visibility="visible"
            paragraph.style.color="pink"
            audio1.pause()
            audio2.pause()
            audio3.pause()
            audio4.pause()
            audio5.pause()
            audio6.play()
            var head=document.querySelector(".musicname")
            var harleyPic = document.querySelector(".harleypic");
            harleyPic.src="./perfect.jpeg"
            head.innerHTML="perfect"
            var playbutton=document.querySelector("#a")
            playbutton.src="./pause.png"
            sixthbutton.src="./pause.png"
            fbutton.src="./play-button.png"
            secondbutton.src="./play-button.png"
            thirdbutton.src="./play-button.png"
            fourthbutton.src="./play-button.png"
            fifthbutton.src="./play-button.png"
        })
        // Store the text node reference in a variable
        paragraph.textNodeReference6 = newText;

        // Append the text node to the paragraph
        paragraph.appendChild(newText);

        // Append the paragraph to the favsub div
        favsub.appendChild(paragraph);
        adds6 = adds6 + 1;
    } else {
        var emoji1 = document.getElementById("w6");
        emoji1.src = "./white.png";

        // Remove the last added paragraph
        favsub.removeChild(favsub.lastChild);
        adds6 = 0;
    }
}




//start-firstbutton 
var count=0
function entireplay(){
    var playbutton=document.querySelector("#secondbutton")
    playbutton.src="./play-button.png"
        var playbutton=document.querySelector("#a")
    playbutton.src="./play-button.png"
    document.querySelector(".musicplayer").style.visibility="visible"
    if (count==0  ){
        var harleyPic = document.querySelector(".harleypic");
    harleyPic.src="./harley.jpg"
        var playbutton=document.querySelector(".songitemplay")
        playbutton.src="./pause.png"
        var playbutton=document.querySelector("#a")
        playbutton.src="./pause.png"
          count=count+1
          harleyPic.classList.add("rotating");

          playAudio()
          
    
        }
        else{
            var harleyPic = document.querySelector(".harleypic");
    harleyPic.src="./harley.jpg"
            stopAudio()
            var playbutton=document.querySelector(".songitemplay")
        playbutton.src="./play-button.png"
            var playbutton=document.querySelector("#a")
        playbutton.src="./play-button.png"
            count=0
            harleyPic.classList.remove("rotating");
            }
        
    }

    var audio1 = new Audio('./harley.mp3');
    function playAudio() {
  audio1.play();
  audio6.pause();
        audio3.pause()
        audio4.pause()
        audio5.pause()
        audio2.pause()
    }
    function stopAudio() {
    audio1.pause();
   
    }
    //seekbar
        var seekbar = document.querySelector(".seekbar");

        function playAudio() {
            audio1.play();
        }

        function stopAudio() {
            audio1.pause();
            audio1.currentTime = 0;
        }

        audio1.addEventListener("timeupdate", function () {
            var value = (audio1.currentTime / audio1.duration) * 100;
            seekbar.value = value;
        });

        seekbar.addEventListener("input", function () {
            var seekValue = (seekbar.value / 100) * audio1.duration;
            audio1.currentTime = seekValue;
        });
//end-firstbutton   


//start-secondbutton 
function entireplay1(){
    stopAudio()

    var playbutton=document.querySelector(".songitemplay")
        playbutton.src="./play-button.png"
            var playbutton=document.querySelector("#a")
        playbutton.src="./play-button.png"
    var head=document.querySelector(".musicname")
    var harleyPic = document.querySelector(".harleypic");
    harleyPic.src="./calmdown.jpg"
    head.innerHTML="Calm down"
    console.log("hi")
    document.querySelector(".musicplayer").style.visibility="visible"
    if (count==0  ){
       
        var playbutton=document.querySelector("#secondbutton")
        playbutton.src="./pause.png"
        
        var playbutton=document.querySelector("#a")
        playbutton.src="./pause.png"
          count=count+1
          harleyPic.classList.add("rotating");

          playAudio1()
          
    
        }
        else{
            stopAudio1()
            var playbutton=document.querySelector("#secondbutton")
        playbutton.src="./play-button.png"
            var playbutton=document.querySelector("#a")
        playbutton.src="./play-button.png"
            count=0
            harleyPic.classList.remove("rotating");
            }
        
    }

    var audio2 = new Audio('./calm.mp3');
    
    function playAudio1() {
    
        audio2.play();
        audio6.pause();
        audio3.pause()
        audio4.pause()
        audio5.pause()
        audio1.pause()
    }
    function stopAudio1() {
        
        audio2.pause();
       
    }
    //2nd seekbar
    var seekbar = document.querySelector(".seekbar");

        function playAudio1() {
            audio2.play();
        }

        function stopAudio1() {
            audio2.pause();
            audio2.currentTime = 0;
        }

        audio2.addEventListener("timeupdate", function () {
            var value = (audio2.currentTime / audio2.duration) * 100;
            seekbar.value = value;
        });

        seekbar.addEventListener("input", function () {
            var seekValue = (seekbar.value / 100) * audio2.duration;
            audio2.currentTime = seekValue;
        });
//end-secondbutton 
function entireplay2(){
    stopAudio1()
    stopAudio()


    console.log("hi")
    // var playbutton=document.querySelector(".songitemplay")
    //     playbutton.src="./play-button.png"
            var playbutton=document.querySelector("#a")
        playbutton.src="./play-button.png"
    var head=document.querySelector(".musicname")
    var harleyPic = document.querySelector(".harleypic");
    harleyPic.src="./closer.png"
    head.innerHTML="Closer"
    var playbutton=document.querySelector("#secondbutton")
    playbutton.src="./play-button.png"
    document.querySelector(".musicplayer").style.visibility="visible"
    if (count==0  ){
       
        var playbutton=document.querySelector(".thirdbutton")
        playbutton.src="./pause.png"
        var playbutton=document.querySelector("#a")
        playbutton.src="./pause.png"
          count=count+1
          harleyPic.classList.add("rotating");

          playAudio2()
          
    
        }
        else{
            stopAudio2()
            var playbutton=document.querySelector(".thirdbutton")
        playbutton.src="./play-button.png"
            var playbutton=document.querySelector("#a")
        playbutton.src="./play-button.png"
            count=0
            harleyPic.classList.remove("rotating");
            }
        
    }

    var audio3 = new Audio('./closer.mp3');
    function playAudio2() {
    
        audio3.play();
    }
    function stopAudio2() {
        
        audio3.pause();
       
    }
    //third seek
    var seekbar = document.querySelector(".seekbar");

    function playAudio2() {
        audio3.play();
    }

    function stopAudio2() {
        audio3.pause();
        audio3.currentTime = 0;
    }

    audio3.addEventListener("timeupdate", function () {
        var value = (audio3.currentTime / audio3.duration) * 100;
        seekbar.value = value;
    });

    seekbar.addEventListener("input", function () {
        var seekValue = (seekbar.value / 100) * audio3.duration;
        audio3.currentTime = seekValue;
    });
//end-thirdbutton//
function entireplay3(){
    stopAudio1()
    stopAudio2()
    stopAudio()

    var playbutton=document.querySelector(".thirdbutton")
    playbutton.src="./play-button.png"
    console.log("hi")
    var playbutton=document.querySelector(".songitemplay")
        playbutton.src="./play-button.png"
            var playbutton=document.querySelector("#a")
        playbutton.src="./play-button.png"
    var head=document.querySelector(".musicname")
    var harleyPic = document.querySelector(".harleypic");
    harleyPic.src="./levitating.jpeg"
    head.innerHTML="levitating"
   
    document.querySelector(".musicplayer").style.visibility="visible"
    if (count==0  ){
       
        var playbutton=document.querySelector(".fourthbutton")
        playbutton.src="./pause.png"
        var playbutton=document.querySelector("#a")
        playbutton.src="./pause.png"
          count=count+1
          harleyPic.classList.add("rotating");

          playAudio3()
          
    
        }
        else{
            stopAudio3()
            var playbutton=document.querySelector(".fourthbutton")
        playbutton.src="./play-button.png"
            var playbutton=document.querySelector("#a")
        playbutton.src="./play-button.png"
            count=0
            harleyPic.classList.remove("rotating");
            }
        
    }

    var audio4 = new Audio('./levitating.mp3');
    function playAudio3() {
    
        audio4.play();
    }
    function stopAudio3() {
        
        audio4.pause();
       
    }
    //seekbar
    var seekbar = document.querySelector(".seekbar");

    function playAudio3() {
        audio4.play();
    }

    function stopAudio3() {
        audio4.pause();
        audio4.currentTime = 0;
    }

    audio4.addEventListener("timeupdate", function () {
        var value = (audio4.currentTime / audio4.duration) * 100;
        seekbar.value = value;
    });

    seekbar.addEventListener("input", function () {
        var seekValue = (seekbar.value / 100) * audio4.duration;
        audio4.currentTime = seekValue;
    });
//start 4th button

function entireplay4(){
    stopAudio1()
    stopAudio2()
    stopAudio3()
    stopAudio4()
    stopAudio5()
   
    stopAudio()


    var playbutton=document.querySelector(".songitemplay")
        playbutton.src="./play-button.png"
            var playbutton=document.querySelector("#a")
        playbutton.src="./play-button.png"
    var head=document.querySelector(".musicname")
    var harleyPic = document.querySelector(".harleypic");
    harleyPic.src="./blindinglights.jpeg"
    head.innerHTML="blindinglights"
    var playbutton=document.querySelector(".fourthbutton")
    playbutton.src="./play-button.png"
    document.querySelector(".musicplayer").style.visibility="visible"
    if (count==0  ){
       
        var playbutton=document.querySelector(".fifthbutton")
        playbutton.src="./pause.png"
        var playbutton=document.querySelector("#a")
        playbutton.src="./pause.png"
          count=count+1
          harleyPic.classList.add("rotating");

          playAudio4()
          
    
        }
        else{
            stopAudio4()
            var playbutton=document.querySelector(".fifthbutton")
        playbutton.src="./play-button.png"
            var playbutton=document.querySelector("#a")
        playbutton.src="./play-button.png"
            count=0
            harleyPic.classList.remove("rotating");
            }
        
    }

    var audio5 = new Audio('./blinding.mp3');
    function playAudio4() {
    
        audio5.play();
    }
    function stopAudio4() {
        
        audio5.pause();
       
    }
    //5thseekbar
    var seekbar = document.querySelector(".seekbar");

    function playAudio4() {
        audio5.play();
    }

    function stopAudio4() {
        audio5.pause();
        audio5.currentTime = 0;
    }

    audio5.addEventListener("timeupdate", function () {
        var value = (audio5.currentTime / audio5.duration) * 100;
        seekbar.value = value;
    });

    seekbar.addEventListener("input", function () {
        var seekValue = (seekbar.value / 100) * audio5.duration;
        audio5.currentTime = seekValue;
    });
//6thbutton//
function entireplay5(){
    stopAudio1()
    stopAudio2()
    stopAudio3()
    stopAudio4()
    stopAudio5()
    stopAudio()


    var playbutton=document.querySelector(".songitemplay")
        playbutton.src="./play-button.png"
            var playbutton=document.querySelector("#a")
        playbutton.src="./play-button.png"
    var head=document.querySelector(".musicname")
    var harleyPic = document.querySelector(".harleypic");
    harleyPic.src="./perfect.jpeg"
    head.innerHTML="perfect"
   
    var playbutton=document.querySelector(".fifthbutton")
    playbutton.src="./play-button.png"
    document.querySelector(".musicplayer").style.visibility="visible"
    if (count==0  ){
       
        var playbutton=document.querySelector(".sixthbutton")
        playbutton.src="./pause.png"
        var playbutton=document.querySelector("#a")
        playbutton.src="./pause.png"
          count=count+1
          harleyPic.classList.add("rotating");

          playAudio5()
          
    
        }
        else{
            stopAudio5()
            var playbutton=document.querySelector(".sixthbutton")
        playbutton.src="./play-button.png"
            var playbutton=document.querySelector("#a")
        playbutton.src="./play-button.png"
            count=0
            harleyPic.classList.remove("rotating");
            }
        
    }

    var audio6 = new Audio('./perfect.mp3');
    function playAudio5() {
    
        audio6.play();
    }
    function stopAudio5() {
        
        audio6.pause();
       
    }
    //sixth seek bar
    var seekbar = document.querySelector(".seekbar");

    function playAudio5() {
        audio6.play();
        audio1.pause()
        audio3.pause()
        audio4.pause()
        audio5.pause()
        audio2.pause()
    }

    function stopAudio5() {
        audio6.pause();
        audio6.currentTime = 0;
    }

    audio6.addEventListener("timeupdate", function () {
        var value = (audio6.currentTime / audio6.duration) * 100;
        seekbar.value = value;
    });

    seekbar.addEventListener("input", function () {
        var seekValue = (seekbar.value / 100) * audio6.duration;
        audio6.currentTime = seekValue;
    });
var countnum=0
function forwarding(){
    countnum=countnum+1
    switch(countnum){

        case 1:
           audio2.play()
           audio1.pause()
           audio3.pause()
           audio4.pause()
           audio5.pause()
           audio6.pause()
           var playbutton=document.querySelector("#a")
           playbutton.src="./pause.png"
           var harleyPic = document.querySelector(".harleypic");
           harleyPic.src="./calmdown.jpg"
           var head=document.querySelector(".musicname")
           head.innerHTML="calmdown"
        break
        case 2:
            audio3.play()
           audio1.pause()
           audio2.pause()
           audio4.pause()
           audio5.pause()
           audio6.pause()
           var playbutton=document.querySelector("#a")
        playbutton.src="./pause.png"
        var harleyPic = document.querySelector(".harleypic");
        harleyPic.src="./closer.png"
        var head=document.querySelector(".musicname")
        head.innerHTML="closer"
        break
        case 3:
            audio4.play()
           audio1.pause()
           audio2.pause()
           audio3.pause()
           audio5.pause()
           audio6.pause()
           var playbutton=document.querySelector("#a")
        playbutton.src="./pause.png"
        var harleyPic = document.querySelector(".harleypic");
        harleyPic.src="./levitating.jpeg"
        var head=document.querySelector(".musicname")
        head.innerHTML="levitating"
        break
        case 4:
            audio5.play()
           audio1.pause()
           audio2.pause()
           audio3.pause()
           audio4.pause()
           audio6.pause()
           var playbutton=document.querySelector("#a")
        playbutton.src="./pause.png"
        var harleyPic = document.querySelector(".harleypic");
        harleyPic.src="./Blindinglights.jpeg"
        var head=document.querySelector(".musicname")
        head.innerHTML="Blindinglights"
        break
        case 5:
            audio6.play()
           audio1.pause()
           audio2.pause()
           audio3.pause()
           audio4.pause()
           audio5.pause()
           var playbutton=document.querySelector("#a")
        playbutton.src="./pause.png"
        var harleyPic = document.querySelector(".harleypic");
        harleyPic.src="./perfect.jpeg"
        var head=document.querySelector(".musicname")
        head.innerHTML="perfect"

        break


    }
}
 var countnum1=0
function backwarding(){
    countnum1=countnum1+1
    switch(countnum1){
        case 1:
            audio6.play()
            audio1.pause()
            audio2.pause()
            audio3.pause()
            audio4.pause()
            audio5.pause()
            var playbutton=document.querySelector("#a")
         playbutton.src="./pause.png"
         var harleyPic = document.querySelector(".harleypic");
         harleyPic.src="./perfect.jpeg"
         var head=document.querySelector(".musicname")
         head.innerHTML="perfect"
        break
        case 2:
            audio5.play()
            audio1.pause()
            audio2.pause()
            audio3.pause()
            audio4.pause()
            audio6.pause()
            var playbutton=document.querySelector("#a")
         playbutton.src="./pause.png"
         var harleyPic = document.querySelector(".harleypic");
         harleyPic.src="./Blindinglights.jpeg"
         var head=document.querySelector(".musicname")
         head.innerHTML="Blindinglights"
         break
        case 3:
            audio4.play()
           audio1.pause()
           audio2.pause()
           audio3.pause()
           audio5.pause()
           audio6.pause()
           var playbutton=document.querySelector("#a")
        playbutton.src="./pause.png"
        var harleyPic = document.querySelector(".harleypic");
        harleyPic.src="./levitating.jpeg"
        var head=document.querySelector(".musicname")
        head.innerHTML="levitating"
        break
        case 4:
            audio3.play()
            audio1.pause()
            audio2.pause()
            audio4.pause()
            audio5.pause()
            audio6.pause()
            var playbutton=document.querySelector("#a")
         playbutton.src="./pause.png"
         var harleyPic = document.querySelector(".harleypic");
         harleyPic.src="./closer.png"
         var head=document.querySelector(".musicname")
         head.innerHTML="closer"
         break
        case 5:
            audio5.pause()
           audio1.pause()
           audio2.play()
           audio4.pause()
           audio3.pause()
           audio6.pause()
           var playbutton=document.querySelector("#a")
        playbutton.src="./pause.png"
        var harleyPic = document.querySelector(".harleypic");
        harleyPic.src="./calmdown.jpg"
        var head=document.querySelector(".musicname")
        head.innerHTML="calm down"
        break
     
}
}












