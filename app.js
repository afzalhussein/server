// === /server/app.js ===
require('dotenv').config();
const express = require( "express" );
const cors = require( "cors" );
const offersRoute = require( "./routes/offers" );

const app = express();

app.use( cors() );
app.use( express.json() );

app.use( "/api/offers", offersRoute );

const PORT = process.env.PORT || 3000;
app.listen( PORT, () => console.log( `Server running on port ${ PORT }` ) );

