
const ViewPoppuler = ()=>{
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
  const renderBackgroundMusicTop10=()=>{
    return renderBackgroundImage(require("../../images/MusicTop10.png"), 200, 255, 16);

  }


  const dataViewPopular = [

    {
      title: 'Classic Hits',
      detailText: '30 songs for an acoustic',
      renderBackground: () => renderBackgroundClassicHit(),
      screen:'SongToSing'
    },
    {
      title: 'Acoustic Guitar',
      detailText: '30 songs for an acoustic',
      renderBackground: () => renderBackgroundAcou(),
      screen:'SongToSing'
    },
    {
      title: 'Music Top 10',
      detailText: '10 songs for an top',
      renderBackground: () => renderBackgroundMusicTop10(),
      screen:'SongToSing'
    },
  ]
}
