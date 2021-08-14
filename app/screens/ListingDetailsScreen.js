import React from 'react';
import { View, Image, StyleSheet} from 'react-native';
import ListItem from '../components/ListItem';

import AppText from '../components/AppText';
import colors from '../config/colors';
function ListingDetailsScreen(props) {
    return (
       <View>
           <Image style={styles.image} source={require('../assets/ron-mcclenny-9yI8eQ9mdvY-unsplash.jpg')} />
           <View style={styles.detailsContainer}>
            <AppText style={styles.title}>Yellow chair for sale</AppText>
            <AppText style={styles.price}>$100</AppText>
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