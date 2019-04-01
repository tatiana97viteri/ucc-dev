<template>
    <div class="footer">
        <div>
            <el-footer class="page-footer font-small black">
                <div>
                    <img src="https://image.flaticon.com/icons/svg/69/69407.svg">
                    <img src="https://image.flaticon.com/icons/svg/1384/1384015.svg">
                    <img src="https://image.flaticon.com/icons/svg/121/121518.svg">
                </div>
                <div>
                    <p>Acerca de nosotros  &emsp; - &emsp;   Centro de ayuda &emsp;   -  &emsp;  
                        Terminos de uso  &emsp;  -  &emsp;   Política de privacidad &emsp;
                          -  &emsp;  Política de cookies  &emsp;  -  &emsp;  Política de Derechos de autor</p>
                    <p> &copy; 2019 Copyright</p>
                </div>
            </el-footer>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .footer{
        justify-content: flex-end;
        position: relative;
        width: 100%;
        height: 200px;
        background: #009688;
    }
    img{
        width: 60px;
        height: 60px;
        border-radius: 50px;
        background: whitesmoke;
        fill: whitesmoke;
        padding: 3px;
        margin: 20px;
    }
    p{
        font-size: 12px;
        color: white;
    }
</style>
