// program to check leap year
function leapYearCalculator(year) {
   
    if ((year % 4 == 0) && ( year % 100 !=0) || (0 == year % 400)) {
        console.log(year + 'is a leap year');
    } else {
        console.log(year + 'is not a leap year');
    }
}

// take input from user
const year = prompt('Enter a year:');

checkLeapYear(year);