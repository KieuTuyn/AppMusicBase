
import {FlatList, ScrollView, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { ratioH, ratioW } from "../../../../utils/RatioScale.tsx";
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';


const DiscoverHome = ({ popular,topalbum,favourites})=>{


const navigation = useNavigation();

const renderItem = ({ item }) => (

    <TouchableOpacity
        onPress={() => navigation.navigate(item.screen)}
    >
        <View style={styles.cardDisCover}>
            <View style={styles.cardImage}>
                {item.Background()}
            </View>
            <View style={styles.cardDetail}>
                <Text style={styles.detailText}>{item.detailText}</Text>
                <Text style={styles.cardTitle}>{item.title}</Text>
            </View>
        </View>
    </TouchableOpacity>

);
     return(

         <View style={styles.Container}>

             <ScrollView
                 vertical
                 showsVerticalScrollIndicator={false}
                 style={styles.ContainerScrollvertical}
                 contentContainerStyle={styles.Scrollvertical}
             >

                 <View style={styles.popularContainer }>
                     <View style={styles.popularTitle}>
                         <Text style={styles.sectionTitle}>Popular</Text>
                     </View>
                     <View style={styles.popularListCard}>
                         <FlatList
                             data={popular}
                             renderItem={renderItem}
                             keyExtractor={(item) => item.id}
                             horizontal={true}
                             showsHorizontalScrollIndicator={false}
                             contentContainerStyle={styles.flatListContentContainer}
                         />


                     </View>
                 </View>
                 <View style={styles.topAlbumsContainer}>

                     <View style={styles.AlbumTitle}>
                         <Text style={[styles.sectionTitle,{flex:1}]}>Top Album</Text>
                     </View>

                     <FlatList
                         data={topalbum}
                         renderItem={renderItem}
                         keyExtractor={(item) => item.title}
                         horizontal={true}
                         showsHorizontalScrollIndicator={false}
                         contentContainerStyle={styles.flatListContentContainer} // Add spacing if needed
                     />

                 </View>

                 <View style={styles.favouriteContainer}>

                     <View style={styles.TitleFavorite}>
                         <Text style={[styles.sectionTitle,{flex:1}]}>My Favourite</Text>
                     </View>

                     <FlatList
                         data={favourites}
                         renderItem={renderItem}
                         keyExtractor={(item) => item.title}
                         horizontal={true}
                         showsHorizontalScrollIndicator={false}
                         contentContainerStyle={styles.flatListContentContainer}
                     />

                 </View>

             </ScrollView>

         </View>

     )
 }

const mapStateToProps = (state) => ({
    popular: state.music.popular,
    topalbum: state.music.topalbum,
    favourites: state.music.favourites,
});

export const styles = StyleSheet.create({
    Container:{
        height: ratioH(700),
        flexDirection: 'row',
    },
    Title:{

    },

    popularContainer: {
        height: ratioH(330),
        gap: ratioW(24),

    },
    popularTitle: {
        height: ratioH(31),
        width: ratioW(100),
        marginLeft: ratioW(24),

    },
    popularListCard: {
        flexDirection: 'row',
        height: ratioH(283),
        width:'auto',
        gap: ratioW(16),

    },
    flatListContentContainer:{
        paddingHorizontal:24,

    },
    ContainerScrollvertical:{
        flex:1
    },
    Scrollvertical:{
        paddingVertical:ratioH(16)
    },
    cardDisCover: {

        marginRight: ratioW(16),
        height: ratioH(280),
        width: 'auto',
        gap: ratioH(16),
        // shadowColor: 'white',
        // shadowOffset: {
        //     width: 0,
        //     height: 1,
        // },
        // shadowOpacity: 0.3,
        // shadowRadius: 2.5,
        // elevation: 3,
        borderRadius:16,

    },
    cardImage: {
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,

    },
    cardDetail: {
        paddingLeft: 16,

    },
    detailText: {
        fontFamily: "Poppins-Regular",
        fontSize: 12,
        color: "#000",
    },
    cardTitle: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 24,
        color: "#000",

    },
    topAlbumsContainer: {
        top:ratioH(32),
        height: ratioH(377),
        alignItems: "center",
        gap: 16,
    },
    FavoriteContainer: {
        top:ratioH(32),
        height: ratioH(377),
        alignItems: "center",
        gap: 16,
    },
    AlbumTitle:{
        paddingHorizontal: 24,
        flexDirection: 'row',
        gap: 16,
    },
    TitleFavorite:{
        paddingHorizontal: 24,
        flexDirection: 'row',
        gap: 16,
},
    sectionTitle: {
        fontFamily: "Poppins-SemiBold",
        fontSize: ratioH(24),
        color: "#000",
    },
    favouriteContainer: {
        top:ratioH(24),
        height: ratioH(377),
        alignItems: "center",
        gap: 16,
    },
})
export default connect(mapStateToProps)(DiscoverHome) ;
