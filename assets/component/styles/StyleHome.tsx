import { StyleSheet } from "react-native";
import { ratioH, ratioW } from "../utils/RatioScale.tsx";

export const styles = StyleSheet.create({
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
    width: ratioW(24),
    height: ratioH(24),
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
    gap: ratioW(24),

  },
  popularTitle: {
    height: ratioH(31),
    width: ratioW(100),
    marginLeft: ratioW(24),

  },
  popularListCard: {
    flexDirection: 'row',
    height: ratioH(283),
    width:'auto',
    gap: ratioW(16),

  },
  flatListContentContainer:{
  paddingHorizontal:24
  },
  ContainerScrollvertical:{
    flex:1
  },
  Scrollvertical:{
    paddingVertical:ratioH(16)
  },
  cardPoppular: {

    marginRight: ratioW(16),
    height: ratioH(280),
    width: 'auto',
    gap: ratioH(16),
    borderRadius:16,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.18,
    // shadowRadius: 1.00,
    // elevation: 1,
    // opacity: 1

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
  sectionTitle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: ratioH(24),
    color: "#000",
  },
});
