function checkAge(age) {
    try {
        if (typeof age !== "number") {
            throw new Error("Age must be a number");
        }
        if (age < 0) {
            throw new Error("age cannot be negative");
        }
        if (age < 18) {
            throw new Error("you are underage");
        } console.log("Access granted");
    } catch (error) {
        console.log("Checking finished");
    }
}
checkAge(20);
checkAge(15);
checkAge(-5);
checkAge("18");