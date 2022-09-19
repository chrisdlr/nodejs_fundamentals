console.log('Hello world');

let i = 0;

// SetInterval is a function that accept 2 parameters, one of them is a function and the second one is the timeSleep defined in miliseconds.
setInterval(function(){
    console.log(i);
    i ++;

    // Forcing an error.
    // if (i === 5) {
    //     // Since z is not defined, the error will throw when i is equals to 5 and the program will stop by nature.
    //     var a = 3 + z;
    // }
}, 1000);

console.log('Second instruction');
