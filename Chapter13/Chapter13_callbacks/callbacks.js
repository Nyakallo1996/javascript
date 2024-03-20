function greet(fullName) {//create a function named greet()
    console.log(`Welcome, ${fullName[0]} ${fullName[1]}`)
}
function processCall(user, callback) {//create second function
    const fullName = user.split(' ');
    callback(fullName);
}

processCall("Nyakallo Mahlakametsa", greet);//callback the function 
