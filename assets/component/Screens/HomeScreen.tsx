import * as React from "react";
import { Image, StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { ratioH, ratioW } from "../utils/RatioScale";
import MenuSettings from "../../IconSvgs/menu_burger_settings.svg";
import SearchIcon from "../../IconSvgs/SearchIcon.svg";
import { useNavigation } from '@react-navigation/native';

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
    return renderBackgroundImage(require("../../images/ImageTop1.png"), 200, 221, 16);
  };
  const renderBackgroundTop2 = () => {
    return renderBackgroundImage(require("../../images/ImageTop2.png"), 200, 221, 16);
  };


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


          <View style={styles.popularContainer}>
            <View style={styles.popularTitle}>
              <Text style={styles.sectionTitle}>Popular</Text>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.popularList}
              contentContainerStyle={styles.Scrollhorizontal}
            >
              <TouchableOpacity
              onPress={() => navigation.navigate('SongToSing')} >
              <View style={styles.cardPoppular}>

                <View style={styles.cardImage}>
                  {renderBackgroundClassicHit()}
                </View>
                <View style={styles.cardDetail}>
                  <Text style={styles.detailText}>30 songs for an acoustic</Text>
                  <Text style={styles.cardTitle}>Classic Hits</Text>
                </View>

              </View>
              </TouchableOpacity>
              
              <View style={styles.cardPoppular}>
                <View style={styles.cardImage}>
                  {renderBackgroundAcou()}
                </View>
                <View style={styles.cardDetail}>
                  <Text style={styles.detailText}>30 songs for an acoustic</Text>
                  <Text style={styles.cardTitle}>Acoustic Guitar</Text>
                </View>
              </View>
            </ScrollView>
          </View>

        

        <View style={styles.topAlbumsContainer}>
          <View style={styles.AlbumTitle}>
            <Text style={[styles.sectionTitle,{flex:1}]}>Top Album</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.albumList}
            contentContainerStyle={styles.Scrollhorizontal}
          >
            <View style={styles.cardTopAlbums}>
              <View style={styles.cardImage}>
                {renderBackgroundTop1()}
              </View>
              <View style={styles.cardDetail}>
                <Text style={styles.detailText}>30 songs for an acoustic</Text>
                <Text style={styles.cardTitle}>Acoustic Guitar</Text>
              </View>
            </View>

            <View style={styles.cardTopAlbums}>
              <View style={styles.cardImage}>
                {renderBackgroundTop2()}
              </View>
              <View style={styles.cardDetail}>
                <Text style={styles.detailText}>30 songs for an acoustic</Text>
                <Text style={styles.cardTitle}>Acoustic Guitar</Text>
              </View>
            </View>
          </ScrollView>
         
        </View>
        </ScrollView>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerHome: {
    flex:1,
    backgroundColor: '#ffffff',
  },
  home: {
    flex: 1,
    marginTop: ratioH(42),
    
  },
  homeHeading: {
    height: ratioH(41),
    flexDirection: "row",
    gap: ratioW(16),
    marginHorizontal: ratioW(24),
 
   
  },
  headIcon: {
    backgroundColor: "#ffe8ec",
    borderRadius: ratioH(8),
    width: ratioW(32),
    height: ratioH(32),
    alignItems: "center",
    justifyContent: "center",
    
  },
  headButton: {
    width: ratioW(38),
    height: ratioH(32),
    position: 'absolute', 
    top: 0, 
    right: 0,
    
    
  },
  headText: {
    flexDirection: "row",
    height: ratioH(41),
    
  },
  hiText: {
    fontFamily: "Poppins-Regular",
    fontSize: ratioH(32),
    color: "#191D21",
  },
  nameText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: ratioH(32),
    color: "#191D21",
  },
  homeContainerList: {
    marginTop: ratioH(32),
    flex: 1,
    gap: ratioW(20),
    
  },
  searchBar: {
    flexDirection: 'row',
    height: ratioH(47),
    marginHorizontal: ratioW(24),
    borderRadius: ratioW(10),
    alignItems: "center",
    gap: ratioW(8),
    paddingLeft: ratioW(8),
    backgroundColor: '#E8EEF3',
  },
  searchInput:{
    height:24, 
    alignItems: "center",


  },
  InputText: {
   height:24
    
  },

  popularContainer: {
    
    height: ratioH(330),
    gap: ratioH(24),
  },
  popularTitle: {
    height: ratioH(34),
    width: ratioW(100),
    marginLeft: ratioW(24),
  },
  popularList: {
    paddingHorizontal: ratioW(24),
    flexDirection: 'row',
    height: ratioH(280),
    gap: ratioH(16),
  },
  Scrollhorizontal:{
    paddingRight:ratioH(24)
  },

  ContainerScrollvertical:{
    flex:1
  },
  Scrollvertical:{
    paddingVertical:ratioH(16)
  },
  cardPoppular: {
    borderRadius: 16,
    backgroundColor: '#ffffff',
    height: ratioH(280),
    width: ratioW(254),
    gap: ratioH(16),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 1,
    marginRight: ratioW(16),
  },
  cardTopAlbums: {
    borderRadius: 16,
    backgroundColor: '#ffffff',
    height: ratioH(330),
    width: ratioW(211),
    gap: ratioW(16),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 1,
    marginRight: ratioW(24),
  },
  cardImage: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  cardDetail: {
    paddingLeft: 16,
  },
  detailText: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: "#000",
  },
  cardTitle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 24,
    color: "#000",
  },
  topAlbumsContainer: {
    top:ratioH(32),
    height: ratioH(377),
    alignItems: "center",
    gap: 16,
  },
  AlbumTitle:{
    paddingHorizontal: 24,
    flexDirection: 'row',
    gap: 16,
  },
  albumList: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    height: ratioH(280),
    width: 'auto',
    gap: 16,
    
  },
  sectionTitle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: ratioH(24),
    color: "#000",
  },
  
});

export default HomeScreen;
