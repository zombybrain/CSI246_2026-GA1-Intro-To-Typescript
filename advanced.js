"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ==========================================
// Advanced Types Example
// ==========================================
// 1. Enum Example
// Enums create a set of named constants
var CourseStatus;
(function (CourseStatus) {
    CourseStatus["Active"] = "ACTIVE";
    CourseStatus["Completed"] = "COMPLETED";
    CourseStatus["Withdrawn"] = "WITHDRAWN";
})(CourseStatus || (CourseStatus = {}));
// Using the enum
let myStatus = CourseStatus.Active;
console.log(myStatus); // "ACTIVE"
function processGrade(grade) {
    if (typeof grade === "string") {
        // Convert letter grade to number
        switch (grade.toUpperCase()) {
            case "A": return 4.0;
            case "B": return 3.0;
            case "C": return 2.0;
            default: return 0.0;
        }
    }
    return grade;
}
console.log(processGrade("A")); // 4.0
console.log(processGrade(3.5)); // 3.5
const teacher = {
    name: "Mr. Smith",
    subject: "TypeScript",
    id: 123,
    department: "Computer Science"
};
// This will cause an error - uncomment to see:
// const invalidTeacher: TeachingEmployee = {
//     name: "Mr. Jones",
//     subject: "JavaScript"
//     // Error: Missing properties from Employee type
// };
// Try compiling with: tsc advanced.ts
// Then uncomment the error examples to see type checking in action
//# sourceMappingURL=advanced.js.map