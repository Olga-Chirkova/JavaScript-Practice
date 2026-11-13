/*
Objective:
Write a function to process data structures (objects and arrays)
using nested loops and basic mathematical operations.

Data Structure:
Create an object called students, where:
- Each key is a student's name (string).
- Each value is an array of grades (numbers).

Function: printStudentAverages(students)

The function should:
1. Accept an object containing students and their grades.
2. Iterate through all students in the object.
3. Calculate the arithmetic mean of each student's grades.
4. Print the student's name and average grade to the console
   in the following format:
   Name: Average grade = X.

Testing:
Call the function with a test object containing at least
3–4 students and verify the calculation results in the console.
*/


const students = {
    Alex: [3, 5, 2, 4, 4, 4, 2],
    Bob: [3, 5, 5, 5, 4, 5, 4],
    Jon: [3, 3, 2, 5, 3, 2, 4],
    Ann: [5, 4, 5, 4, 3, 3, 3]
};

function printStudentAverages(students) {

    // Check that students is a valid object
    if (students === null || typeof students !== "object" || Array.isArray(students)) {
        console.error("Invalid input: students must be an object");
        return;
    }

    const studentEntries = Object.entries(students);

    // Validate all students' grades before calculations
    for (const [stud_name, grades] of studentEntries) {

        if (!Array.isArray(grades) || grades.length === 0) {
            console.error(`Invalid input: grades for ${stud_name} must be a non-empty array`);
            return;
        }

        for (const mark of grades) {
            if (!Number.isFinite(mark)) {
                console.error(`Invalid input: all grades for ${stud_name} must be finite numbers`);
                return;
            }
        }
    }

    // Calculate and print average grades
    for (const [stud_name, grades] of studentEntries) {
        let sum = 0;
        let i = grades.length;

        for (const mark of grades) {
            sum += mark;
        }

        let avrg = (sum / i).toFixed();
        console.log(`Student ${stud_name}: Average grade = ${avrg}`);
    }
}

printStudentAverages(students);

// Additional test cases
printStudentAverages(null);
printStudentAverages("hello");
printStudentAverages([]);
printStudentAverages({ Alex: [] });
printStudentAverages({ Alex: "hello" });
printStudentAverages({ Alex: [3, 5, "hello"] });
printStudentAverages({ Alex: [3, 5, NaN] });
printStudentAverages({ Alex: [3, 5, Infinity] });
