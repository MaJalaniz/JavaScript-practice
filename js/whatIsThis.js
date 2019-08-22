

//---------------------------------------What is "this"----------------------------------------

calculateAge(2019);

function calculateAge(year){
    console.log(2019 - year);
}


let jon = {
    name : 'jon',
    birthYear : 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2019 - this.birthYear);
        /*
                function innerFunction(){
                    console.log(this);
                }
                innerFunction();
            }
        */
       // this.object only becomes something once called
    }
};

jon.calculateAge();

let mike = {
  name : "mike",
  birthYear : 1980
};

mike.calculateAge = jon.calculateAge;

mike.calculateAge();