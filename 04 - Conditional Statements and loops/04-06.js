/*
Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade. 
Student Name 	Marks
David 	80
Vinoth 	77
Divya 	88
Ishitha 	95
Thomas 	68

The grades are computed as follows :
Range 	Grade
<60 	F
<70 	D
<80 	C
<90 	B
<100 	A 
*/

"use strict";
(function () {
    function grade() {
        var avgGrade = (80 + 77 + 88 + 95 + 68) / 5;
        var mark = "";
        if (avgGrade < 60) {
            mark = "F";
        } else if (avgGrade < 70) {
            mark = "D";
        } else if (avgGrade < 80) {
            mark = "C";
        } else if (avgGrade < 90) {
            mark = "B";
        } else {
            mark = "A";
        }
        console.log(mark);
    }
    return grade;
})()();