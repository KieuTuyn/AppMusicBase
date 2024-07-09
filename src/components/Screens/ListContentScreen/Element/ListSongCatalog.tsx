import * as React from "react";
import {Text, View, TextInput, ScrollView, TouchableOpacity, FlatList, StyleSheet, Button} from "react-native";
import {ratioH, ratioW} from "../../../../utils/RatioScale.tsx";
import {useNavigation} from "@react-navigation/native";
import { connect } from 'react-redux';
import { addToFavourites } from '../../../../redux/action.tsx'
import Modal from 'react-native-modal';
import Info from '../../../../assets/IconSvgs/Info.svg'
import {useState} from "react";
// import {DataMusic} from "../../../../data/DataMusic.tsx";
const ListSongCatalog = ({ listMusic ,addToFavourites}) =>{

    const navigation = useNavigation();
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedSong, setSelectedSong] = useState(null);

    const toggleModal = (song) => {
        setSelectedSong(song);
        setModalVisible(!isModalVisible);
        console.log(song)
    };
    const renderItem = ({ item }) => (

        <View style={{flexDirection:'row'}}>
            <View style={{width:ratioW(320)}}>
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
            </View>
            <View style={{
                top:30,
                justifyContent: 'center' ,
                position:'relative',
                borderRadius:20,
                width:ratioW(32),
                height:ratioH(32),

            }}>
                <TouchableOpacity
                    onPress={() => toggleModal(item)}>
                    <Info/>
                </TouchableOpacity>
            </View>
        </View>


    )
    return(
        <View style={styles.Container}>

            <FlatList
                data={listMusic}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                vertical={true}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.flatListContentContainer}

            />
            <Modal isVisible={isModalVisible}
                   animationType="slide"
                   transparent={true}

            >
                <View style={styles.Modal}>
                    <View >
                        <Button
                            title="Add to Favourite"
                            color="black"
                            onPress={() => {
                                addToFavourites(selectedSong);
                                setModalVisible(false);
                            }}
                        />
                    </View>

                    <View>
                        <Button color="black"
                                title="Close" onPress={() => setModalVisible(false)} />
                    </View>

                </View>
            </Modal>


        </View>
    )
}
const mapStateToProps = (state) => ({
    listMusic: state.music.listMusic
});
const mapDispatchToProps = {
    addToFavourites
};
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
    },
    Modal:{
        left:60,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        justifyContent:"center",
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height:120,
        width:250,
        gap:20,

    }

})
export default connect(mapStateToProps,mapDispatchToProps)(ListSongCatalog) ;
