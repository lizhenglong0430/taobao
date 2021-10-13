<template>
  <div
    class="contentcenter"
    :style="{ height: `${this.heightT}` + 'px' }"
    ref="getHeight"
  >
    <div>
      <span class="contentcenter_title">
        猜你喜欢<span class="contentcenter_title_fangkuai">个性推荐</span>
      </span>
    </div>
    <div
      class="contentcenter_product"
      v-for="(item, index) in view"
      :key="index"
    >
          <!-- <router-link :to="{path:'/page1',query:{username}}">page1</router-link> // query方式
           <router-link :to="{name:'page2',params:{username1}}">page2</router-link> // params方式 -->
      <router-link
        :to="{
          name: 'itemList',
          params:{
            id:item.id,
            car_name:item.car_name,
            car_model:item.car_model,
            car_price:item.car_price,
            car_color:item.car_color,
            car_image:item.car_image,
            car_image2:item.car_image2,
            introduce:item.introduce,
            howManyToBuy:item.howManyToBuy,
            car_purchase_method:item.car_purchase_method,
            car_package:item.car_package
          }
        }"
      >
        <div class="contentcenter_product_image">
          <img :src="item.car_image" alt="" />
        </div>
        <div style="margin-left:5px;">{{item.car_name}}</div>
        <div class="contentcenter_product_wenzi">
          {{ item.introduce }}
        </div>
        <div class="contentcenter_product_price">
          <span>￥{{item.car_price}}W</span> <span>{{item.howManyToBuy}} 人付款</span>
        </div>
      </router-link>
    </div>
    <div class="footer">
      <span class="loading"> 正在加载新商品，请稍后... </span>
      <span class="end"> 已经没有商品了 </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentCenter3",
  data() {
    return {
      heightT: 748,
      size: 10,
      page: 0,
      view: [],
      back: [],
      flag: true,
      data1: [
        {
          id: 1,
          car_name: "保时捷718",
          car_price: 98.6,
          howManyToBuy: 7,
          car_image:
            "https://img.pcauto.com.cn/images/upload/upc/tx/auto5/2102/09/c23/253110912_1612841700687_270x202.jpg",
          car_image2:"https://img.pcauto.com.cn/images/upload/upc/tx/auto5/2101/05/c10/248575544_1609815682192_400x300.jpg",
          introduce: "外形拉风，低矮跑车，一看就很有范，保时捷大家都认识",
          car_color:["黑色","红色","黄色"],
          car_model:["顶配","中配","低配"],
          car_purchase_method:["全款"],
          car_package:["套餐一"]
        },
        {
          id: 2,
          car_name: "福特Mustang",
          car_price: 40.18,
          howManyToBuy: 9,
          car_image:
            "https://img.pcauto.com.cn/images/upload/upc/tx/auto5/2106/11/c38/267921434_1623398664242_270x202.jpg",
          introduce: "外形拉风，低矮跑车，一看就很有范，保时捷大家都认识",
        },
        {
          id: 3,
          car_name: "保时捷911",
          car_price:  311.45,
          howManyToBuy: 5,
          car_image:
            "https://img.pcauto.com.cn/images/upload/upc/tx/auto5/2102/18/c8/253922922_1613650093274_270x202.jpg",
          introduce: "外形拉风，低矮跑车，一看就很有范，保时捷大家都认识",
        },
        {
          id: 4,
          car_name: "Aventador",
          car_price: 920.4733,
          howManyToBuy: 16,
          car_image:
            "https://img.pcauto.com.cn/images/upload/upc/tx/auto5/2102/08/c11/252995866_1612760863848_270x202.png",
          introduce: "外形拉风，低矮跑车，一看就很有范，保时捷大家都认识",
        },       
        {
          id: 5,
          car_name: "AMG GT",
          car_price: 368.88,
          howManyToBuy: 23,
          car_image:
            "https://img.pcauto.com.cn/images/upload/upc/tx/auto5/2102/01/c6/252150543_1612171274847_270x202.jpg",
          introduce: "外形拉风，低矮跑车，一看就很有范，保时捷大家都认识",
        },       
        {
          id: 6,
          car_name: "奧迪 R8",
          car_price: 228.88,
          howManyToBuy: 1,
          car_image:
            "https://img.pcauto.com.cn/images/upload/upc/tx/auto5/2104/25/c8/262576026_1619321507847_270x202.jpg",
          introduce: "外形拉风，低矮跑车，一看就很有范，保时捷大家都认识",
        },       
        {
          id: 7,
          car_name: "法拉利488",
          car_price: 449.9,
          howManyToBuy: 5,
          car_image:
            "https://img.pcauto.com.cn/images/upload/upc/tx/auto5/2102/09/c29/253144346_1612860966069_270x202.jpg",
          introduce: "外形拉风，低矮跑车，一看就很有范，保时捷大家都认识",
        },       
        {
          id: 8,
          car_name: "Huracán",
          car_price: 390.00,
          howManyToBuy: 8,
          car_image:
            "https://img.pcauto.com.cn/images/upload/upc/tx/auto5/2102/07/c13/252873549_1612680347699_270x202.jpg",
          introduce: "外形拉风，低矮跑车，一看就很有范，保时捷大家都认识",
        },       
        {
          id: 9,
          car_name: "魅影",
          car_price: 590.00,
          howManyToBuy: 5,
          car_image:
            "https://img.pcauto.com.cn/images/upload/upc/tx/auto5/2103/01/c2/255261791_1614560034303_270x202.jpg",
          introduce: "外形拉风，低矮跑车，一看就很有范，保时捷大家都认识",
        },       
        {
          id: 10,
          car_name: "迈凯伦720S",
          car_price: 378.8,
          howManyToBuy: 5,
          car_image:
            "https://img.pcauto.com.cn/images/upload/upc/tx/auto5/2103/01/c2/255260091_1614559902341_270x202.jpg",
          introduce: "外形拉风，低矮跑车，一看就很有范，保时捷大家都认识",
        },
        {
          id: 1,
          car_name: "保时捷718",
          car_price: 98.6,
          howManyToBuy: 7,
          car_image:
            "https://img.pcauto.com.cn/images/upload/upc/tx/auto5/2102/09/c23/253110912_1612841700687_270x202.jpg",
          car_image2:"https://img.pcauto.com.cn/images/upload/upc/tx/auto5/2101/05/c10/248575544_1609815682192_400x300.jpg",
          introduce: "外形拉风，低矮跑车，一看就很有范，保时捷大家都认识",
        },
        {
          id: 2,
          car_name: "福特Mustang",
          car_price: 40.18,
          howManyToBuy: 9,
          car_image:
            "https://img.pcauto.com.cn/images/upload/upc/tx/auto5/2106/11/c38/267921434_1623398664242_270x202.jpg",
          introduce: "外形拉风，低矮跑车，一看就很有范，保时捷大家都认识",
        },
        {
          id: 3,
          car_name: "保时捷911",
          car_price:  311.45,
          howManyToBuy: 5,
          car_image:
            "https://img.pcauto.com.cn/images/upload/upc/tx/auto5/2102/18/c8/253922922_1613650093274_270x202.jpg",
          introduce: "外形拉风，低矮跑车，一看就很有范，保时捷大家都认识",
        },
        {
          id: 4,
          car_name: "Aventador",
          car_price: 920.4733,
          howManyToBuy: 16,
          car_image:
            "https://img.pcauto.com.cn/images/upload/upc/tx/auto5/2102/08/c11/252995866_1612760863848_270x202.png",
          introduce: "外形拉风，低矮跑车，一看就很有范，保时捷大家都认识",
        },       
        {
          id: 5,
          car_name: "AMG GT",
          car_price: 368.88,
          howManyToBuy: 23,
          car_image:
            "https://img.pcauto.com.cn/images/upload/upc/tx/auto5/2102/01/c6/252150543_1612171274847_270x202.jpg",
          introduce: "外形拉风，低矮跑车，一看就很有范，保时捷大家都认识",
        },       
        {
          id: 6,
          car_name: "奧迪 R8",
          car_price: 228.88,
          howManyToBuy: 1,
          car_image:
            "https://img.pcauto.com.cn/images/upload/upc/tx/auto5/2104/25/c8/262576026_1619321507847_270x202.jpg",
          introduce: "外形拉风，低矮跑车，一看就很有范，保时捷大家都认识",
        },       
        {
          id: 7,
          car_name: "法拉利488",
          car_price: 449.9,
          howManyToBuy: 5,
          car_image:
            "https://img.pcauto.com.cn/images/upload/upc/tx/auto5/2102/09/c29/253144346_1612860966069_270x202.jpg",
          introduce: "外形拉风，低矮跑车，一看就很有范，保时捷大家都认识",
        },       
        {
          id: 8,
          car_name: "Huracán",
          car_price: 390.00,
          howManyToBuy: 8,
          car_image:
            "https://img.pcauto.com.cn/images/upload/upc/tx/auto5/2102/07/c13/252873549_1612680347699_270x202.jpg",
          introduce: "外形拉风，低矮跑车，一看就很有范，保时捷大家都认识",
        },       
        {
          id: 9,
          car_name: "魅影",
          car_price: 590.00,
          howManyToBuy: 5,
          car_image:
            "https://img.pcauto.com.cn/images/upload/upc/tx/auto5/2103/01/c2/255261791_1614560034303_270x202.jpg",
          introduce: "外形拉风，低矮跑车，一看就很有范，保时捷大家都认识",
        },       
        {
          id: 10,
          car_name: "迈凯伦720S",
          car_price: 378.8,
          howManyToBuy: 5,
          car_image:
            "https://img.pcauto.com.cn/images/upload/upc/tx/auto5/2103/01/c2/255260091_1614559902341_270x202.jpg",
          introduce: "外形拉风，低矮跑车，一看就很有范，保时捷大家都认识",
        },       
        {
          id: 10,
          car_name: "迈凯伦720S",
          car_price: 378.8,
          howManyToBuy: 5,
          car_image:
            "https://img.pcauto.com.cn/images/upload/upc/tx/auto5/2103/01/c2/255260091_1614559902341_270x202.jpg",
          introduce: "外形拉风，低矮跑车，一看就很有范，保时捷大家都认识",
        },       
      ],
    };
  },
  mounted: function () {
    // for (let i = 0; i < 53; i++) {
    //   // console.log(this.back);
    //   this.back.push({
    //     id: 1,
    //     intriduce: "北欧宇航员太空装饰画男孩卧室墙画儿童房房间墙面创意星空挂画",
    //   });
    // }
    this.back.push(this.data1);
    this.back = this.back[0]
    this.initView();
  },
  methods: {
    initView: function () {
      this.view.push(
        ...this.back.slice(this.page * this.size, (this.page + 1) * this.size)
      );
    },
  },
  created: function () {
    let that = this;
    window.onscroll = function () {
      const windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      const scrollTop =
        (document.documentElement.scrollTop || document.body.scrollTop) -
        windowHeight;
      const scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      // const end = document.querySelector(".end");
      const loading = document.querySelector(".loading");
      //   let height = that.$refs.getHeight.style.height;
      if (
        scrollTop + windowHeight >= scrollHeight - windowHeight &&
        that.view.length < that.back.length
      ) {
        setTimeout(() => {
          if (that.back.length - that.view.length >= 6) {
            that.heightT += 678;
            that.page++;
            that.initView();
          } else {
            that.heightT += 339;
            that.page++;
            that.initView();
          }
        }, 1000);
        // end.classList.remove("active");
        loading.classList.add("active");
      } else {
        loading.classList.remove("active");
        // end.classList.add("active");
      }
    };
  },
};
</script>
<style scoped>
.contentcenter {
  width: 1164px;
  /* height: 718px; */
  /* height: 100%; */
  background-color: #fff;
  position: relative;
  margin-top: 20px;
  left: 50%;
  transform: translate(-50%);
  padding: 18px;
  border-radius: 12px;
}
.contentcenter_title {
  height: 70px;
  width: 100%;
  font-size: 27px;
  margin: 10px;
}
.contentcenter_title_fangkuai {
  margin-left: 10px;
  background-color: orangered;
  color: white;
  font-size: 17px;
  padding: 0 5px;
  border-radius: 3px;
  position: relative;
  top: -3px;
}
.contentcenter_product {
  width: 229px;
  height: 324px;
  /* height: 100%; */
  margin-top: 15px;
  float: left;
  /* background-color: #fff; */
}
.contentcenter_product > a {
  text-decoration: none;
}
.contentcenter_product:hover {
  border-radius: 12px;
  box-shadow: 5px 5px 30px 10px#E8E8E8;
}
.contentcenter_product_image {
  width: 215px;
  height: 215px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
.contentcenter_product_image > img {
  width: 100%;
  height: 100%;
  border-radius: 12px;
}
.contentcenter_product_wenzi {
  width: 205px;
  height: 44px;
  margin: 10px 5px 5px 5px;
  overflow: hidden;
  color: black;
}
.contentcenter_product_price {
  width: 215px;
  height: 33px;
  position: relative;
  margin-top: 10px;
  line-height: 33px;
}
.contentcenter_product_price > span:nth-child(1) {
  color: red;
  font-size: 20px;
}
.contentcenter_product_price > span:nth-child(2) {
  color: #787878;
  font-size: 13px;
  margin-left: 10px;
}
.footer {
  width: 100%;
  height: 30px;
  position: absolute;
  bottom: 0;
}
.loading,
.end {
  width: 100%;
  height: 100%;
  position: relative;
  left: 40%;
  display: none;
}
.loading.active,
.end.active {
  display: block;
}
</style>