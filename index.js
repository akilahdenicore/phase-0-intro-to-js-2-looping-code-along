const names = ["Cora", "Mom", "Grant"];
 
function writeCards(names) {
   for (let i = 0; i < names.length; i++) {
       console.log(`Thank you ${names[i]}, for the beautiful gift!`);
   }
   return names;
}
writeCards(names);
 

let countDown = 10;
while (countDown > -1) {
    console.log(countDown--);
}