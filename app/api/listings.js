import client from './client';


const endpoint = '/listings';

const getListings = (a, b, c) => client.get(endpoint);

const addListing = listing => {
    //content-type
}
export default {
    getListings,
}