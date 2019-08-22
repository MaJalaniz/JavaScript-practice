
//========================================== Objects and Properties Day 1 ==============================================

//This is how to write an Object literal
//let john = {
  //  firstName: 'john',
  //  lastName: 'smith',
  //  birthDate: 1990,
  //  family: ['jane', 'james', 'Jodi', 'jerry'],
  //  job: 'electrician',
  //  isMarried: false
//};
//console.log(john.firstName);

//these properties can be stored in variables like so:

//let x = 'birthDate';
//console.log(john[x]);


//data can be mutated as well:

//john.job = 'Pediatrician';
//john['isMarried'] = true;


// to initialize a new array or object

//let jane = new Object(); // this creates a new empty object

//jane.firstName = 'jane';
//jane.lastName = 'smith';
//jane.birthDate = 1989;

//console.log(jane);

//================================================ Objects and methods =================================================

  // let John = {
     //  firstName: 'john',
     //  lastName: 'smith',
     //  birthDate: 1990,
     //  family: ['jane', 'james', 'jodi', 'jerry'],
     //  job: 'electrician',
     //  isMarried: false,
     //  calcAge: function(){ // functions can also be put into objects
     //      this.age =  2018 - this.birthDate; // 'this' is reference to the John object
     //  }
   //};
   //john.calcAge();
   //console.log(john.calcAge(1990));
 //============================================== CODE CHALLENGE =======================================================
/*
       let mark = {
           firstName: 'mark',
           lastName: 'wahlberg',
           mass: 175,
           height: 72,
           markBMI: function() {
               mark.BMI = (703 * this.mass)/Math.pow(72,2 );
               return this.BMI; //return stops the function and also retains a value.
           }
       };
       //console.log(mark.markBMI());
       console.log(mark.BMI);

       let john = {
           firstName: 'john',
           lastName: 'Sanson',
           mass: 185,
           height: 70 ,
           johnBMI: function() {
                   john.BMI = (703 * this.mass)/((this.height * this.height));
                    return this.BMI;
               }
       };
            //console.log(john.johnBMI());
            console.log(john.BMI);
*/
//=============================================== Loops and Iterations Day 2 ===========================================

/*
       for (let i = 0; i < 11; i++){
           console.log(i);
       }

       let johnny = ['john', 'smith', 1990, 'electrician', false];
       for (let i = 0; i < johnny.length; i++){
           console.log(johnny[i]);
       }

       let i = 0;
       while (i < johnny.length){
           console.log(johnny[i]);
           i++;
       }
*/
        //let johnny = ['john', 'smith', 1990, 'electrician', false];
        //for (let i = 0; i < johnny.length; i++){
        //    if (typeof johnny[i] !== 'string') break; //continue;
        //    console.log(johnny[i]);
        //}

        // counting down from the end of an array
       // let johnny = ['john', 'smith', 1990, 'electrician', false];
        //for (let i = johnny.length; i >= 0 ; i--){
          //  console.log(johnny[i]);
        //}

//==================================================== CODE CHALLENGE ==================================================
        let billVal = {
            bill : [124, 48, 268, 180, 42],
            tipCalc : function() {
                let allTips = [];
                let allAmount = [];

                for (let i = 0; i < billVal.bill.length; i++){
                    console.log(billVal.bill[i]);

                    if (billVal.bill[i] < 50){
                        console.log( 'the bill is $'+ billVal.bill[i] + ', with 20% tip being $' + billVal.bill[i] * .2);
                       //console.log(billVal.bill[i] += (billVal.bill[i] *= .2));
                        allTips.push('$' + billVal.bill[i] * .2);
                        allAmount.push(billVal.bill[i] += (billVal.bill[i] *= .2));
                    }else if (billVal.bill[i] > 50 && billVal.bill[i] < 200){
                        console.log( 'the bill is $'+ billVal.bill[i] + ', with 15% tip being $' + billVal.bill[i] * .15);
                        allTips.push('$' + billVal.bill[i] * .15);
                        allAmount.push(billVal.bill[i] += (billVal.bill[i] *= .15));
                    } else if (billVal.bill[i] > 200){
                        console.log( 'the bill is $'+ billVal.bill[i] + ', with 10% tip being $' + billVal.bill[i] * .1);
                        allTips.push('$' + billVal.bill[i] * .1);
                        allAmount.push(billVal.bill[i] += (billVal.bill[i] *= .1));
                    }
                    //return billVal.bill;
                }
                console.log(allTips);
                console.log(allAmount);
            }
        };
            //billVal.tipCalc();
            console.log(billVal.tipCalc());








//========================================= Switch statements and Ternary operations ===================================

        //writing Ternary operations
/*
        let firstName = 'Mai';
        let age = 16;

        age >= 18 ? console.log(firstName + 'drinks a beer') : console.log(firstName + 'drinks a juice');

        let drink = age >= 18 ? 'beer' : 'juice';
        console.log(drink);


        //Switch statements

        let job = 'teacher';

        switch (job) {
            case 'teacher' :
            case 'instructor' : // instructor is also taken into account during evaluation
                console.log("you are a teacher");
                break; //without a break here, the evaluation continues with no stopping point
            case 'driver' :
                console.log("you drive people around");
                break;
            case 'software developer' :
                console.log("you make sofware for computers");
                break;
            default : // this is the else portion if nothing applies.
                console.log('he does something else for work')
        }
*/
//======================================================================================================================