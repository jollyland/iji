<template>
    <div id="profile">
        <div class="profile__photo"></div>
        <div class="profile__intro">
            <h1 class="profile__name">一給<span class="profile__name--tip">ㄐㄧˇ／井地</span></h1>
            <p class="profile__paragraph">
                「什麼清白？我前天親眼見你噗浪發R18塗鴉集中，上紅標。」孔一給便漲紅了臉，額上的青筋條條綻出，爭辯道，「塗鴉不能算A圖……塗鴉！……繪師的事，能算R18麼？」
                接連便是難懂的話，什麼「描線塗黑就畫完了」，什麼「印本比較快」之類，引得眾人都哄笑起來：場內外充滿了快活的空氣。</p>
            <span class="profile__email"><i class="far fa-envelope"></i>siromiki1111@gmail.com</span>
            <span class="profile__event">近期參加活動</span>
            <ul class="profile__events">
                <li class="profile__events--item"><i class="fas fa-map-marker"></i>【艾連 x 萊納中心線上ONLY】艾萊不來</li>
                <li class="profile__events--item"><i class="fas fa-map-marker"></i>排球ONLY同好會【全員快攻HIGH＆QUICK SP】</li>
                <li class="profile__events--item"><i class="fas fa-map-marker"></i>CWT-57《台大場》</li>
                <li class="profile__events--item"><i class="fas fa-map-marker"></i>BIO7歐美主題ONLY場</li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
    #profile{
        display: grid;
        grid-template-columns: 1fr 2fr;
        column-gap: 4rem;
        height: 100%;
        font-family: FakePearl-Light;
        transition:all .4s;
    }
    .profile{
        &__photo{
            width: 100%;
            height: 100%;
            margin: auto;
            background-image: url('~@/assets/3.png');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            transition: all .2s;
            &:hover{
                background-image: url('~@/assets/1.png');
                transform: scale(1.05);
            }
        }
        &__name{
            letter-spacing: 8px;
            font-size: 8rem;
            font-weight: 900;
            color: white;
            -webkit-text-stroke: .1px #2c3e50;

            &--tip{
                font-size: 1.6rem;
                -webkit-text-stroke: none;
                font-weight: 500;
                color: #2c3e50;
            }
        }
        &__paragraph{
            margin-bottom: 1rem;
        }
        &__intro{
            display: flex;
            flex-direction: column;
            margin: auto 0;
        }
        &__email{
            display: flex;
            align-items: center;
            margin-bottom: 1rem;
            &:hover {
            color: #FFB4A2;
            }
            svg{
                margin-right: .5rem;
            }
        }
        &__event {
            color: #FFB4A2;
            border-bottom: 1px solid;
            margin-bottom: 1rem;
            display: inline-flex;
        }
        &__events{
            list-style: none;
            margin-left: 2rem;
            color: #FFB4A2;
            
            &--item{
                display: flex;
                align-items: center;

                justify-content: space-between;
                &:not(:last-child){
                margin-bottom: .4rem;
                }
            }
        }
    }
</style>
