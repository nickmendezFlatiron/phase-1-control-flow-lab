function scuberGreetingForFeet(number){
  // Write your code here!
  let answer;
  if (number <= 250){
    answer = 'This one is on me!';
  } else if (number > 2000 & number < 2500) {
      answer = 'I will gladly take your thirty bucks.';
      }
     else if (number > 2500) {
      answer = 'No can do.';
      }
return answer;
}

function ternaryCheckCity(city){
  // Write your code here!
 return city === 'NYC' ? "Ok, sounds good." : 'No go.'
}

function switchOnCharmFromTip(answer){
  // Write your code here!
  let greeting;
  switch(answer) {
    case 'generous':
      greeting = 'Thank you so much.';
      break;
    case 'not as generous':
      greeting = "Thank you." ;
      break;
    default :
      greeting = 'Bye.' ;
  }
  return greeting;
}
