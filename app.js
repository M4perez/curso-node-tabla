const argv = require('./config/yargs')
const { crearArchivo } = require('./helpers/multiplicar')


console.clear();
console.log(argv);



// const [, , arg3 = 'base = 5'] = process.argv;
// const [, base = 5] = arg3.split('=');

// const base = 5;



crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch(err => err);
