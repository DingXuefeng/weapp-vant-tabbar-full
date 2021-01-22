// components/custom-tab-bar/index.js

Component({
  data: {
    active: 0,
    list: [  {
      url: "/pages/test1/test1",
      icon: "notes-o",
      text: "寄养"
    },
    {
      url: "/pages/test2/test2",
      icon: "home-o",
      text: "代养"
    },
    {
      url: "/pages/test3/test3",
      icon: "add-o",
      text: "发布"
    },
  ]
  },
  methods: {
    onChange(e) {
      console.log('跳转',this.properties.list[e.detail].url)
      this.setData({
        active: e.detail
      });
      wx.switchTab({
        url: this.properties.list[e.detail].url
      });
    },
    init() {
      const page = getCurrentPages().pop();
      this.setData({
        active: this.data.list.findIndex(item => item.url === `/${page.route}`)
      });
    }
  }
});