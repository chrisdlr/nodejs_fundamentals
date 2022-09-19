function hello(name, myCallbackParameter) {
    setTimeout(function (){
        console.log(`Hello, ${name}`);
        myCallbackParameter(name);
    }, 1000);
}

function bye(name, anotherCallback) {
    setTimeout(function (){
        console.log(`Bye, ${name}`);
        anotherCallback();
    }, 1000)
}

function talk(callbackTalk) {
    setTimeout(function() {
        console.log('Blah blah blah...');
        callbackTalk();
    }, 1000)

}

// Making a recursive function is a way to fight against callbackHells
function conversation(name, timesTalk, callback) {
    if (timesTalk > 0) {
        talk(function() {
            conversation(name, --timesTalk, callback);
        });
    } else {
        bye(name, callback);
    }
    
}

// MAIN PROCESS
console.log('Initializing process...');
hello('Kleiver', function(name) {
    conversation(name, 3, function() {
        console.log('End process...')
    });
})

// CallbackHell function example
// hello('Kleiver', function(name) {

//     talk(function() {
//         talk(function() {
//             talk(function() {
//                 bye(name, function() {
//                     console.log('Ending process...');
//                 });
//             });
//         });
//     });
    
// });
