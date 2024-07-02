import { Image, StyleSheet, Text, View, TextInput, ScrollView, Button,TouchableOpacity } from "react-native";
import { ratioH, ratioW } from "../utils/RatioScale";
import Back from "../../IconSvgs/Back.svg";
import Heart_Like from "../../IconSvgs/Heart_Like.svg";
import Download from "../../IconSvgs/Download.svg";


const PartySong = () => {

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

    return (
        <View style={styles.container}>
            <View style={styles.containerHeading}>
                <View style={styles.HeadingTaskBar}>

                <View style={styles.HeadingButtonBack}>
                    <Back/>
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
            <ScrollView
                vertical
                showsVerticalScrollIndicator={false} 
                style={styles.scrollViewContainer} 
                contentContainerStyle={styles.contentContainerSing} 
            >
                <View style={styles.ContainerSong}>
                    
                        <View style={styles.songItem}>

                            {ElectricFeelImage()}

                            <View style={styles.TextSongContainer} >
                            <Text style={styles.songTitle}>Bohemian Rhapssody</Text>
                            <Text style={styles.songTitleDecription}>MGMT</Text>
                            </View>
                           

                        </View>
                        <View style={styles.songItem}>
                            {PumPedUpKicksImage()}
                            <View style={styles.TextSongContainer} >
                            <Text style={styles.songTitle}>Pumped up kicks</Text>
                            <Text style={styles.songTitleDecription}>Foster the people</Text>
                            </View>
                        </View>
                        <View style={styles.songItem}>
                            {SeptemberImage()}
                            <View style={styles.TextSongContainer} >
                            <Text style={styles.songTitle}>September</Text>
                            <Text style={styles.songTitleDecription}>Earth wind & fire</Text>
                            </View>
                        </View>
                        <View style={styles.songItem}>
                            {GetLuckyImage()}
                            <View style={styles.TextSongContainer} >
                            <Text style={styles.songTitle}>Get Lucky</Text>
                            <Text style={styles.songTitleDecription}>Daft Punk</Text>
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

export default PartySong;
