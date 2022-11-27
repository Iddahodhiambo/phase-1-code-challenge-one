function gradeStudent(marks) {
    //function to calculate grades of the students based on their marks
    if(marks >= 80) {
        return "A";
    }else if(marks >= 60 &&  marks <= 79) {
        return "B";
    }else if(marks >= 50 && marks <= 59) {
        return "C";

    }else if(marks >= 40 && marks <= 49) {
        return "D";
    }
    else{
        return "E";
        


    }
}


function iInvokeGradesStudents(score) {
    if(score >= 0 && score <= 100) {
        let grade = gradeStudent(score);//assigning grade to gradeStudents function
        console.log(grade)

    }else{
        console.log("you entered wrong marks")
    }
}
iInvokeGradesStudents(90) //invoking students grades by running 90,the return was "A"