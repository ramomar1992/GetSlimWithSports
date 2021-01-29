var userInput = prompt("We are gonna play a game.\nYou have to guess a number between (1) and (100), and if you have a number as mine i will get you in, otherwise you have to try again . . . ");
var gameGuesses = [16,22,43,65,91,87,3,74,38];
console.log(gameGuesses);
console.log("user guess: " + userInput);
console.log("the cheack is : " + gameGuesses.indexOf(userInput));
while (gameGuesses.indexOf(Number(userInput) ) == -1 ) {
    console.log("user guess: " + userInput);
    console.log("the check is : " + gameGuesses.indexOf(userInput));
    userInput = prompt("You did not get it right, haha. Enter a number between 1 - 100. You can try again now . . .");
}
alert("Now you got it right. Lets move on , haha!")
var userName = "";
userName = prompt("Please wrtie your user name?");
var confirmation = confirm("are you sure your name is "+ userName);
var ramadanFamily = ["omar","Omar" , "Ahmad" , "Abed Alfattah" , "Ramadan"];
if(confirmation == true){
    var searchResult = ramadanFamily.indexOf(userName);
    console.log(searchResult);
    if ( searchResult != -1){
        alert("You are one of Ramadan family, Now look at the bottom of the page !!" );
    } else {
        alert ("You are not one of Ramadan family, Now look at the bottom of the page !!");
    }
} else {
    
    alert("Please relode the page then type your name again!");
}
document.write('<h2>Your name will be added : <em>'+ userName +'</em></h2>But unfotunately' +
 'when you relode the page it will be deleted again hahahaha<h2>Have A good day</h2>');
 var timesNum = prompt("I am going to print an image for you as many times as you like\nEnter how many times"
  + "you want me to print it: ");
  for(var i = 0 ; i < timesNum; i++){
      document.write('<img src = "we love sport.jpg" >');
  }
window.scrollTo(0,document.body.scrollHeight);

