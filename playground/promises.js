const promise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve({
            name: "Me",
            age: 99
        });
    }, 3000)
});

console.log("Before");

promise.then((data) => {
    console.log('1', data.name)
});

console.log("After");
