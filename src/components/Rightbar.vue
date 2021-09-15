<template>
    <div id="right-bar">
        <a href="#" target="_blank"><i class="fab fa-product-hunt"></i>Plurk</a>
        <a href="#" target="_blank"><i class="fab fa-twitter"></i>Twitter</a>
    </div>
</template>

<style lang="scss">
#right-bar{
    grid-column-start: right-sidebar-start;
    grid-column-end: right-sidebar-end;
    padding: 2rem 3rem;
    grid-row: 1/-1;
    display: flex;
    flex-direction: column;
    justify-content:flex-end;
    transition: all .4s;
    a {
        font-weight: 500;
        color: #2c3e50;
        display:flex;
        justify-content: flex-end;
        align-items: center;

        &.router-link-exact-active {
        color: #FFB4A2;
        }
        &:hover {
            color: #FFB4A2;
        }
        &:not(:last-child){
            margin-bottom: 1rem;
        }
        svg {
            margin-right: .5rem;
        }
    }
}
</style>
