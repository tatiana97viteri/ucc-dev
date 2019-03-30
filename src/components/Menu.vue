<template>
<div class="container-menu">
    <div class="menu">
        <div class="logo">EXPERIENCIAS</div>
        <nav class="nav">
            <ul class="list-menu">
                <!-- <li class="link-menu" v-for="(item, index) in list" :key="index">{{item}}</li> -->
                <li class="link-menu" v-scroll-to="'#home'">Inicio</li>
                <li class="link-menu" v-scroll-to="'#experiences'">Experiencias</li>
                <li class="link-menu" v-scroll-to="'#'">Comunidad</li>
                <li class="link-menu" v-scroll-to="'#'">Contacto</li>
                <!-- <router-link to="/">Inicio</router-link>
                <router-link to="/experiencias">Experiencias</router-link> -->
                <!-- <router-link to="/foo">Go to Foo</router-link>
                <router-link to="/foo">Go to Foo</router-link> -->
            </ul>
        </nav>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return {
            list: ['Inicio','Experiencias','Comunidad','Contacto']
        }
    }
}
</script>

<style scoped>
.container-menu {
    background-color: rgba(0,0,0,.1);
    position: absolute;
    top: 0;
    z-index: 1;
    width: 100%;
    color: white;
}
.menu {
    max-width: 1000px;
    width: 100%;
    display: flex;
    height: 60px;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
}
.link-menu {
    list-style: none;
    cursor: pointer;
}
.link-menu:hover{
    font-weight: 600;
}
.list-menu {
    width: 350px;
    display: flex;
    justify-content: space-between;
    font-size: larger;
}
.logo {
    font-weight: 600;
    font-size: large;
}
</style>
