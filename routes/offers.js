// === /server/routes/offers.js ===
const express = require( "express" );
const router = express.Router();
const data = require( "../data/c51.json" );
console.log( "Offers loaded:", data.offers.length );
router.get( "/", ( req, res ) => {
    const { sort } = req.query;
    let sortedOffers = data.offers;

    if ( sort === "name" ) {
        sortedOffers.sort( ( a, b ) => a.name.localeCompare( b.name ) );
    } else if ( sort === "cashback" ) {
        sortedOffers.sort( ( a, b ) => b.cash_back - a.cash_back );
    }

    res.json( sortedOffers );
} );

module.exports = router;