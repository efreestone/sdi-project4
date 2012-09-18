/*
Elijah Freestone
SDI 1209
Project 4
9-16-12
*/

var say = function(message) { console.log(message); }; //Console.log Function

var myLibrary = function() {
    
    var checkNumber = function(phoneNum) { //Problem 1. Check valid phone number string
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
    
    var checkEmail = function(email) { //Problem 2. Check valid email address string
        var emailPattern = /^[a-zA-Z0-9.-_+]+@[a-zA-Z0-9.-_+]+.[a-zA-Z]{2,4}$/ //`~!@#$%^&*()={[}]|\:;"'<,>.?\/\
            if (emailPattern.test(email)) {
                say("This is a valid email address. "); //Console Log if a valid email address
                    return true;
            } else {
                say("Please enter a valid email address. "); //Console Log if not a valid email address
                    return false;
            }
    };
    
    return { //returns for all functions
        "checkNumber": checkNumber, //Problem 1
        "checkEmail":  checkEmail //Problem 2
    };
};

var newLib = new myLibrary(); //Creating new myLibrary to keep original intact when modifying.

say(newLib.checkNumber("(970)988-8190")); //Problem 1 call. Check valid phone number.

say(newLib.checkEmail("e=+fre/^@2@kdj=+.com")); //Problem 2 call. Check valid email address.