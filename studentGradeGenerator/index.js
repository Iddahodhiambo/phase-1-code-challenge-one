function gradeStudent(marks) {
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
        let grade = gradeStudent(score);
        return grade;

    }else{
        return "you entered wrong marks";
    }
}