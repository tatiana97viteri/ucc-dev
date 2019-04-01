<template>
    <div class="places">
        <div class="wraper left">
            <div class="content">
                <div class="item item1">
                    <p class="title-center">NOMBRE</p>
                    <img src="https://images.pexels.com/photos/342111/pexels-photo-342111.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
                </div>
                <div class="item item2">
                    <p class="title-center">NOMBRE</p>
                    <img src="https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
                </div>
            </div>
            <div class="item item3">
                <p class="title-center">NOMBRE</p>
                <img src="https://images.pexels.com/photos/696295/pexels-photo-696295.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
            </div>
        </div>
        <div class="wraper right">
            <div class="item item3">
                <p class="title-center">NOMBRE</p>
                <img src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
            </div>
            <div class="content">
                <div class="item item1">
                    <p class="title-center">NOMBRE</p>
                    <img src="https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
                </div>
                <div class="item item2">
                    <p class="title-center">NOMBRE</p>
                    <img src="https://images.pexels.com/photos/295168/pexels-photo-295168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .places{
        width: 100%;
        max-width: 100%;
        display: flex;
        box-sizing: border-box;
        padding: 50px;
        margin-top: 10px;
    }
    .wraper{
        width: 50%;
        height: 400px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
    }
    .left{
        margin-right: 10px;
    }
    .right{
        margin-left: 10px;
    }
    .content{
        flex: 1;
        display: flex;
    }
    .item3{
        background: violet;
        height: 50%;;
    }
    .item{
        flex: 1;
        box-sizing: border-box;
        margin: 10px;
        border-radius: 5px;
        cursor: pointer;
        position: relative;
    }
    .item:hover{
        transform: translateY(-5px);
    }
    .item1{
        background: orange;
    }
    .item2{
        background: orangered;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
    }
    .title-center{
        position: absolute;
        color: white;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        top: 75px;
        font-weight: bold;
    }
    @media (max-width: 740px){
        .places{
            display: initial;
        }
        .wraper{
            width: 100%;
        }
    }
</style>
