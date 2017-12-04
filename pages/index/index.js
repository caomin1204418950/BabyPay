//index.js
//获取应用实例


Page({
  data: {
  activeIndex:0,
  routers:[
    
      { 
          id:"0",
        name: '转账',  
        url: '',  
        icon: '../../images/转账.png'  
      },  
      { 
          id: "1",          
        name: '信用卡还款',  
        url: '',  
        icon: '../../images/信用卡还款.png'  
      },  
      {  
          id: "2",
          
        name: '充值中心',  
        url: '',  
        icon: '../../images/充值中心.png'  
      },  
       {  
           id: "3",
        name: '余额宝',  
        url:'',  
        icon:'../../images/余额宝.png'   
      },  
       {  
           id: "4",
        name: '淘票票',  
        url:'',  
        icon:'../../images/淘票票.png'   
      },  
       {  
           id: "5",
        name: '滴滴出行',  
        url:'',  
        icon:'../../images/滴滴出行.png'   
      },  
       {  
           id: "6",
        name: '校园工作',  
        url:'',  
        icon:'../../images/校园工作.png'   
      },  
       {  
           id: "7",
        name: '芝麻信用',  
        url:'',  
        icon:'../../images/芝麻信用.png'   
      },  
      {  
          id: "8",
        name: '火车票机票',  
        url:'',  
        icon:'../../images/火车票.png'   
      }, 
      {  
          id: "9",
        name: '记账本',  
        url:'',  
        icon:'../../images/记账本.png'   
      }, 
      {  
          id: "10",
        name: '饿了么',  
        url:'',  
        icon:'../../images/饿了么.png'   
      }, 
       {  
           id: "11",
        name: '更多',  
        url:'',  
        icon:'../../images/more.png'   
      }  
  
],
tips:[ 
    {
        url:'https://github.com/caomin1204418950/resource/blob/master/test1.png?raw=true',
    },
    {
        url:'https://github.com/caomin1204418950/resource/blob/master/test2.png?raw=true'
    }

]
  },
  intopage:function(e){
      console.log(e);
      var id = e.currentTarget.id;
      console.log(id);

      if(id==5){
        wx.navigateTo({
          url: '../didi/didi'})
      }
      else if(id=0){
        wx.scanCode({
          onlyFromCamera: true,
          success: (res) => {
            console.log(res)
          }
        })
      }

  },
  touch_add_image:function(e){
        console.log(e);
        var data = e.currentTarget.dataset.index;
        this.setData({
            activeIndex: e.currentTarget.dataset.index,
            
        })
        console.log(this.data.activeIndex);
  },
  onLoad: function (options) {
  
     
  }
})

  //事件处理函数
  
