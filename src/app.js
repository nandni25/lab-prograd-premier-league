//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;
function createManager(){
  let items=[];
  items.push(managerName);
  items.push(managerAge);
  items.push(currentTeam);
  items.push(trophiesWon);
  console.log(items);

}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

function createFormation(){
const pair={'defender':formation[0],'midfield':formation[1],'forward':formation[2]};
console.log(pair);
}
//write your function here

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year

function filterByDebut(x){
  let obj=players.filter(player=>player.debut===x);
  console.log(obj);
}
//Progression 4 - Filter players that play at the position _______
function filterByPosition(x){
  let obj=players.filter(player=>player.position===x);
  console.log(obj);
}
//Progression 5 - Filter players that have won ______ award
function filterByawardName(x){
  var arr =[];

  for(var i=0;i<players.length;i++){
    for(var j=0;j<players[i].awards.length;j++){
       if(players[i].awards[j].name == x){
       arr.push(players[i]);
    }
  }
 }
 console.log(arr);
}
//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes){
  var arr =[];

  for(var i=0;i<players.length;i++){
    var cnt=0;
    for(var j=0;j<players[i].awards.length;j++){
       if(players[i].awards[j].name == awardName){
       cnt++;
    }
  }
  if(cnt==noOfTimes){
    arr.push(players[i]);
  }
 }
 console.log(arr);
}
//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxTimes(awardName, country){
  var arr =[];

  for(var i=0;i<players.length;i++){
    for(var j=0;j<players[i].awards.length;j++){
       if(players[i].awards[j].name == awardName && players[i].country==country){
       arr.push(players[i]);
    }
  }
 }
 console.log(arr);
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age){
  var arr =[];
  for(var i=0;i<players.length;i++){
       if(players[i].awards.length>=noOfAwards && players[i].team==team && players[i].age<age){
        arr.push(players[i]);
  }
 }
 console.log(arr);
}
//Progression 9 - Sort players in descending order of their age
function SortByAge(){
  players.sort((a,b)=> b.age-a.age);
  console.log(players);
}
//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team){
  var arr =[];
  for(var i=0;i<players.length;i++){
       if( players[i].team==team){
             arr.push(players[i]);
  }
 }
 arr.sort((a,b)=>b.awards.length-a.awards.length);
 console.log(arr);
}
//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function SortByNamexAwardxTimes(awardName, noOfTimes, country){
  var arr =[];

  for(var i=0;i<players.length;i++){
    var cnt=0;
    for(var j=0;j<players[i].awards.length;j++){
       if(players[i].awards[j].name == awardName && players[i].country==country){
       cnt++;
    }
  }
  if(cnt==noOfTimes){
    arr.push(players[i]);
  }
 }
 arr.sort((a,b)=>a.name-b.name);
 console.log(arr);
}
//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function SortByNamexOlderThan(age){
 var arr=[];
 var i;
 for(i=0;i<players.length;i++){
   if(players[i].age>age){
     arr.push(players[i]);
   }
 }
 arr.sort((a,b)=>a.name-b.name);
 arr.sort((a,b)=>b.awards.length-a.awards.length);
 console.log(players);
}
