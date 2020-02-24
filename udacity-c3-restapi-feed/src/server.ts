const express = require('express');
import { sequelize } from './sequelize';

import { IndexRouter } from './controllers/v0/index.router';

const bodyParser = require ('body-parser');
import { config } from './config/config';
import { V0MODELS } from './controllers/v0/model.index';

const c = config.dev;

(async () => {
  await sequelize.addModels(V0MODELS);
  await sequelize.sync();

  const app = express();
  const port = process.env.PORT || 8080; // default port to listen
  
  app.use(bodyParser.json());

  //CORS Should be restricted
  app.use(function(_req: any, res: { header: (arg0: string, arg1: string) => void; }, next: () => void) {
    res.header("Access-Control-Allow-Origin", c.url);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  })
  ;

  app.use('/api/v0/', IndexRouter)

  // Root URI call
  app.get( "/", async ( _req: any, res: { send: (arg0: string) => void; } ) => {
    res.send( "/api/v0/" );
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running ` + c.url );
      console.log( `press CTRL+C to stop server` );
  } );
})();