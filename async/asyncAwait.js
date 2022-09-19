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
            resolve();
        }, 1000);
    });

}

async function main(name) {
    await hello(name);
    await talk();
    await talk();
    await talk();
    await bye(name);
    console.log('...Process end');
}

console.log('Starting process...');
main('Kleiver');
console.log('This will be the second instruction to execute');