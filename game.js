let btn1 = document.querySelector("#btn1");
btn1.onclick = () =>{

const max = prompt("Enter the max number :");
const random = Math.floor(Math.random() * max) + 1;
let guess = prompt("Guess the number between 1 to you entered number");

while(true){
    if(guess == "quit"){
        console.log("You Quit")
        break;
    }
    else if(guess == random){
        console.log("congrats!!, you enter write no =", random);
        break;
    }
    else if(guess < random){
        guess = prompt("You enter Small no, please enter Big number:")
    }
    else{
        guess = prompt("You enter Big no, please enter Small number:")
    }
}

}