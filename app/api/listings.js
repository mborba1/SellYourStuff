import client from './client';

const endpoint = '/listings'
const getListings = () => client.get(endpoint)


export default {
    getListings,
}

const data = new FormData();
data.append('images', {
    name: 'unique name',
    type: 'image/jpeg',
    uri: 'uri of the image on the device'
});