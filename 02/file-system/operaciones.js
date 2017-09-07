const fs = require('fs');

/**
 * Leer archivo 
 * https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback
 */
fs.readFile('./test.txt', (error, data) => {

    if (error) {
        console.error('No fue posible leer el archivo');
        throw error;
    }

    console.log('Contenido del archivo', data.toString());

    /**
     * Agregar contenido al final del contenido del archivo
     * https://nodejs.org/api/fs.html#fs_fs_appendfile_file_data_options_callback
     */
    fs.appendFile('./test.txt', '\nTraining', (error) => {
        if (error) {
            throw error;
        }

        console.log('"Trainig" agregado correctamente');

        /**
         * Escribir archivo. Si ya existe, será reemplazado
         * https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback
         */
        fs.writeFile('test2.txt', data, (error) => {
            // Bug
            if (error) {
                console.log('No fue posible crear el archivo');
                throw error;
            }
        });
        console.log('Copiado correctamente a test2.txt');
    });
});
