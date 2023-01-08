
// Cargando librerías
const readline = require("readline");
const anuncios = require("./config/anuncios.json")

// Cargando modules
const Anuncio = require("./models/Anuncio");

async function main() {
    // Solicitar confirmación para eliminar todo el contenido de la base de datos
    const confirmed = await askConfirmRemoval("Are you sure you want to delete all content from the database? [n] ('yes' to confirm)")
    if (!confirmed) {
        process.exit();
    }

    // Conexión a la base de datos
    const connection = require("./lib/connectMongoose");

    // Inicializar los anuncios
    await initAnuncios();

    // Desconectarse de la base de datos
    connection.close();
}

main().catch(err => console.log("There was an error", err));


async function initAnuncios(){
    const result = await Anuncio.deleteMany();
    console.log(`${result.deletedCount} anuncios removed`);

    const inserted = await Anuncio.insertMany(anuncios);
    console.log(`${inserted.length} new anuncios created.`);
}

function askConfirmRemoval(text){
    return new Promise((resolve) => {
        const interface = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        interface.question(text, answer => {  
            interface.close();
            if(answer.toLowerCase() === "yes") {
                resolve(true);
                return;
            }
            resolve(false);
        });
    });
}