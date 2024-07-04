import { Image, StyleSheet, Text, View, TextInput, ScrollView, Button, TouchableOpacity, FlatList } from "react-native";
import { ratioH, ratioW } from "../utils/RatioScale";
import Back from "../../IconSvgs/Back.svg";
import Heart_Like from "../../IconSvgs/Heart_Like.svg";
import Download from "../../IconSvgs/Download.svg";
import { useNavigation } from '@react-navigation/native';
import * as React from "react";


const PartySong = () => {
    const navigation = useNavigation();

    const renderBackgroundImage = (source, heights, widths, borderTopRadius, borderBottomRadius) => {
      return (
        <Image
          source={source}
          style={{
            height: ratioH(heights),
            width: ratioW(widths),
            borderTopLeftRadius: borderTopRadius,
            borderTopRightRadius: borderTopRadius,
            borderBottomLeftRadius: borderBottomRadius,
            borderBottomRightRadius: borderBottomRadius,

          }}
        />
      );
    };

    const BackgroundHeadingImage = () => {
      return renderBackgroundImage(require("../../images/ImageParty.png"), 261, 375, 0 ,0);
    };
    const ElectricFeelImage = () => {
        return renderBackgroundImage(require("../../images/ElectricFeel.png"), 96, 96, 0, 0);
    };
    const PumPedUpKicksImage = () => {
        return renderBackgroundImage(require("../../images/PumPedUpKicks.png"), 96, 96, 0, 0);
    };
    const SeptemberImage = () => {
        return renderBackgroundImage(require("../../images/September.png"), 96, 96, 0, 0);
    };
    const GetLuckyImage = () => {
        return renderBackgroundImage(require("../../images/GetLucky.png"), 96, 96, 0, 0);
    };

    const dataViewListMusic = [
        {
            title: 'Bohemian Rhapsody',
            author: 'MGMT',
            renderBackground: () => ElectricFeelImage(),
            screen:'SongToSing'
        },
        {
            title: 'Pumped up kicks',
            author: 'Foster the people',
            renderBackground: () => PumPedUpKicksImage(),
            screen:'SongToSing'
        },
        {
            title: 'September',
            author: 'Earth wind & fire',
            renderBackground: () => SeptemberImage(),
            screen:'SongToSing'
        },
        {
            title: 'Get Lucky',
            author: 'Earth wind & fir',
            renderBackground: () => GetLuckyImage(),
            screen:'SongToSing'
        },
        {
            title: 'Music 2',
            author: 'Queen',
            renderBackground: () => GetLuckyImage(),
            screen:'SongToSing'
        },
        {
            title: 'Music 3',
            author: 'Queen',
            renderBackground: () => SeptemberImage(),
            screen:'SongToSing'
        },

    ];
    const renderItem = ({ item }) => (
      <TouchableOpacity
        onPress={() => navigation.navigate(item.screen)} >

          <View style={styles.songItem}>
              {item.renderBackground()}
              <View style={styles.TextSongContainer} >
                  <Text style={styles.songTitle}>{item.title}</Text>
                  <Text style={styles.songTitleDecription}>{item.author}</Text>
              </View>

          </View>

      </TouchableOpacity>
    )
    return (
        <View style={styles.container}>
            <View style={styles.containerHeading}>
                <View style={styles.HeadingTaskBar}>

                <View style={styles.HeadingButtonBack}>
                    <TouchableOpacity style={styles.HeadingButtonBack} onPress={() => navigation.goBack()}>
                        <Back />
                    </TouchableOpacity>
                </View>
                <View style={styles.HeadingAction}>
                    <Heart_Like/>
                    <Download/>
                </View>


                </View>
                <View style={styles.headingImage}>
                    {BackgroundHeadingImage()}
                </View>
                <View style={styles.headingTitle}>
                    <Text
                        style={styles.TextTitle}
                    >Party songs</Text>
                    <Text
                        style={styles.TextTitleDescription}
                    >30 songs to sing in the shower</Text>
                </View>
            </View>

            <View style={styles.ContainerSong}>
                <FlatList
                  data={dataViewListMusic}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.title}
                  vertical={true}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={styles.flatListContentContainer} // Add spacing if needed
                />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        backgroundColor:'#ffffff'

    },
    containerHeading: {
        flexDirection: 'column',
        paddingTop:ratioW(16),
        height: ratioH(398),
        backgroundColor: '#ffc76e',
        borderBottomRightRadius:ratioW(40),
        borderBottomLeftRadius:ratioW(40)

    },
    HeadingTaskBar: {
        flexDirection:'row',
        paddingBottom: ratioW(32),
        height: ratioW(32),

    },
    HeadingButtonBack:{
        paddingLeft:ratioW(18)
    },
    HeadingAction:{
        flexDirection:'row',
        position: 'absolute',
        right: 0,
        top: 0,
        gap:ratioW(18),
        paddingRight:ratioW(18)
    },
    headingImage: {
        height: ratioH(261),
        marginBottom:ratioW(4)
    },
    headingTitle: {
        height: ratioH(52),
        flexDirection:'column',
        paddingHorizontal:ratioW(38),

    },

    TextTitle:{
        height:ratioW(34),
        fontSize:ratioW(24),
        fontFamily:'Poppins-SemiBold',
        color:'#191D21',
    },
    TextSongContainer:{

         paddingBottom:ratioW(12),
    },
    TextTitleDescription:{
        fontSize:ratioW(14),
        fontFamily:'Poppins-Medium',
        color:'#656F77',

    },
    ContainerSong: {
        flex: 1,
        flexDirection: 'column',
        top: ratioW(42),

    },
    flatListContentContainer: {
    paddingBottom : 36
    },
    contentContainerSing:{
         paddingBottom:36,

    },
    songItem: {

        height:ratioH(96),
        flexDirection: 'row',
        paddingHorizontal:ratioW(28),
        alignItems:'center'

    },
    songTitle: {

        fontFamily:'Poppins-SemiBold',
        fontSize:ratioW(16),
        color:'#191D21'

    },
    songTitleDecription:{
        fontFamily:'Poppins-Regular',
        fontSize:ratioW(14),
        color:'#ACB8C2'
    }
});

export default PartySong;
