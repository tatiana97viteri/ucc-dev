<template>
<div class="container-menu">
    <div class="menu">
        <div class="logo">EXPERIENCIAS</div>
        <nav class="nav">
            <ul class="list-menu">
                <li class="link-menu" v-for="(item, index) in list" :key="index">{{item}}</li>
            </ul>
        </nav>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return {
            list: ['Inicio','Nosotros','Servicios','Contacto']
        }
    }
}
</script>

<style scoped>
.container-menu {
    background-color: #7a1ea1;
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
    color: #fff;
}
.link-menu:hover{
    font-weight: 600;
}
.list-menu {
    width: 350px;
    display: flex;
    justify-content: space-between;
}
.logo {
    color: #fff;
    font-weight: 600;
}
</style>
