function calculateCGPA() {
    const gradeMap = {
        'S': 10,
        'A': 9,
        'B': 8,
        'C': 7,
        'D': 6,
        'E': 5
    };

    const gradesInput = document.getElementById('grades').value;
    const gradesArray = gradesInput.split(',').map(grade => grade.trim().toUpperCase());

    let totalPoints = 0;
    let validGradesCount = 0;

    gradesArray.forEach(grade => {
        if (gradeMap[grade] !== undefined) {
            totalPoints += gradeMap[grade];
            validGradesCount++;
        }
    });

    if (validGradesCount > 0) {
        const cgpa = totalPoints / validGradesCount;
        document.getElementById('result').innerText = `Your CGPA is ${cgpa.toFixed(2)}`;
    } else {
        document.getElementById('result').innerText = 'Please enter valid grades.';
    }
}
