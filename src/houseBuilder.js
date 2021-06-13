/**
Task 1:
4
####
-----------------
6
######
-----------------
0

=================
Task 2:
4
#
#
#
#
-----------------
2
#
#

=================
Task 3:
4
####
####
####
####

-----------------
3
###
###
###

=================
Task 4:
4
#
##
###
####
-----------------
3
#
##
###

*/


// WRITE YOUR CODE INSIDE FUNCTION'S BLOCK
function builder(number) {

    let strr = '';
    for (let i = 0; i < number; i++) {
        strr = strr + '#';
    }
    let result = '';
    for (let i = 0; i < number; i++) {
        result += strr;
        if (i !== number - 1) {
            result += '\n';
        }
    };



    return result; // this variable you should define and store final string in it
}

/**
 
    HOW CHECK:

    in console run command:

    npm run check [your number] [task number]

    For example for running Task 2 with input 4 you should write: npm run check 2 4
 */
















module.exports = {
    builder,
};


