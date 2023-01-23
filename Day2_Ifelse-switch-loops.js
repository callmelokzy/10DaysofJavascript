// Day 2: Conditional Statements: If-Else

/* Task: Complete the getGrade(score) function in the editor. It has one parameter: an integer,score , denoting the number of points Julia earned on an exam. It must return the letter corresponding to her grades according to the following rules: */
// Solution:

function getGrade(score) {
    let grade;
    
    if (score <=5){
        grade = 'F';
    }
    else if ( score <=10){ 
        grade ='E';
    }
    else if (score <=15){
        grade = 'D';
    }
    else if (score<=20){
        grade = 'C';
    }
    else if (score<=25){
        grade = 'B';
    }
    else {
        
        grade = 'A';
    }        
    return grade;
}

// sample input
console.log(getGrade(6));
console.log('---------------------------------------------------------------------------\n');



// Day 2: Conditional Statements: Switch

/* Task: Complete the getLetter(s) function in the editor. It has one parameter: a string,S , consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria: */
// solution

function getLetter(s) {
    let letter;
    
    switch(true){
        case 'aeiou'.includes(s[0]):
            letter = "A"
            break;
        case 'bcdfg'.includes(s[0]):
            letter = "B"
            break;
        case 'hjklm'.includes(s[0]):
            letter = "C"
            break;
        case 'npqrstvwxyz'.includes(s[0]):
            letter = "D"
            break;
    }

    return letter
}

// sample input
console.log(getLetter('adfgt'));
console.log('---------------------------------------------------------------------------\n');



// Day 2: Loops

/* Task: First, print each vowel in s on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in s.
Second, print each consonant (i.e., non-vowel) in s on a new line in the same order as it appeared in s.*/
// solution

function vowelsAndConsonants(s) {

    let vowels = "aeiou";

    for (let i=0; i<s.length ; i++) {
        if (vowels.includes(s[i])){
            console.log(s[i]);
        }
    }

    for (let j=0 ; j<s.length ; j++) {
        if (!vowels.includes(s[j])) {
            console.log(s[j]);
            }
    }

}

// sample input
vowelsAndConsonants('javascriptloops');
console.log('---------------------------------------------------------------------------');
