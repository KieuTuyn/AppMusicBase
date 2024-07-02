
import * as React from 'react';
import { View, Text, StyleSheet,Image, TouchableOpacity} from 'react-native';
import ButtonArrow from '../../IconSvgs/ButtonArrow.svg';
import { ratioW, ratioH } from '../utils/RatioScale';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {
    const navigation = useNavigation();

    const renderBackgroundImage = () => {
        return (
            <Image
                source={require('../../images/background.png')}
                style={{
                    position: 'absolute',
                    top: ratioW(62),
                    right:ratioH(-210),
                    height: ratioH(941),
                    width: ratioW(986),
                }}
            />
        )
    }
    const renderTheBandImage = () => {
        return (
            <Image
                source={require('../../images/Illustrution.png')}
                style={{
                    position: 'absolute',
                    left: 0,
                    height: ratioH(342),
                    width: ratioW(314),
                    gap:ratioW(8)

                }}
            />
        )
    }
    const TheBandBeamNotesImage = () => {
        return (
            <Image
                source={require('../../images/TheBandBeamNotes.png')}
                style={{
                    position: 'absolute',
                    height: ratioH(24),
                    width: ratioW(24),  

                }}
            />
        )
    }

    return (

        <View style={styles.Container}>
        {renderBackgroundImage()}
            <View style={styles.OnboardingScreen} >
                <View style={styles.Content} >
                    <View style={styles.HeadingContent} >


                        <View style={styles.TheBandBeamNote}>
                

                        {TheBandBeamNotesImage()}

                        </View>

                        <Text style={{
                            fontFamily: 'Poppins-Medium',
                            fontSize: ratioW(20),
                            marginLeft:ratioW(8),
                            color: '#B9C8FF'
                        }}>Musical</Text>
                    </View>
                    <View style={styles.TitleContent} >

                        <Text style={{
                            fontFamily: 'Poppins-Bold',
                            fontSize: ratioW(32),
                            color:'#191D21'

                        }}>Let the music take you away...  </Text>
                    </View>

                </View>

                <View style={styles.Illustrution}>

                {renderTheBandImage()}

                </View>

                <View style={styles.ButtonArrow}>
                    
                    <TouchableOpacity
                        onPress={() => navigation.navigate('HomeScreen')} >

                <View style={styles.Arrow}>

                    <View style={{
                        height:ratioH(64),
                        width:ratioW(64),
                        alignItems:'center', 
                        justifyContent:'center'
                    }}>
                    <ButtonArrow/>

                    </View>
                </View>
                    </TouchableOpacity>

                </View>
            </View>

        </View>


    );
};

const styles = StyleSheet.create({

    Container: {
        width: '100%',
        height: '100%',

    },
    OnboardingScreen: {
        flex: 1,
        top: ratioH(60),
        marginHorizontal: ratioW(20),
        paddingTop: ratioH(8),
        paddingBottom: ratioH(8),
        paddingLeft: ratioW(8),
        paddingRight: ratioW(8),
        marginLeft: ratioW(16),
        marginRight: ratioW(16)

    },
    Content: {
        marginLeft: ratioW(8),
        marginRight: ratioW(8),
        marginTop: ratioH(8),
        height: ratioH(154),
        gap:8,

    },
    HeadingContent: {
        flexDirection: 'row',
        marginLeft: ratioW(8),
        
    },
    TheBandBeamNote:{
        height: ratioH(32),
        width: ratioW(32),
        backgroundColor:'#BBA5FF',
        borderRadius:8,
        alignItems:'center', 
        justifyContent:'center'
    
    },
    TitleContent:{

        marginLeft: ratioW(8),
    },
    Illustrution:{

        marginLeft: ratioW(16),
        marginRight: ratioW(16),
        marginTop: ratioH(32),
        height: ratioH(438),
        width: ratioW(304),
        gap:ratioW(8),
        

    },
    ButtonArrow:{
        marginLeft: ratioW(16),
        marginRight: ratioW(16),

    },
    Arrow:{
        alignItems:'center',
        justifyContent:'center',
        height:ratioH(80),
    }

})
export default OnboardingScreen;
