<template>
    <div id="commission">
        <div class="commission__sample">
            <CommissionCarousel></CommissionCarousel>
        </div>
        <div class="commission__flow">
            <h4 class="flow-heading">委託開放</h4>
            <div class="flow_info">目前未開放，將不定期於噗浪公告名額</div>
            <h4 class="flow-heading">流程</h4>
            <div class="flow_info">私訊討論>草稿>匯款>完稿（以email交付png檔）</div>
            <h4 class="flow-heading">付款</h4>
            <div class="flow_info">提供郵局、玉山銀行帳戶<br>七天內未完成匯款視為放棄交易，須賠償我方草稿費用</div>
            <h4 class="flow-heading">時間</h4>
            <div class="flow_info">完稿時間一個月內，需排單不收急件</div>
            <h4 class="flow-heading">須知</h4>
            <ul class="flow_tips">
                <li class="flow_tips--item">圖上所示價格僅供參考，以噗浪公告價格為主</li>
                <li class="flow_tips--item">不接獸化、人外、異形</li>
                <li class="flow_tips--item">畫風以近期作品為主，可拿兩個月內的圖來指定上色風格等</li>
                <li class="flow_tips--item">背景默認簡單色塊，如需複雜背景可再討論加購</li>
                <li class="flow_tips--item">非買斷，我仍保有以自己名義發表之權利</li>
                <li class="flow_tips--item">完成的委託日後有機會加上水印後以低畫質作為範例發布</li>
            </ul>
            

        </div>
    </div>
</template>
<script>
import CommissionCarousel from './ComSwiper.vue';

export default {
  components: { CommissionCarousel },
};

</script>
<style lang="scss">
    #commission{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        gap: 4rem;

    }
    .commission{
        &__sample{
            grid-column: 1/2;
            border-radius: 25px;
            box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
        }
        &__flow{
            grid-column: 2/3;
            margin: auto;
            padding: 2rem 2rem;
            font-size: 1.2rem;
        }
    }
    .flow-heading{
        font-weight: 600;
        letter-spacing: 3px;
        margin: .4rem 0;
        background-color: #FFB4A2;
        padding: .4rem 1rem;
        border-radius: 12px;
        display: inline-block;
        color:white;
    }
    .flow{
        &_info{
            margin: .5rem 0;
            margin-left: 2rem;
        }
    }
    .flow_tips{
        list-style-type: square;
            margin: .5rem 0;
        margin-left: 2rem;
        
    }
</style>
