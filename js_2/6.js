function isStrongPassword(password) {
    if (password.length >= 8) {
        return true;
    } else {
        return false;
    }
}
const password1 = "1234"; 
const password2 = "visdfunvdf";

console.log(isStrongPassword(password1)); // Output: false
console.log(isStrongPassword(password2)); // Output: true

