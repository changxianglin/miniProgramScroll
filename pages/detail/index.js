//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    toView: 'a1',
    activeId: 'a1',
    category: [
      { name: '新品', id: 'a1' },
      { name: '众筹', id: 'a2' },
      { name: '小米手机', id: 'a3' },
      { name: 'redmi手机', id: 'a4' },
      { name: '黑鲨游戏', id: 'a5' },
      { name: "手机配件", id: 'a6' },
      { name: '电视', id: 'a7' },
      { name: '电脑', id: 'a8' },
      { name: '众筹', id: 'a9' },
      { name: '小米手机', id: 'a10' },
      { name: 'redmi手机', id: 'a11' },
      { name: '黑鲨游戏', id: 'a12' },
      { name: "手机配件", id: 'a13' },
      { name: '电视', id: 'a14' },
      { name: '电脑', id: 'a15' },
      { name: '众筹', id: 'a16' },
      { name: '小米手机', id: 'a17' },
      { name: 'redmi手机', id: 'a18' },
      { name: '黑鲨游戏', id: 'a19' },
      { name: "手机配件", id: 'a20' },
      { name: '电视', id: 'a21' },
      { name: '电脑', id: 'a22' },
      { name: '小米手机', id: 'a23' },
      { name: 'redmi手机', id: 'a24' },
      { name: '黑鲨游戏', id: 'a25' },
      { name: "手机配件", id: 'a26' },
      { name: '电视', id: 'a27' },
      { name: '电脑', id: 'a28' },
    ],
    content: [
      {
        title: '- 新品 -',
        options: [
          { src: '../../image/redmi.png', id: '001', text: 'redmi8' },
          { src: '../../image/redmi.png', id: '002', text: 'redmi8A' },
          { src: '../../image/redmi.png', id: '003', text: '小米9pro 5G' },
          { src: '../../image/redmi.png', id: '004', text: 'redmi8' },
          { src: '../../image/redmi.png', id: '005', text: 'redmi8' }
        ],
        id: 'a1'
      },
      {
        title: '- 众筹 -',
        options: [
          { src: '../../image/zhongchou.png', id: '006', text: 'redmi8' },
          { src: '../../image/zhongchou.png', id: '007', text: 'redmi8' },
          { src: '../../image/zhongchou.png', id: '008', text: 'redmi8' },
          { src: '../../image/zhongchou.png', id: '009', text: 'redmi8' }
        ],
        id: 'a2'
      },
      {
        title: '- 小米手机 -',
        options: [
          { src: '../../image/xiaomi.png', id: '006', text: 'redmi8' },
          { src: '../../image/xiaomi.png', id: '007', text: 'redmi8' },
          { src: '../../image/xiaomi.png', id: '008', text: 'redmi8' },
          { src: '../../image/xiaomi.png', id: '009', text: 'redmi8' }
        ],
        id: 'a3'
      },
      {
        title: '- redmi手机 -',
        options: [
          { src: '../../image/hongmi.png', id: '006', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '007', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '008', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '009', text: 'redmi8' }
        ],
        id: 'a4'
      },
      {
        title: '- redmi手机 -',
        options: [
          { src: '../../image/hongmi.png', id: '006', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '007', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '008', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '009', text: 'redmi8' }
        ],
        id: 'a5'
      },
      {
        title: '- 1redmi手机 -',
        options: [
          { src: '../../image/hongmi.png', id: '006', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '007', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '008', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '009', text: 'redmi8' }
        ],
        id: 'a6'
      },
      {
        title: '- 2redmi手机 -',
        options: [
          { src: '../../image/hongmi.png', id: '006', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '007', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '008', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '009', text: 'redmi8' }
        ],
        id: 'a7'
      },
      {
        title: '- 3redmi手机 -',
        options: [
          { src: '../../image/hongmi.png', id: '006', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '007', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '008', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '009', text: 'redmi8' }
        ],
        id: 'a8'
      },
      {
        title: '- 4redmi手机 -',
        options: [
          { src: '../../image/hongmi.png', id: '006', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '007', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '008', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '009', text: 'redmi8' }
        ],
        id: 'a9'
      },
      {
        title: '- 5redmi手机 -',
        options: [
          { src: '../../image/hongmi.png', id: '006', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '007', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '008', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '009', text: 'redmi8' }
        ],
        id: 'a4'
      },
      {
        title: '- 6redmi手机 -',
        options: [
          { src: '../../image/hongmi.png', id: '006', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '007', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '008', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '009', text: 'redmi8' }
        ],
        id: 'a10'
      },
      {
        title: '- 7redmi手机 -',
        options: [
          { src: '../../image/hongmi.png', id: '006', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '007', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '008', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '009', text: 'redmi8' }
        ],
        id: 'a11'
      },
      {
        title: '- 8redmi手机 -',
        options: [
          { src: '../../image/hongmi.png', id: '006', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '007', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '008', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '009', text: 'redmi8' }
        ],
        id: 'a12'
      },
      {
        title: '- 9redmi手机 -',
        options: [
          { src: '../../image/hongmi.png', id: '006', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '007', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '008', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '009', text: 'redmi8' }
        ],
        id: 'a13'
      },
      {
        title: '- 10redmi手机 -',
        options: [
          { src: '../../image/hongmi.png', id: '006', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '007', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '008', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '009', text: 'redmi8' }
        ],
        id: 'a14'
      },
      {
        title: '- 11redmi手机 -',
        options: [
          { src: '../../image/hongmi.png', id: '006', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '007', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '008', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '009', text: 'redmi8' }
        ],
        id: 'a15'
      },
      {
        title: '- 12redmi手机 -',
        options: [
          { src: '../../image/hongmi.png', id: '006', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '007', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '008', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '009', text: 'redmi8' }
        ],
        id: 'a16'
      },
      {
        title: '- 13redmi手机 -',
        options: [
          { src: '../../image/hongmi.png', id: '006', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '007', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '008', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '009', text: 'redmi8' }
        ],
        id: 'a17'
      },
      {
        title: '- 14redmi手机 -',
        options: [
          { src: '../../image/hongmi.png', id: '006', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '007', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '008', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '009', text: 'redmi8' }
        ],
        id: 'a18'
      },
      {
        title: '- 15redmi手机 -',
        options: [
          { src: '../../image/hongmi.png', id: '006', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '007', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '008', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '009', text: 'redmi8' }
        ],
        id: 'a19'
      },
      {
        title: '- 16redmi手机 -',
        options: [
          { src: '../../image/hongmi.png', id: '006', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '007', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '008', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '009', text: 'redmi8' }
        ],
        id: 'a20'
      },
      {
        title: '- 17redmi手机 -',
        options: [
          { src: '../../image/hongmi.png', id: '006', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '007', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '008', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '009', text: 'redmi8' }
        ],
        id: 'a21'
      },
      {
        title: '- 18redmi手机 -',
        options: [
          { src: '../../image/hongmi.png', id: '006', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '007', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '008', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '009', text: 'redmi8' }
        ],
        id: 'a22'
      },
      {
        title: '- 19redmi手机 -',
        options: [
          { src: '../../image/hongmi.png', id: '006', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '007', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '008', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '009', text: 'redmi8' }
        ],
        id: 'a23'
      },
      {
        title: '- 20redmi手机 -',
        options: [
          { src: '../../image/hongmi.png', id: '006', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '007', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '008', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '009', text: 'redmi8' }
        ],
        id: 'a24'
      },
      {
        title: '- 21redmi手机 -',
        options: [
          { src: '../../image/hongmi.png', id: '006', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '007', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '008', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '009', text: 'redmi8' }
        ],
        id: 'a25'
      },
      {
        title: '- 22redmi手机 -',
        options: [
          { src: '../../image/hongmi.png', id: '006', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '007', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '008', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '009', text: 'redmi8' }
        ],
        id: 'a26'
      },
      {
        title: '- 23redmi手机 -',
        options: [
          { src: '../../image/hongmi.png', id: '006', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '007', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '008', text: 'redmi8' },
          { src: '../../image/hongmi.png', id: '009', text: 'redmi8' }
        ],
        id: 'a27'
      }


    ],
  },
  //事件处理函数
  onLoad: function () {
    this.setData({
      toView: 'a1',
      heightArr: []
    })
    let query = wx.createSelectorQuery();
    query.selectAll('.catefory-main').boundingClientRect((rect) => {
      rect.forEach(ele => {
        this.calculateHeight(ele.height);
      })
    }).exec();
  },
  clickItem(e) {
    console.log('点击获得参数', e.currentTarget.dataset.id)
    this.setData({
      activeId: e.currentTarget.dataset.id,
      toView: e.currentTarget.dataset.id
    })
  },
  scroll(e) {
    let scrollHeight = e.detail.scrollTop;
    let index = this.calculateIndex(this.data.heightArr, scrollHeight);
    console.log(index, '设置哪一个')
    this.setData({
      activeId: 'a' + index
    })

  },
  // 计算滚动的区间
  calculateHeight(height) {
    if (!this.data.heightArr.length) {
      this.data.heightArr.push(height)
    } else {
      this.data.heightArr.forEach(ele => {
        height += ele
      })
      this.data.heightArr.push(height);
    }
  },
  // 计算左边选中的下标
  calculateIndex(arr, scrollHeight) {
    console.log('左边下标', arr, scrollHeight)
    let index = '';
    for (let i = 0; i < arr.length; i++) {
      if (scrollHeight >= 0 && scrollHeight < arr[0]) {
        index = 0;
      } else if (scrollHeight >= arr[i - 1] && scrollHeight < arr[i]) {
        index = i;
      }
    }
    return index + 1;
  }
})