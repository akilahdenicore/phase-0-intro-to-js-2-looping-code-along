
//goals: build a for loop
//build a while loop

/*writeCards()
returns an array of thank you messages for each name provided to the function
accepts two arguments: array of string names, and event name
counter starts at 0 and ++ at end of each loop
for loop should stop once it has iteration over length 
instead of logging the messages to the console, you will collect them 
in a new array and return this array at the end of the function. 
 */ 

function writeCards(namesArray, event){
  //declare array 
  let thankCards = [] //new array to be returned
  for (let i = 0; i < namesArray.length; i++){
    thankCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)//using array method and interpolation
  }
  //return new array created within function
  return thankCards
  }

  /*
  countDown() function
  invokes console.log once for each number, counting down from the number provided to zero:
  logs each number when counting down, starting from the number provided:

let countDown = 10;
while (countDown > -1) {
    console.log(countDown--);

  */

    function countDown(number){
     while(number > 0){
       console.log(number);
       number -= 1;
     }
     console.log(number);
    }