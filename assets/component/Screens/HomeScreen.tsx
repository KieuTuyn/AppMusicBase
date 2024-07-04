import * as React from "react";
import { Image, Pressable, Text, View, TextInput, ScrollView, TouchableOpacity, FlatList } from "react-native";
import { ratioH, ratioW } from "../utils/RatioScale";
import MenuSettings from "../../IconSvgs/menu_burger_settings.svg";
import SearchIcon from "../../IconSvgs/SearchIcon.svg";
import { useNavigation } from '@react-navigation/native';
import {styles} from "../styles/StyleHome.tsx";
const HomeScreen = () => {
  const navigation = useNavigation();

  const renderBackgroundImage = (source, height, width, borderRadius) => {
    return (
      <Image
        source={source}
        style={{
          height: ratioH(height),
          width: ratioW(width),
          borderTopLeftRadius: borderRadius,
          borderTopRightRadius: borderRadius,
        }}
      />
    );
  };


  const renderBackgroundIconMic = () => {
    return renderBackgroundImage(require("../../images/Microphone.png"), 24, 24, 0);
  };

  const renderBackgroundClassicHit = () => {
    return renderBackgroundImage(require("../../images/Imageclasshit.png"), 200, 254, 16);
  };

  const renderBackgroundAcou = () => {
    return renderBackgroundImage(require("../../images/ImageAu.png"), 200, 254, 16);
  };
  const renderBackgroundTop1 = () => {
    return renderBackgroundImage(require("../../images/ImageTop1.png"), 200, 203, 16);
  };
  const renderBackgroundTop2 = () => {
    return renderBackgroundImage(require("../../images/ImageTop2.png"), 200, 203, 16);
  };
  const renderBackgroundMusicTop10=()=>{
    return renderBackgroundImage(require("../../images/MusicTop10.png"), 200, 254, 16);

  }
  const renderBackgroundMusicTop=()=>{
    return renderBackgroundImage(require("../../images/MusicTop10.png"), 200, 203, 16);

  }

  const dataViewPopular = [

    {
      title: 'Song to sing out loud',
      detailText: '30 songs for an acoustic',
      renderBackground: () => renderBackgroundClassicHit(),
      screen:'SongToSing',

    },
    {
      title: 'Party song',
      detailText: '30 songs for an acoustic',
      renderBackground: () => renderBackgroundAcou(),
      screen:'PartySong',

    },
    {
      title: 'Chill hits',
      detailText: '10 songs for an top',
      renderBackground: () => renderBackgroundMusicTop10(),
      screen:'ChillHits',

    },
  ]
  const dataViewTopAlbum = [

    {
      title: 'Acoustic Guitar 1',
      detailText: '30 songs for an acoustic',
      renderBackground: () => renderBackgroundTop1(),
      screen:'SongToSing',

    },
    {
      title: 'Acoustic Guitar 2',
      detailText: '30 songs for an acoustic',
      renderBackground: () => renderBackgroundTop2(),
      screen:'SongToSing',

    },
    {
      title: 'Acoustic Guitar 3',
      detailText: '10 songs for an top',
      renderBackground: () => renderBackgroundMusicTop(),
      screen:'SongToSing',

    },
  ]

  const renderItem = ({ item }) => (

      <TouchableOpacity
        onPress={() => navigation.navigate(item.screen)}
      >
        <View style={styles.cardPoppular}>
          <View style={styles.cardImage}>
            {item.renderBackground()}
          </View>
          <View style={styles.cardDetail}>
            <Text style={styles.detailText}>{item.detailText}</Text>
            <Text style={styles.cardTitle}>{item.title}</Text>
          </View>
        </View>
      </TouchableOpacity>

  );

  return (
    <View style={styles.containerHome}>
      <View style={styles.home}>
        <View style={styles.homeHeading}>
          <View style={styles.headIcon}>
            {renderBackgroundIconMic()}
          </View>
          <View style={styles.headText}>
            <Text style={styles.hiText}>Hi,</Text>
            <Text style={styles.nameText}>Martha</Text>
          </View>
          <View style={styles.headButton}>
            <MenuSettings />
          </View>
        </View>

        <View style={styles.homeContainerList}>
          <View style={styles.searchBar}>
            <SearchIcon />

            <View style={styles.searchInput}>
            <TextInput
              style={styles.InputText}
              placeholder='Search music'
            />
            </View>

          </View>

          <ScrollView
            vertical
            showsVerticalScrollIndicator={false} // Tắt thanh cuộn dọc
            style={styles.ContainerScrollvertical} // Style cho ScrollView
            contentContainerStyle={styles.Scrollvertical} // Style cho nội dung bên trong ScrollView
           >
            <View style={styles.popularContainer }>
              <View style={styles.popularTitle}>
                <Text style={styles.sectionTitle}>Popular</Text>
              </View>
                <View style={styles.popularListCard}>
                  <FlatList
                    data={dataViewPopular}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.title}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.flatListContentContainer}
                  />


               </View>
            </View>
              <View style={styles.topAlbumsContainer}>

               <View style={styles.AlbumTitle}>
                  <Text style={[styles.sectionTitle,{flex:1}]}>Top Album</Text>
               </View>

                <FlatList
                  data={dataViewTopAlbum}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.title}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.flatListContentContainer} // Add spacing if needed
                />

            </View>
          </ScrollView>

      </View>
      </View>
    </View>

  );
};

export default HomeScreen;
