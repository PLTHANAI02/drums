//Finding the length of the charcters using DOM
let countt = document.querySelectorAll(".drum").length;

//clickiing with mouse  Function
for (let i = 0; i < countt; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    //alert("i am getting fucking clicked :)");
    let word = document.querySelectorAll(".drum")[i].innerHTML;
    Sound(word);
    buttonAnimation(word);
  });
}

//Main function
function Sound(word) {
  switch (word) {
    case "w":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      document.querySelectorAll(".drum")[i].style.color = "white";
      // console.log(document.querySelectorAll(".drum")[i].setAttribute("color","white"))
      break;
    case "a":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      document.querySelectorAll(".drum")[i].style.color = "white";
      break;
    case "s":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      document.querySelectorAll(".drum")[i].style.color = "white";
      break;
    case "d":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      document.querySelectorAll(".drum")[i].style.color = "white";
      break;
    case "j":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      document.querySelectorAll(".drum")[i].style.color = "white";
      break;
    case "k":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      document.querySelectorAll(".drum")[i].style.color = "white";
      break;
    case "l":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      document.querySelectorAll(".drum")[i].style.color = "white";
      break;
    default:
      console.log("This is Thanai");
  }
}

//keyBpard Event Listener
document.addEventListener("keypress", function (event) {
  Sound(event.key);
  buttonAnimation(event.key)
});

//ButtonAnimation
function buttonAnimation(currentKey){
    
    var activeKey = document.querySelector("." + currentKey);
    
    activeKey.classList.add("pressed");

    setTimeout(function(){
        activeKey.classList.remove("pressed")
    },100);

    
    
}
