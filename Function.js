function getTotal(maths, science, english) {
    return maths + science + english;
}
function getPercentage(total) {
    return total / 3;
}
function getGrade(percentage) {
    if (percentage >= 90) {
        return "A";
    }
    else if (percentage >= 80) {
        return "B";
    }
    else if (percentage >= 70) {
        return "C";
    }
    else if (percentage >= 40) {
        return "D";
    }
    else {
        return "fail";

    }
}
function showResult(name, maths, science, english) {
    let total = getTotal(maths, science, english);
    let percentage = getPercentage(total);
    let grade = getGrade(percentage);
    console.log("student result");
    console.log("Name: ", name);
    console.log("Total", total);
    console.log("Percentage: " + percentage + "%");
    console.log("Grade: ", grade);
}
showResult("satyam", 85, 78, 92);