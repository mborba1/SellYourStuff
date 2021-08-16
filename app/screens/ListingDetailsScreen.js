import React from 'react';
import { View, Image, StyleSheet} from 'react-native';
import ListItem from '../components/ListItem';

import AppText from '../components/AppText';
import colors from '../config/colors';
function ListingDetailsScreen({ route }) {
    const listing = route.params;
    return (
       <View>
           <Image style={styles.image} source={listing.image} />
           <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{listing.title}</AppText>
            <AppText style={styles.price}>{listing.price}</AppText>
            <View style={styles.userContainer}>
                <ListItem 
                    image={{uri:'https://randomuser.me/api/portraits/women/85.jpg'}}
                    title="Lisa Marie"
                    subTitle="3 Listings"
                />
            </View>   
           </View>
       </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300
    },
    detailsContainer: {
        padding: 20,
    },
    price:{
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
    },
    userContainer: {
        marginVertical: 40,
    }
})
export default ListingDetailsScreen;