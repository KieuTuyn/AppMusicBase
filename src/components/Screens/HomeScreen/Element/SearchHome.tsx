
import {TextInput, View} from "react-native";
import SearchIcon from '../../../../assets/IconSvgs/SearchIcon.svg';
import React from "react";
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from "react-native";
import { ratioH, ratioW } from "../../../../utils/RatioScale.tsx";

const SearchHome=()=>{
    const navigation = useNavigation();
    return(

        <View style={styles.Container}>

            <SearchIcon/>

            <View style={styles.Search}>
                <TextInput
                    style={styles.InputText}
                    placeholder={'Search music '}
                />
            </View>

        </View>

    )
}
export const styles = StyleSheet.create({
    Container:{
        height: ratioH(47),
        flexDirection: 'row',
        marginHorizontal: ratioW(24),
        paddingLeft:16,
        paddingTop:10,
        top: ratioH(48),
        bottom:ratioH(48),
        alignItems: 'center',
        borderRadius: ratioW(10),
        backgroundColor:"#e8eef3",
        marginBottom:48

    },
    Search: {
        flexDirection: 'row',
        height: ratioH(47),
        width:ratioW(240),
        alignItems: "center",
        gap: ratioW(16),

    },
    InputText: {
        fontSize:18,
        fontFamily:"Poppins-Regular",
        color:"#57595b",
        width:ratioW(240),

    },

})
export default SearchHome;
