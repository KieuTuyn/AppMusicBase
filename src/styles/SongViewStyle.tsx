import { StyleSheet } from "react-native";
import { ratioH, ratioW } from "../utils/RatioScale.tsx";

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: ratioH(36),
    gap: 16,
    backgroundColor: '#a6b9ff'
  },
  TaskBar: {
    flexDirection: 'row',
    paddingHorizontal: ratioW(16),
    height: ratioH(40),
  },
  HeadingButtonBack: {},
  HeadingAction: {
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
    top: 0,
    gap: ratioW(18),
    paddingRight: ratioW(18)
  },
  PlaySongContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    paddingTop: 48,
    gap: 24,
    alignItems: 'center',
    borderTopLeftRadius: ratioW(16),
    borderTopRightRadius: ratioW(16)
  },
  ImageSongPlay: {
    height: ratioH(231),
    width: ratioW(231),
    alignItems: 'center',
    justifyContent: 'center',
  },
  DescribeSongPlay: {
    height: ratioH(79),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  TextSongTitle: {
    fontSize: ratioH(24),
    fontFamily: 'Poppins-SemiBold',
    color: "#191D21"
  },
  TextSongAuthor: {
    fontSize: ratioH(14),
    fontFamily: 'Poppins-Regular'
  },
  PlayStop: {
    height: ratioH(80),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24
  },
  TimeSongPlay: {
    height: ratioH(48),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
  ContainerButtonSongPlay: {
    flex: 1,
    bottom: ratioH(0),
    position: 'absolute',
    height: ratioH(80),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a6b9ff',
    borderTopLeftRadius: ratioW(16),
    borderTopRightRadius: ratioW(16)
  },
  ButtonSongPlay: {
    flexDirection: 'row',
    gap: 16,
    height: ratioH(64),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a6b9ff',

  },
  ButtonAction: {
    height: ratioH(64),
    width: ratioW(99),
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageStyle: {
    height: ratioH(199),
    width: ratioW(199),
    borderRadius: 20,
    objectFit: 'contain'
  },
  ProgressImageStyle: {
    position: 'absolute',
    height: ratioH(231),
    width: ratioW(231),
    objectFit: 'contain'
  },
  SliderImageStyle: {
    position: 'absolute',
    height: ratioH(16),
    width: ratioW(16),
    bottom: 0,
    right: ratioW(140),
    objectFit: 'contain'
  },
  progressBar: {
    width: ratioW(207),
    height: ratioH(6),
  },
  sliderContainer: {
    width: ratioW(207),
    height: ratioH(16),
    borderRadius: 10,
    overflow: 'hidden',
  },
  slider: {
    flex: 1,
  },
});
