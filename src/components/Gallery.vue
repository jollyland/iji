<template>
    <div id="gallery-viewport">
        <a href="#" @click="rbtnOnClick()" class="button button__right"><i class="fas fa-chevron-right"></i></a>
        <a href="#" @click="lbtnOnClick()" class="button button__left"><i class="fas fa-chevron-left"></i></a>
        <div id="gallery" :class="this.galary_position">
            <div :class="imgClassName(i+1)" v-for="(pic, i) in picUrl" :key="i">
                <img class="gallery__img" :src="pic">
            </div>
            <!-- https://mirari.cc/2021/05/31/Vue3%E5%9B%BE%E7%89%87%E6%B5%8F%E8%A7%88%E7%BB%84%E4%BB%B6v-viewer%EF%BC%8C%E6%94%AF%E6%8C%81%E6%97%8B%E8%BD%AC%E3%80%81%E7%BC%A9%E6%94%BE%E3%80%81%E7%BF%BB%E8%BD%AC%E7%AD%89%E6%93%8D%E4%BD%9C/ -->
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            position_index:0,
            galary_position:'',
            picUrl:[
                require('@/assets/image/gallery/image_1.jpg'),
                require('@/assets/image/gallery/image_2.jpg'),
                require('@/assets/image/gallery/image_3.jpg'),
                require('@/assets/image/gallery/image_4.jpg'),
                require('@/assets/image/gallery/image_5.jpg'),
                require('@/assets/image/gallery/image_6.jpg'),
                require('@/assets/image/gallery/image_7.jpg'),
                require('@/assets/image/gallery/image_8.jpg'),
                require('@/assets/image/gallery/image_9.jpg'),
                require('@/assets/image/gallery/image_10.jpg'),
                require('@/assets/image/gallery/image_11.jpg'),
                require('@/assets/image/gallery/image_12.jpg'),
                require('@/assets/image/gallery/image_13.jpg'),
                require('@/assets/image/gallery/image_14.jpg'),
                require('@/assets/image/gallery/image_15.jpg'),
                require('@/assets/image/gallery/image_16.jpg'),
                require('@/assets/image/gallery/image_17.jpg'),
                require('@/assets/image/gallery/image_18.jpg'),
                require('@/assets/image/gallery/image_19.jpg'),
                require('@/assets/image/gallery/image_20.jpg'),
                require('@/assets/image/gallery/image_21.jpg'),
                require('@/assets/image/gallery/image_22.jpg'),
            ]
        };
    },
    methods : {
        imgClassName(i) {
            var temp = 'gallery-item--' + i.toString()
            return "gallery-item "+temp;
        },
        rbtnOnClick(){
            if(this.position_index < 4){
                this.position_index+=1
            }
        },
        lbtnOnClick(){
            if(this.position_index > 0){
                this.position_index-=1
            }
        },
        getImage(i){
            return this.picUrl[i]
        }
    
    },
    watch: {
        position_index() {
            switch(this.position_index){
                case 0:
                    this.galary_position = "position__0";
                    break;
                case 1:
                    this.galary_position = "position__1";
                    break;
                case 2:
                    this.galary_position = "position__2";
                    break;
                case 3:
                    this.galary_position = "position__3";
                    break;
                case 4:
                    this.galary_position = "position__4";
                    break;
            }
            
        },
    },

};
</script>

<style lang="scss">
    #gallery-viewport{
        width:100%;
        // height:100%;
        overflow: hidden;
        align-self: center;
        position:relative;

    }
    .button{
        width:4rem;
        display: flex;
        align-self: center;
        justify-content: center;
        font-size: 2.8rem;
        opacity: .2;
        transition: all .5s;
        z-index: 20;
        &:hover{
            opacity: 1;
        }
        &__right{
            height: 100%;
            position:absolute;
            top:0;
            right:0;
            &:hover{
                background: linear-gradient(to right, #2c3e5000, #2c3e5033);
            }
        }
        &__left{
            height: 100%;
            position:absolute;
            top:0;
            left:0;
            &:hover{
                background: linear-gradient(to left, #2c3e5000, #2c3e5033);
            }
        }
        svg{
            margin: auto 0;
            color:white;
        }
    }
    #gallery{
        display: grid;
        grid-template-columns: repeat(12,1fr);
        grid-template-rows: repeat(5, 15vh);
        width:200%;
        height:100%;
        gap:.5rem;

    }
    .gallery__img{
            object-fit: cover;
            display: block;
            width: 100%;
            height: 100%;
            cursor:crosshair;
    }

    [class*="position__"] {
        transition: all ease-out .6s;
    }
    .position {
        &__0{
            transform: translateX(0);
        }
        &__1{
            transform: translateX(-12.5%);
        }
        &__2{
            transform: translateX(-25%);
        }
        &__3{
            transform: translateX(-37.5%);
        }
        &__4{
            transform: translateX(-50%);
        }
    }

    // [class*="gallery-item"]{
        
    // }
    .gallery-item{
        box-shadow: rgba(#FFB4A2, 1) 2px 2px 2.6px;

        transition: all .2s;
        &:hover{
            transform:scale(1.2);
            box-shadow: none;

        }

        &--1{
            grid-column: 1/ 3;
            grid-row: 1/3;
        }
        &--2{
            grid-column: 3/ span 1;
            grid-row: 1/ span 1;
        }
        &--3{
            grid-column: 4/ span 3;
            grid-row: 1/ span 3;
        }
        &--4{
            grid-column: 7 / span 2;
            grid-row: 1/ span 1;
        }
        &--5{
            grid-column: 9 / span 3;
            grid-row: 1/ span 2;
        }
        &--6{
            grid-column: 1 / span 3;
            grid-row: 3/ span 2;
        }
        &--7{
            grid-column: 3 / span 1;
            grid-row: 2/ span 1;
        }
        &--8{
            grid-column: 4 / span 2;
            grid-row: 4/ span 2;
        }
        &--9{
            grid-column: 7 / span 2;
            grid-row: 2/ span 3;
        }
        &--10{
            grid-column: 9 / span 2;
            grid-row: 3/ span 1;
        }
        &--11{
            grid-column: 12 / span 1;
            grid-row: 2/ span 2;
        }
        &--12{
            grid-column: 12 / span 1;
            grid-row: 1/ span 1;
        }
        &--13{
            grid-column: 12 / span 1;
            grid-row: 2/ span 2;
        }
        &--14{
            grid-column: 1 / span 1;
            grid-row: 5/ span 1;
        }
        &--15{
            grid-column: 2 / span 2;
            grid-row: 5/ span 1;
        }
        &--16{
            grid-column: 6 / span 1;
            grid-row: 4/ span 1;
        }
        &--17{
            grid-column: 6 / span 2;
            grid-row: 5/ span 1;
        }
        &--18{
            grid-column: 8 / span 2;
            grid-row: 5/ span 1;
        }
        &--19{
            grid-column: 9 / span 1;
            grid-row: 4/ span 1;
        }
        &--20{
            grid-column: 11 / span 2;
            grid-row: 4/ span 2;
        }
        &--21{
            grid-column: 11 / span 1;
            grid-row: 3/ span 1;
        }
        &--22{
            grid-column: 10 / span 1;
            grid-row: 4/ span 2;
        }
    }
</style>
