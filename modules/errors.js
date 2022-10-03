function anotherFunction() {
    itBroken();
}

function itBroken() {
    return 3 + z;
}

function asyncItBroken(cb) {
    setTimeout(function() {
        try {
            return 3 + z;
        } catch(err) {
            console.error('Error in asyncItBroken');
            cb(err);
        }
        
    })
}

try {
    // anotherFunction();
    asyncItBroken(function(err) {
        console.error(`An error has occurred in asyncItBroken: ${err}`);
    });
} catch(err) {
    console.error(`There's an error ${err}`);
    console.log('But we catch the error succesfully!');
}

console.log("It's at the end");
