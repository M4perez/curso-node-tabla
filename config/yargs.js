const argv = require('yargs')


    .option('b', {
        alias: 'base',
        type: 'number',
        describe: 'Base de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Listar Tablas'


    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'hasta donde tiene que llegar la tabla'


    })
    .check((argv, option) => {
        if (isNaN(argv.b)) {
            throw 'La base tienen que ser un numero'
        }
        return true;
    })
    .argv;

module.exports = argv;