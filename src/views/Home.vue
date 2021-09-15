<template>
  <LeftBar/>
  <div class="content">
      <router-view></router-view>
  </div>
  <RightBar/>
</template>

<script>
import RightBar from '@/components/Rightbar.vue';
import LeftBar from '@/components/Leftbar.vue';

export default {
  name: 'home',
  components: {
    RightBar, LeftBar,
  },
};
</script>

<style lang="scss">

.content{
  grid-column-start: main-start;
  grid-column-end: main-end;
  padding: 3rem 0;
  display: flex;
  
}

</style>
