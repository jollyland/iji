<template>
  <Carousel :autoplay="3500" :wrap-around="true">
    <Slide v-for="(slide, index) in menu" :key="index">
      <div class="carousel__item">
        <div class="menu__item">
          <h4 class="menu menu__title">{{slide.title}}</h4>
          <div class="menu menu__price">NTD {{slide.price}} up</div>
          <div class="menu menu__description" v-if="slide.description">{{slide.description}}</div>
        </div>
        <img :src="slide.picUrl" :alt="slide.title" class="carousel__pic">
      </div>
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Pagination, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'CommissionCarousel',
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      menu: [{
        title: '寶可夢印象服裝',
        price: 2500,
        description: '多加寶可夢NT200/隻，請避免身材超過2公尺之寶可夢，服裝可做合理範圍內非商業利用',
        picUrl: require('@/assets/image/pokemon_cloth.jpg'),
      },{
        title: '彩色半身',
        price: 1000,
        description: '簡單色塊背景，背景須加價',
        picUrl: require('@/assets/image/single_half.jpg'),
      }, {
        title: '簡單Q版',
        price: 250,
        description: '另有R18項目，委託範例及價格請至噗浪觀看',
        picUrl: require('@/assets/image/simple_chibby.jpg'),
      }, {
        title: '精緻Q版',
        price: 500,
        picUrl: require('@/assets/image/fansy_chibby.jpg'),
      }, 

      ],
    };
  },
});
</script>

<style lang="scss">
  .carousel{
    &__item{
      position:relative;
      width: 100%
    }
    &__pic{
      width:100%;
    }
  }
  .menu{
    &__item{
      position:absolute;
      display: flex;
      flex-direction: column;
      right:0%;
      top: 60%;
      width:70%;
      align-items:flex-end;
      padding:1rem 0 1rem 1rem;
      border-radius: 10px 0 0 10px;
      box-sizing: border-box;
      text-align: right;
      }
    &__title{
      // background-color: #FFB4A2DD;
      // color:#2c3e50;
      font-size: 2.8rem;
      display: block;
      padding:.3rem 1rem;
      letter-spacing: 2px;
      border-radius: 5px 0 0 5px;

      color:white;
      padding:0rem 1rem;
      // font-weight: ;
      text-shadow: -1.2px -1.2px 0 #2c3e50, 
              1.2px -1.2px 0 #2c3e50,
              -1.2px 1.2px 0 #2c3e50, 
              1.2px 1.2px 0 #2c3e50,
              rgba(#FFB4A2, 0.8) 2px 1px, rgba(#FFB4A2, 0.6) 4px 2px,;
              

    }
    &__price{
      color:white;
      font-size: 2rem;
      padding:0rem 1rem;
      font-weight: bold;
      text-shadow: -1px -1px 0 #2c3e50, 
              1px -1px 0 #2c3e50,
              -1px 1px 0 #2c3e50, 
              1px 1px 0 #2c3e50,
              rgba(#FFB4A2, 0.8) 2px 1px, rgba(#FFB4A2, 0.6) 4px 2px,;
              
      letter-spacing: 2px;
    }
    &__description{
      // text-stroke: 1px white;
      // -webkit-text-stroke: .1px white;
      // font-weight: 600;
      font-size: 1.2rem;
      // text-shadow: 1px 1px .5px white ;
      // background-color: #00000088;
      color:white;
      padding:.4rem 1rem;
      text-shadow: -1px -1px 0 #2c3e50, 
              1px -1px 0 #2c3e50,
              -1px 1px 0 #2c3e50, 
              1px 1px 0 #2c3e50;
      }
  }
</style>
