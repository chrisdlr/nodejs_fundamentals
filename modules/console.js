console.log('Something...');
console.error('Testing error...');
console.warn('Warning in console');

var table = [
    {
        a: 1,
        b: 'Z'
    },
    {
        a: 2,
        b: 'Another word'
    }
]

console.table(table);

console.group('Init Conversation')
console.log('Hello');
console.group('Content Blah')
console.log('BlahBlahBlah');
console.log('BlahBlahBlah');
console.log('BlahBlahBlah');
console.groupEnd('Content Blah')
console.log('Bye');
console.groupEnd('End Conversation')

console.log('Another thing from another function');


console.count('Times');
console.count('Times');
console.count('Times');
console.countReset('Times');
console.count('Times');