import { Image, StyleSheet, Text, View, TextInput, ScrollView, Button,TouchableOpacity } from "react-native";
import { ratioH, ratioW } from "../utils/RatioScale";
import Back from "../../IconSvgs/Back.svg";
import Heart_Like from "../../IconSvgs/Heart_Like.svg";
import Download from "../../IconSvgs/Download.svg";
import { useNavigation } from '@react-navigation/native';


const SongToSing = () => {
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
      return renderBackgroundImage(require("../../images/ImageSongTitle.png"), 261, 375, 0 ,0);
    };
    const BohemianRapsodyImage = () => {
        return renderBackgroundImage(require("../../images/BohemianRapsody.png"), 96, 96, 0, 0);
    };
    const IWillAlwaysLoveYouImage = () => {
        return renderBackgroundImage(require("../../images/IWillAlwaysLoveYou.png"), 96, 96, 0, 0);
    };
    const AllStarImage = () => {
        return renderBackgroundImage(require("../../images/AllStar.png"), 96, 96, 0, 0);
    };
    const DancingQueenImage = () => {
        return renderBackgroundImage(require("../../images/DancingQueen.png"), 96, 96, 0, 0);
    };

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
                    >Songs to sing out loud</Text>
                    <Text 
                        style={styles.TextTitleDescription}
                    >30 songs to sing in the shower</Text>
                </View>
            </View>
            <ScrollView
                vertical
                showsVerticalScrollIndicator={false} // Tắt thanh cuộn dọc
                style={styles.scrollViewContainer} // Style cho ScrollView
                contentContainerStyle={styles.contentContainerSing} // Style cho nội dung bên trong ScrollView
            >
                <View style={styles.ContainerSong}>
                        <TouchableOpacity
                             onPress={() => navigation.navigate('SongViewScreen')} >
                
                            
                        <View style={styles.songItem}>
                        {BohemianRapsodyImage()}
                            <View style={styles.TextSongContainer} >
                            <Text style={styles.songTitle}>Bohemian Rhapsody</Text>
                            <Text style={styles.songTitleDecription}>Queen</Text>
                            </View>
                           
                        </View>

                        </TouchableOpacity>

                        <View style={styles.songItem}>
                            {IWillAlwaysLoveYouImage()}
                            <View style={styles.TextSongContainer} >
                            <Text style={styles.songTitle}>I Will Always Love You</Text>
                            <Text style={styles.songTitleDecription}>Whitney Houston</Text>
                            </View>
                        </View>
                        <View style={styles.songItem}>
                            {AllStarImage()}
                            <View style={styles.TextSongContainer} >
                            <Text style={styles.songTitle}>All Star</Text>
                            <Text style={styles.songTitleDecription}>Smash Mouth</Text>
                            </View>
                        </View>
                        <View style={styles.songItem}>
                            {DancingQueenImage()}
                            <View style={styles.TextSongContainer} >
                            <Text style={styles.songTitle}>Dancing Queen</Text>
                            <Text style={styles.songTitleDecription}>ABBA</Text>
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
        
    },
    containerHeading: {
        flexDirection: 'column',
        paddingTop:ratioW(16),
        height: ratioH(398),
        backgroundColor: '#a6b9ff',
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

export default SongToSing;
