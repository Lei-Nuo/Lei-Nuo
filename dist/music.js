const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "一直很安静",
        artist: '阿桑',
        url: 'https://leinuo-blog.oss-cn-beijing.aliyuncs.com/music/%E9%98%BF%E6%A1%91%20-%20%E4%B8%80%E7%9B%B4%E5%BE%88%E5%AE%89%E9%9D%99.mp3',	      
        cover: 'https://img3.kuwo.cn/star/albumcover/300/23/2/1468329387.jpg',
      },{
	name: "六月的雨",
        artist: '胡歌',
        url: 'https://leinuo-blog.oss-cn-beijing.aliyuncs.com/music/%E8%83%A1%E6%AD%8C%20-%20%E5%85%AD%E6%9C%88%E7%9A%84%E9%9B%A8.mp3',
        cover: 'https://img1.kuwo.cn/star/albumcover/300/39/1/2128987494.jpg',
      },{
	name: "杀破狼",
        artist: 'JS',
        url: 'https://leinuo-blog.oss-cn-beijing.aliyuncs.com/music/JS%20-%20%E6%9D%80%E7%A0%B4%E7%8B%BC.mp3',
        cover: 'https://img1.kuwo.cn/star/albumcover/300/39/1/2128987494.jpg',
      },{
	name: "莫失莫忘",
        artist: '麦振鸿',
        url: 'https://leinuo-blog.oss-cn-beijing.aliyuncs.com/music/%E9%BA%A6%E6%8C%AF%E9%B8%BF%20-%20%E8%8E%AB%E5%A4%B1%E8%8E%AB%E5%BF%98%20%28%E5%A5%B3%E5%A3%B0%EF%BC%9A%E9%A3%8E%E9%93%83%29.mp3',
        cover: 'https://img1.kuwo.cn/star/albumcover/300/39/1/2128987494.jpg',
      }
    ]
});
