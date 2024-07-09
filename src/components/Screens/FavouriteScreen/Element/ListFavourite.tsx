import * as React from "react";
import {Text, View, TouchableOpacity, FlatList, StyleSheet} from "react-native";
import {ratioH, ratioW} from "../../../../utils/RatioScale.tsx";
import {useNavigation} from "@react-navigation/native";
import { connect } from 'react-redux';
const ListFavourite = ({listFavourites}) =>{

    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)} >

            <View style={styles.songItem}>
                {item.Background()}
                <View style={styles.SongContainer} >
                    <Text style={styles.songTitle}>{item.title}</Text>
                    <Text style={styles.songTextTitle}>{item.author}</Text>
                </View>

            </View>

        </TouchableOpacity>
    )
    return(
        <View style={styles.Container}>

            <FlatList
                data={listFavourites}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                vertical={true}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.flatListContentContainer}
            />

        </View>
    )
}
const mapStateToProps = (state) => ({
    listFavourites: state.music.listFavourites
});
const styles = StyleSheet.create({
    Container: {
        flexDirection: 'column',
        flex:1,
        width: '100%',

    },
    flatListContentContainer:{
        marginVertical: 24,
        paddingBottom:24

    },
    songItem: {

        height:ratioH(96),
        flexDirection: 'row',
        paddingHorizontal:ratioW(28),
        alignItems:'center'

    },
    SongContainer:{

        paddingBottom:ratioW(12),
    },
    songTitle: {

        fontFamily:'Poppins-SemiBold',
        fontSize:ratioW(16),
        color:'#191D21'

    },
    songTextTitle:{
        fontFamily:'Poppins-Regular',
        fontSize:ratioW(14),
        color:'#ACB8C2'
    }

})
export default connect(mapStateToProps) (ListFavourite);
