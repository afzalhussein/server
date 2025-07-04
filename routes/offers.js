// === /server/routes/offers.js ===
const express = require( "express" );
const router = express.Router();
const data = require( "../data/c51.json" );

router.get( "/", ( req, res ) => {
    const { sort } = req.query;
    let sortedOffers = [ ...data.offers ];
    if ( sort ) {
        if ( sort === "name" ) {
            sortedOffers.sort( ( a, b ) => a.name.localeCompare( b.name ) );
        } else if ( sort === "cashback" ) {
            sortedOffers.sort( ( a, b ) => b.cash_back - a.cash_back );
        } else {
            return res.status( 400 ).json( { error: "Invalid sort parameter" } );
        }
    }

    res.json( sortedOffers );// Return sorted offers always
} );

module.exports = router;