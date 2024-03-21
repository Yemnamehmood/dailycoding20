//Day 20
//task 1 (Average score calculator)
//This program calculates the average score of all scores given.
function averageScore(...scores:number[]): number {
    let total= scores.reduce((sum,score)=> sum + score,0); //adding all the scores together and divide by the no of scores
    return total/scores.length;
}
 //example: finding the average of four scores
 console.log(averageScore(67,70,80,90,100)); //Shows the average score 
 //We are adding up all the scores, then divide by how many there are.


 //Task 2 (Add a specail number creating custom adders)
 //this program makes a function that adds a specific number

 function makeAdder(valueToAdd: number): (arg:number) => number {
    return function (x: number): number {
        return x + valueToAdd;

    }

 };


 let addseven = makeAdder(7); 
 console.log(addseven(10)); //we made a function (magic box) that adds 7 to any number and we will get answer 17

 //Task 3 (Self running user profile)

 let userprofile = {
    name: "Yemna",
    age: 22,
    getprofile: function() {
        return `Name:${this.name}, Age: ${this.age}`;
    }
 };
 console.log(userprofile.getprofile());

 //Asking the profile to tell us about the user
  //We made a self set up profile that can talk about the user.