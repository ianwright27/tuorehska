
/*  
    @WrightIan 
    I knew you would come all the way here hehe.. 
    😘 
*/


// ------------------------------------------------------------- 
const uiOne = document.querySelector(".ui-one"); 
const uiTwo = document.querySelector(".ui-two"); 
const yesBtn = document.querySelector("#yesBtn"); 
const noBtn = document.querySelector("#noBtn"); 
const img = document.querySelector("#img");  
const errorMsg = document.querySelector(".error-msg"); 
const question = document.querySelector(".question"); 
const answer = document.querySelector(".answer"); 
const art = document.querySelector("#revealArt"); 
const audio = document.getElementById('rizzMusic');
// Special FX
const fireworksContainer = document.querySelector('.fireworks'); 
const fireworks = new Fireworks.default(fireworksContainer); 
// -------------------------------------------------------------


// Set the audio to loop
audio.loop = true;

// buttons 
yesBtn.addEventListener("click", function(){ 
    // reveal answer and keep question 
    answer.style.display = "flex"; 
    
    // change image 
    img.src = "assets/filter/final.jpg"; 
    
    // disable all buttons
    yesBtn.disabled = true; noBtn.disabled = true; 
    
    // yesBtn.style.background = "#dcdcdc"; 
    noBtn.style.background = "#dcdcdc"; 
    yesBtn.style.cursor = "#default"; noBtn.style.cursor = "default"; 
    
    // keep error message hidden 
    errorMsg.style.display = "none";  

    // reveal fireworks container 
    fireworksContainer.style.display = "block"; 

    // transparency in ui-one 
    uiOne.style.background="#ffffffab"; 
    answer.style.background="transparent"; 

    // start the fx     
    fireworks.start(); 

    // Play the audio 
    audio.play(); 
}); 

// -------------------------------------------------------------
noBtn.addEventListener("click", function(){
    errorMsg.style.display="block"; 
}); 

// -------------------------------------------------------------
art.addEventListener("click", function(){ 
    // fireworks change 
    fireworks.pause(); 
    fireworks.clear(); 
    // ui changes 
    uiOne.style.display= "none"; 
    uiTwo.style.display= "block"; 
    // start sketch 
    startSketch(); 
}); 
// -------------------------------------------------------------