$("button").click(function(){
    var randomNumber = Math.floor((Math.random()*2) +1);
    setTimeout(function() { 
        $("img").attr("src", "coin"+ randomNumber +".png")
    }, 1000);
    //If player 1 wins

  buttonAnimation();
  makeSound();
  imageRotation();

  if (randomNumber === 1) {
    setTimeout(function() {
        $("h1").after("<h2>🚩 It's a tail!</h2>");
    }, 1000);
    $('h2').remove();
  }
  else{
    setTimeout(function() {
        $("h1").after("<h2>It's a head! 🚩</h2>");
    }, 1000);
    $('h2').remove(); 
  }
});

// $(document).keydown(function(event) {
//     var randomNumber = Math.floor((Math.random()*2) +1);
//     $("img").attr("src", "coin"+ randomNumber +".png")
//     //If player 1 wins

//     makeSound(event.spacebar);
//     buttonAnimation(event.spacebar);
//     imageRotation(event.spacebar);

//   if (randomNumber === 1) {
//     setTimeout(function() {
//         $("h1").after("<h2>🚩 It's a tail!</h2>");
//     }, 1000);
//     $('h2').remove();
//   }
//   else{
//     setTimeout(function() {
//         $("h1").after("<h2>It's a head! 🚩</h2>");
//     }, 1000);
//     $('h2').remove(); 
//   }
// });

function buttonAnimation() {
    var activeButton = document.querySelector(".toss");
    activeButton.classList.add("pressed",);
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}

function makeSound() {
    var coinFlip = new Audio("coin-flip.mp3");
       coinFlip.play();
}
 
function imageRotation() {
    var activeImage = document.querySelector(".img");
    activeImage.classList.add("rotating");
    setTimeout(function() {
    activeImage.classList.remove("rotating");
    }, 1000);
}