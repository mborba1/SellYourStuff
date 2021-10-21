import React, {useEffect, useState} from 'react';
import { View , FlatList, StyleSheet } from 'react-native';

import Card from '../components/Card';
import routes from '../navigation/routes';
import colors from '../config/colors';
import listingsApi from '../api/listings'
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import Button from '../components/AppButton';
import ActivityIndicator from '../components/ActivityIndicator';


function ListingsScreen({ navigation }) {
    const  [listings, setListings] = useState([]);
    const  [error, setError] = useState(false);
    const  [loading, setLoading] = useState(false);

    useEffect(() => { 
        loadListings()    
    }, []);

    const loadListings= async () => {
       setLoading(true);
       const response = await listingsApi.getListings();
       setLoading(false);

       if(!response.ok) return setError(true);
       
       setError(false);
       setListings(response.data);
    }

    return (
        <Screen style={styles.screen}>
            {error && <> 
              <AppText>There was a problem retrieving the listings</AppText>
              <Button title='Retry' onPress={loadListings} />
            </>}
            <ActivityIndicator visible={loading} />
            <FlatList 
            data={listings}
            keyExtractor={listing => listing.id.toString()}
            renderItem={({item}) => (
               <Card 
               title={item.title}
               subTitle={`$${item.price}`}
               imageURL={item.images[0].url}
               onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            />
            )}
           /> 
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light,
    }
})
export default ListingsScreen;