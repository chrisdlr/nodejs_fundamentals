let i = 0;
let interval = setInterval(function() {
    console.log('Hello from setInterval');
    if (i === 3) {
        // stops a setInterval function
        clearInterval(interval);
    }
    i++;
}, 1000);

// Very similiar structure as setInterval with the difference that setImmediate uses time = 0.
setImmediate(function() {
    console.log('Hello from setImmediate');
});

console.log(__dirname);
console.log(__filename);

global.myVar = 'Perry';
console.log(myVar);
