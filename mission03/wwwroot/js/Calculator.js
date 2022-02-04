$('#button').click(function () {
    var fFinalGrade;
    var sLetterGrade;

    //Calculate final percentage based on course weights
    fFinalGrade = $('#Assignments').val() * 0.55 +
        $('#GroupProjects').val() * 0.05 +
        $('#Quizzes').val() * 0.1 +
        $('#Exams').val() * 0.2 +
        $('#INTEX').val() * 0.1;

    //Calculate final letter grade
    if (fFinalGrade >= 94) {
        sLetterGrade = 'A'
    } else if (fFinalGrade >= 90) {
        sLetterGrade = 'A-'
    } else if (fFinalGrade >= 87) {
        sLetterGrade = 'B+'
    } else if (fFinalGrade >= 84) {
        sLetterGrade = 'B'
    } else if (fFinalGrade >= 80) {
        sLetterGrade = 'B-'
    } else if (fFinalGrade >= 77) {
        sLetterGrade = 'C+'
    } else if (fFinalGrade >= 74) {
        sLetterGrade = 'C'
    } else if (fFinalGrade >= 70) {
        sLetterGrade = 'C-'
    } else if (fFinalGrade >= 67) {
        sLetterGrade = 'D+'
    } else if (fFinalGrade >= 64) {
        sLetterGrade = 'D'
    } else if (fFinalGrade >= 60) {
        sLetterGrade = 'D-'
    } else {
        sLetterGrade = 'E'
    }

    //Output grade
    alert('Your grade for IS 413 is ' + fFinalGrade.toFixed(2) + '% (' + sLetterGrade + ')');
})