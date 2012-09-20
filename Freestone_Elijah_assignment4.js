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
    
//Problem 3. Is the string a URL? (Does it start with http: or https:?)
        var checkUrl = function(testUrl) {
        var urlPattern = /^(http[s]?:)/;
            if(urlPattern.test(testUrl)) {
                say("This is a valid URL. ");
                    return true;
            } else {
                say("This is not a URL. ")
                    return false;
            }
    };
    
//Problem 4. Find the total value of just the numbers in an array, even if some of the items are not numbers.
    var addNumbers = function(array) {
        var sum = 0;
            for (var i=0; i<array.length; i++) {
                if (!isNaN(parseInt(array[i]))) { sum += array[i]; }
                }   return sum;
    };

//Problem 5. Given a string version of a number such as "42", return the value as an actual Number, such as 42.     
    var convertString = function(string) {
        var myNumber = string - 0;
            return myNumber
    };

//Problem 6. Format a number to use a specific number of decimal places, as for money.
    var moveDecimal = function(money) {
        money = (Math.round(money*100))/100;
            if(isNaN(money)) {
                say("Please enter a number. "); //Console Log if Not a Number
                    return false;
            } else {
                return (money == Math.floor(money)) ? money + '.00' : ((money*10 == Math.floor(money*10)) ? money + '0' : money);
    };
};

    return { //returns for all functions
        "checkNumber":   checkNumber,   //Problem 1
        "checkEmail":    checkEmail,    //Problem 2
        "checkUrl":      checkUrl,      //Problem 3
        "addNumbers":    addNumbers,    //Problem 4
        "convertString": convertString, //Problem 5
        "moveDecimal":   moveDecimal    //Problem 6
    };
};

var newLib = new myLibrary(); //Creating new myLibrary to keep original intact when modifying.

say(newLib.checkNumber("(970)988-8190")); //Problem 1 call. Check valid phone number.

say(newLib.checkEmail("e=+fre/^@2@kd/^j=+.com")); //Problem 2 call. Check valid email address. (special character test)

say(newLib.checkUrl("https://www.spam.com")) //Problem 3 call. Check valid URL

say(newLib.addNumbers([3, "spam", 17, "eggs"])); //Problem 4 call. Add just the numbers

say(newLib.convertString("42")); //Problem 5. Convert string number to actual number

say(newLib.moveDecimal("45.09876")); //Problem 6 call. Format number to use 2 decimals

say(newLib.moveDecimal("bacon")); //Problem 6 call. NaN test