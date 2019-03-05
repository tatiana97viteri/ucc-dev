<template>
    <div class="home">
        <HelloWorld/>
        <Experience/>
        <Registro/>
    </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import Experience from "@/components/Experience.vue";
import Registro from '@/components/Registro.vue'
export default {
  components: {
    HelloWorld,
    Experience,
    Registro
  }
};
</script>

<style scoped>
</style>
