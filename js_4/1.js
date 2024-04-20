function filterUsersOver18(users) {
    return users.filter(user => user.age > 18);
}

// Example usage:
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 20 },
    { name: "David", age: 16 }
];

 console.log(filterUsersOver18(users)); 
