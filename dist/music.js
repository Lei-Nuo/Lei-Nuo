const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "一直很安静",
        artist: '阿桑',
        url: 'https://sharefs.yun.kugou.com/202007101621/5074989913f0b585e9d3bebdec4d8372/G200/M04/0A/0D/qJQEAF5xVWaAVulBAD1HQBZkNcw546.mp3',
        cover: 'https://p3fx.kgimg.com/stdmusic/20171016/20171016101203221753.jpg',  
      }
    ]
});
