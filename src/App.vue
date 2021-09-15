<template>
  <router-view/>
</template>

<style lang="scss">

*,*::before,*::after{
  margin:0;
  padding:0;
  box-sizing: border-box;
}

a,a:active,a:link{
  text-decoration: none;
  color: inherit;
}

#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  height: 100vh;
  box-sizing: border-box;
  display: grid;
  grid-template-columns:[left-sidebar-start] 15rem [left-sidebar-end] minmax(4rem,1fr)
                        [main-start] repeat(8, minmax(5rem,1fr)) [main-end] minmax(4rem,1fr)
                        [right-sidebar-start] 15rem [right-sidebar-end];
}

</style>
