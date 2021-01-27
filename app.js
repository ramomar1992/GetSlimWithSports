var userName = "";
userName = prompt("Please wrtie your user name?");
var confirmation = confirm("are you sure your name is "+ userName);
var ramadanFamily = ["Omar" , "Ahmad" , "Abed Alfattah" , "Ramadan"];
if(confirmation == true){
    var searchResult = ramadanFamily.indexOf(userName);
    console.log(searchResult);
    if ( searchResult != -1){
        alert("You are one of Ramadan family" );
    } else {
        alert ("You are not one of Ramadan family");
    }
} else {
    alert("Please relode the page then type your name again!");
}
document.write('<h2>Your name will be added : <em>'+ userName +'</em></h2>But unfotunately when you relode the page it will be deleted again hahahaha<h2>Have A good day</h2>');