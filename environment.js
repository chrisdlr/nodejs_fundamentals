let userName = process.env.NAME || 'Sin nombre';
let webSite = process.env.WEBSITE || 'No tengo web';

console.log(`Hola ${userName}`);
console.log(`Mi web es ${webSite}`);

// Nodemon: Works in a dev environment. PM2: Better for a production environment - it's defined as process manager daemon
console.log('Testing script with nodemon');