import { Image, StyleSheet, Text, View, TextInput, ScrollView, Button, TouchableOpacity, FlatList } from "react-native";
import { ratioH, ratioW } from "../utils/RatioScale";
import Back from "../../IconSvgs/Back.svg";
import Heart_Like from "../../IconSvgs/Heart_Like.svg";
import Download from "../../IconSvgs/Download.svg";
import { useNavigation } from '@react-navigation/native';
import * as React from "react";
import {styles} from "../styles/StyleSongtoSing.tsx";
import ScaleTim from "./ScaleTim.tsx";
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

    const dataViewListMusic = [
        {
            title: 'Bohemian Rhapsody',
            author: 'Queen',
            renderBackground: () => BohemianRapsodyImage(),
            screen:'SongViewScreen'
        },
        {
            title: 'I will always love you',
            author: 'Whitney Houston',
            renderBackground: () => IWillAlwaysLoveYouImage(),
            screen:'SongToSing'
        },
        {
            title: 'All Star',
            author: 'Smash Mouth',
            renderBackground: () => AllStarImage(),
            screen:'SongToSing'
        },
        {
            title: 'Dancing Queen',
            author: 'ABBA',
            renderBackground: () => DancingQueenImage(),
            screen:'SongToSing'
        },
        {
            title: 'Music 2',
            author: 'Queen',
            renderBackground: () => DancingQueenImage(),
            screen:'SongToSing'
        },
        {
            title: 'Music 3',
            author: 'Queen',
            renderBackground: () => DancingQueenImage(),
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
                <TouchableOpacity
                  style={styles.HeadingButtonBack}
                  onPress={() => navigation.goBack()}
                  hitSlop={{ top: 6, bottom: 16, left: 16, right: 16 }}>
                <Back />
                </TouchableOpacity>
                </View>
                <View style={styles.HeadingAction}>
                    <ScaleTim />
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
