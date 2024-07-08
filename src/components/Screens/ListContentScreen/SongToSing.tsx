import { Text, View, TextInput, ScrollView, TouchableOpacity, FlatList } from "react-native";
import Back from "../../../assets/IconSvgs/Back.svg"
import Heart_Like from '../../../assets/IconSvgs/Heart_Like.svg';
import Download from "../../../assets/IconSvgs/Download.svg";
import { useNavigation } from '@react-navigation/native';
import * as React from "react";
import {styles} from "../../../styles/SongtoSingStyle.tsx";
import ScaleTim from "../../../constants/Animation/ScaleTim.tsx";
import {dataViewListHeading, dataViewListMusic} from "../../../data/DataListContents.tsx";
const SongToSing = () => {
    const navigation = useNavigation();



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


export default SongToSing;
