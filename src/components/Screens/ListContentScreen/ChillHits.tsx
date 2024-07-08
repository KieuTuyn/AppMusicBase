import { Image, StyleSheet, Text, View, TextInput, ScrollView, Button,TouchableOpacity } from "react-native";
import { ratioH, ratioW } from "../../../utils/RatioScale.tsx";
import Back from "../../../assets/IconSvgs/Back.svg";
import Heart_Like from "../../../assets/IconSvgs/Heart_Like.svg";
import Download from "../../../assets/IconSvgs/Download.svg";
import { useNavigation } from '@react-navigation/native';


const ChillHits = () => {
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
      return renderBackgroundImage(require("../../../assets/images/ImageHitTitle.png"), 261, 375, 0 ,0);
    };
    const WillowImage = () => {
        return renderBackgroundImage(require("../../../assets/images/Willow.png"), 96, 96, 0, 0);
    };
    const IDonCareImage = () => {
        return renderBackgroundImage(require("../../../assets/images/IDonCare.png"), 96, 96, 0, 0);
    };
    const PutYouRecordsOnImage = () => {
        return renderBackgroundImage(require("../../../assets/images/PutYouRecordsOn.png"), 96, 96, 0, 0);
    };
    const GLoveLikeThatImage = () => {
        return renderBackgroundImage(require("../../../assets/images/LoveLikeThat.png"), 96, 96, 0, 0);
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerHeading}>
                <View style={styles.HeadingTaskBar}>

                    <TouchableOpacity style={styles.HeadingButtonBack} onPress={() => navigation.goBack()}>
                        <Back />
                    </TouchableOpacity>
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
                    >Chill Hits</Text>
                    <Text
                        style={styles.TextTitleDescription}
                    >30 songs to sing in the shower</Text>
                </View>
            </View>
            <ScrollView
                vertical
                showsVerticalScrollIndicator={false}
                style={styles.scrollViewContainer}
                contentContainerStyle={styles.contentContainerSing}
            >
                <View style={styles.ContainerSong}>

                        <View style={styles.songItem}>

                            {WillowImage()}

                            <View style={styles.TextSongContainer} >
                            <Text style={styles.songTitle}>Willow</Text>
                            <Text style={styles.songTitleDecription}>Taylor Swift</Text>
                            </View>


                        </View>
                        <View style={styles.songItem}>
                            {IDonCareImage()}
                            <View style={styles.TextSongContainer} >
                            <Text style={styles.songTitle}>I don’t care (Acoustic)</Text>
                            <Text style={styles.songTitleDecription}>Ed Sheeran</Text>
                            </View>
                        </View>
                        <View style={styles.songItem}>
                            {PutYouRecordsOnImage()}
                            <View style={styles.TextSongContainer} >
                            <Text style={styles.songTitle}>Put Your Records On</Text>
                            <Text style={styles.songTitleDecription}>Ritt Momney</Text>
                            </View>
                        </View>
                        <View style={styles.songItem}>
                            {GLoveLikeThatImage()}
                            <View style={styles.TextSongContainer} >
                            <Text style={styles.songTitle}>Love  Like That</Text>
                            <Text style={styles.songTitleDecription}>Lauv</Text>
                            </View>
                        </View>

                </View>
            </ScrollView>
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
        backgroundColor: '#bba5ff',
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
    scrollViewContainer: {
        flex:1

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

export default ChillHits;
