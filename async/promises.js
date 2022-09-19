function hello(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function (){
            console.log(`Hello, ${name}`);
            resolve(name);
        }, 1500);
    });
    
}

function bye(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function (){
            console.log(`Bye, ${name}`);
            resolve();
        }, 1000);
    });
    
}

function talk(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Blah blah blah...');
            // Testing reject
            reject("There's an error...");
        }, 1000);
    });

}

// Main process
console.log('Initializing process...');
hello('Kleiver')
    .then(talk)
    .then(talk)
    .then(talk)
    .then(bye)
    .then((name) => {
        console.log('Process end...');
    })
    // Catching the error when reject in any function
    .catch(error => {
        console.error(`Something bad has happened :c \n${error}`);
    })
