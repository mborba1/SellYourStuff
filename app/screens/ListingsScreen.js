import React, {useEffect, useState} from 'react';
import { View , FlatList, StyleSheet } from 'react-native';

import Card from '../components/Card';
import routes from '../navigation/routes';
import colors from '../config/colors';
import listingsApi from '../api/listings'
import Screen from '../components/Screen';

// const listings = [
//     {
//         id: 1,
//         title: 'Yellow chair for sale',
//         price: 100,
//         image: require("../assets/ron-mcclenny-9yI8eQ9mdvY-unsplash.jpg")
//     },
//     {
//         id: 2,
//         title: 'Couch in great conditions',
//         price: 1000,
//         image: require("../assets/paul-weaver-nWidMEQsnAQ-unsplash.jpg")
//     },
//     {
//         id: 3,
//         title: 'Men Leather Jacket',
//         price: 150,
//         image: require("../assets/dami-adebayo-k6aQzmIbR1s-unsplash.jpg")
//     },

// ]

function ListingsScreen({ navigation }) {
    const  [listings, setListings] = useState([]);

    useEffect(() => { 
        loadListings()    
    }, []);

    const loadListings= async () => {
       const response = await listingsApi.getListings();
       setListings(response.data);
    }

    return (
        <View style={styles.screen}>
            <FlatList 
            data={listings}
            keyExtractor={listing => listing.id.toString()}
            renderItem={({item}) => 
               <Card 
               title={item.title}
               subTitle={`$${item.price}`}
               imageURL={item.images[0].url}
               onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            />
            }
           /> 
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light,
    }
})
export default ListingsScreen;