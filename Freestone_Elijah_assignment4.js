/*
Elijah Freestone
SDI 1209
Project 4
9-16-12
*/

var say = function(message) { console.log(message); }; //Console.log Function

var myLibrary = function() {
    
//Problem 1. Does a string follow a 123-456-7890 pattern like a phone number?
    var checkNumber = function(phoneNum) {
        var numPattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            if (numPattern.test(phoneNum)) {
                var validNumber = phoneNum.replace(numPattern, "($1) $2-$3");
                    say("This is a valid Phone Number. "); //Console Log if a Valid Number
                        return true;
            } else {
                say("Please enter a valid 10 digit Phone Number. ") //Console Log if not a Valid Number
                    return false;
            };
    };
    
//Problem 2. Does a string follow an aaa@bbb.ccc pattern like an email address?    
    var checkEmail = function(email) { 
        var emailPattern = /^[a-zA-Z0-9.-_+]+@[a-zA-Z0-9.-_+]+.[a-zA-Z]{2,4}$/ 
            if (emailPattern.test(email)) {
                say("This is a valid email address. "); //Console Log if a valid email address
                    return true;
            } else {
                say("Please enter a valid email address. "); //Console Log if not a valid email address
                    return false;
            }
    };

//Problem 3. Format a number to use a specific number of decimal places, as for money.
    var moveDecimal = function(money) {
        //money -= 0;
        money = (Math.round(money*100))/100;
            if(isNaN(money)) {
                say("Please enter a number. ");
                    return false;
            } else {
                return (money == Math.floor(money)) ? money + '.00' : ((money*10 == Math.floor(money*10)) ? money + '0' : money);
    };
};


    return { //returns for all functions
        "checkNumber": checkNumber, //Problem 1
        "checkEmail":  checkEmail, //Problem 2
        "moveDecimal": moveDecimal //Problem 3
    };
};

var newLib = new myLibrary(); //Creating new myLibrary to keep original intact when modifying.

say(newLib.checkNumber("(970)988-8190")); //Problem 1 call. Check valid phone number.

say(newLib.checkEmail("e=+fre/^@2@kd/^j=+.com")); //Problem 2 call. Check valid email address. (special character test)

say(newLib.moveDecimal("45.09876")); //Problem 3 call. Format number to use 2 decimals

say(newLib.moveDecimal("bacon")); //problem 3 call. NaN test

