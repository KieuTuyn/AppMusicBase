import { StyleSheet } from "react-native";
import { ratioH, ratioW } from "../utils/RatioScale.tsx";

export const styles = StyleSheet.create({
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
    paddingLeft:ratioW(16)

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
  flatListContentContainer:{
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
