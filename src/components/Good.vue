<template>
    <div id="goods">
        <div class="good" v-for="book in this.books" :key="book.date">
            <img :src="book.picUrl"  alt="good__pic" class="good__photo">
            <div class="good__info">
              <h2 class="good__title">{{book.title}}</h2>
              <span class="good__cp">
                  {{book.cp}}
                  <span class="good__adult" v-if="book.adult">R18</span>
              </span>
              <span class="good__format">{{book.format}}</span>
              <span class="good__price">NTD. {{book.price}}</span>
              <div class="good__links">
                  <a :href="book.preview" class="good__link" target="_blank"><i class="fas fa-book-open"></i>試閱 </a>
                  <a v-if="book.shop" :href="book.shop" class="good__link" target="_blank"><i class="fas fa-shopping-bag"></i>通販</a>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Goods',
  data() {
    return {
      books: [{
        date: '2106',
        picUrl: require('@/assets/image/cover/2106.jpg'),
        title: '轉生到異世界和踩死魔王結果成為新魔王的艾連一起被討伐是否搞錯了什麼',
        cp: '艾萊',
        adult: true,
        preview: 'https://www.plurk.com/p/ofd0u5',
        format: 'A5右翻30P黑白漫畫',
        price: 180,
        shop: 'https://www.pcstore.com.tw/g77shop/M80712714.htm',
      }, {
        date: '2104',
        picUrl: require('@/assets/image/cover/2104.jpg'),
        title: '兩份狐狸外帶謝謝',
        cp: '北雙子/侑治侑',
        adult: true,
        preview: 'https://www.plurk.com/p/oar6fy',
        format: 'A5右翻24P黑白漫畫',
        price: 150,
        shop: 'https://bolexiang.com/book_infor.php?book_number=TW210442',
      }, {
        date: '1912',
        picUrl: require('@/assets/image/cover/1912.jpg'),
        title: 'A huge, huge headline',
        cp: '蟲神秘',
        adult: true,
        preview: 'https://twitter.com/kk190820/status/1198958550602534913',
        format: 'A5左翻30P黑白漫畫',
        price: 180,
      }, {
        date: '1909',
        picUrl: require('@/assets/image/cover/1909.jpg'),
        title: 'He is the fake(true) one',
        cp: '蟲神秘',
        adult: false,
        preview: 'https://twitter.com/kk190820/status/1167741907377651712',
        format: 'A5左翻24P黑白漫畫',
        price: 140,
      },
      ],
    };
  },
};
// https://yuugou727.github.io/blog/2018/04/09/webpack-vue-dynamic-assets/
</script>

<style lang="scss">
    svg {
      margin-right:.5rem;
    }
    #goods{
        display: grid;
        grid-template-columns: 1fr;
        // gap: 2rem;

    }
    .good{
        display: grid;
        grid-template-columns: 1fr 2.5fr;
        padding:1.5rem 0;
        &:not(:last-child){
        border-bottom: 2px dashed #FFB4A2;
        }

        &__info{
          display: flex;
          flex-direction: column;
          justify-content: space-around;

          
        }

        &__photo{
            grid-row: 1/-1;
            width:12rem;
            margin: auto;
            border-radius: 6px;
            transition:all .2s;
            &:hover{
            box-shadow: rgba(#FFB4A2, 0.8) 3px 3px, rgba(#FFB4A2, 0.6) 6px 6px;
            // transform: scale(1.05) translate(-3px -3px);
            transform: scale(1.05) ;
            }
        }
        &__cp{
          display:flex;
          align-items: center;
        }
        &__adult{
          background-color: tomato;
          color:white;
          padding: 1px 4px;
          margin-left: .5rem;
          border-radius: 3px;
          font-size: .8rem;
        }
        &__links{
          display: flex;
          align-items: center;
        }
        &__link{
          display: flex;
          align-items: center;
          transition: all .1s;
            border-bottom: 1px solid transparent;
          &:not(:last-child){
            margin-right: 1rem;
          }
          &:hover{
            color: #FFB4A2;
            border-bottom: 1px solid #FFB4A2;
            transform: translateY( -4px);

          }
        }
    }
</style>
