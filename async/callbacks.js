function hello(name, myCallbackParameter) {
    setTimeout(function (){
        console.log(`Hello, ${name}`);
        myCallbackParameter(name);
    }, 1500);
}

function bye(name, anotherCallback) {
    setTimeout(function (){
        console.log(`Bye, ${name}`);
        anotherCallback();
    }, 1000)
}

console.log('Initializing process...');
hello('Kleiver', function(name) {
    bye(name, function() {
        console.log('Ending process...');
    })
});

// hello('Kleiver', function() {});
// bye('Kleiver', function() {});