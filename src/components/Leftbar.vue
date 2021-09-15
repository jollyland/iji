<template>
    <div id="left-bar">
        <router-link to="/">Profile</router-link>
        <router-link to="/good">Good</router-link>
        <router-link to="/commission">Commission</router-link>
        <router-link to="/gallery">Gallery</router-link>
    </div>
</template>

<style lang="scss">
#left-bar {
    padding: 2rem 3rem;
    grid-column: left-sidebar-start/left-sidebar-end;
    grid-row: 1/-1;
    display: flex;
    flex-direction: column;
    transition: all .4s;
    a {
        font-weight: 600;
        color: #2c3e50;

        &.router-link-exact-active {
        color: #FFB4A2;
        }
        &:hover {
            color: #FFB4A2;
        }
        &:not(:last-child){
            margin-bottom: 1rem;
        }
    }
}
</style>
