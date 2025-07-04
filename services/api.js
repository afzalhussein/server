// === /client/src/services/api.js ===
export const fetchOffers = async ( sort ) => {
    const response = await fetch( `/api/offers${ sort ? `?sort=${ sort }` : "" }` );
    return await response.json();
};
  