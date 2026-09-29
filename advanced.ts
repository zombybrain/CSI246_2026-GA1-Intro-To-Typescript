// ==========================================
// Advanced Types Example
// ==========================================
// 1. Enum Example
// Enums create a set of named constants
enum CourseStatus {
    Active = "ACTIVE",
    Completed = "COMPLETED",
    Withdrawn = "WITHDRAWN"
}
// Using the enum
let myStatus: CourseStatus = CourseStatus.Active;
console.log(myStatus);  // "ACTIVE"
// This will cause an error - uncomment to see:
// myStatus = "ACTIVE";  // Error: Type '"ACTIVE"' is not assignable to type 'CourseStatus'
// 2. Type Aliases and Union Types
// Creating a custom type that can be reused
type GradeInput = number | string;
function processGrade(grade: GradeInput): number {
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
console.log(processGrade("A"));    // 4.0
console.log(processGrade(3.5));    // 3.5
// This will cause an error - uncomment to see:
// console.log(processGrade(true));  // Error: Argument of type 'boolean' not assignable
// 3. Intersection Types
// Combining multiple types into one
type Teacher = {
    name: string;
    subject: string;
};
type Employee = {
    id: number;
    department: string;
};
// Combining both types
type TeachingEmployee = Teacher & Employee;
const teacher: TeachingEmployee = {
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