/*
Elijah Freestone
SDI 1209
Project 4
9-16-12
*/

var say = function(message) { console.log(message); }; //Console.log Function

var myLibrary = function() {
    
    var checkNumber = function(phoneNum) { //Problem 1. Check valid phone number string
        var testNum = phoneNum;
        var pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            if (pattern.test(testNum)) {
                var validNumber = testNum.replace(pattern, "($1) $2-$3");
                    say("This is a valid Phone Number. "); //Console Log if a Valid Number
                        return true;
            } else {
                say("Please enter a valid 10 digit Phone Number. ") //Console Log if not a Valid Number
                    return false;
            };
    };
    
    return { //returns for all functions
        "checkNumber": checkNumber
    };
};

var newLib = new myLibrary();

say(newLib.checkNumber("(970)988-8190")); //Problem 1. Check valid phone number call