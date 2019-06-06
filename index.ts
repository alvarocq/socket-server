import Server from './classes/server';
// Server no va entre {} porque en el archivo server.ts es un export default
import { SERVER_PORT } from './global/environment';
import { router } from './routes/router';
// Router si va entre {} porque en el archivo router.ts es un export sin default

//BodyParser nos permite transformar los argumentos recibidos en post, a un formato json.
import bodyParser from 'body-parser';

import cors from 'cors';


const server = new Server();

//bodyParser
server.app.use (bodyParser.urlencoded({ extended: true }) );
server.app.use (bodyParser.json());

// CORS
server.app.use (cors({origin: true, credentials: true}) );

//Añadimos el router
server.app.use('/', router);

server.start( () =>{
    console.log(`Servidor corriendo en el puerto ${SERVER_PORT}`);
});
