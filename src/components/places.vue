<template>
    <div class="places">
        <div class="wraper left">
            <div class="content">
                <div class="item item1">
                    <v-hover>
                        <v-img
                            slot-scope="{ hover }"
                            class="mx-auto"
                            color="grey lighten-4"
                            max-width="600" 
                            style="border-radius: 5px;"
                            src="https://images.pexels.com/photos/342111/pexels-photo-342111.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""
                        >
                            <v-expand-transition>
                                <div
                                    v-if="hover"
                                    class="d-flex transition-fast-in-fast-out v-card--reveal display-3 white--text font-weight-light title mb-2"
                                    style="height: 100%;"
                                >
                                    Parques temáticos <br> Deportes extremos
                                </div>
                            </v-expand-transition>
                        </v-img>
                    </v-hover>   
                </div>
                <div class="item item2">
                     <v-hover>
                        <v-img
                            slot-scope="{ hover }"
                            class="mx-auto"
                            color="grey lighten-4"
                            max-width="600" 
                            style="border-radius: 5px;"
                            src="https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""
                        >
                            <v-expand-transition>
                                <div
                                    v-if="hover"
                                    class="d-flex transition-fast-in-fast-out v-card--reveal display-3 white--text font-weight-light title mb-2"
                                    style="height: 100%;"
                                >
                                    Restaurantes - Bares <br> Centros comerciales
                                </div>
                            </v-expand-transition>
                        </v-img>
                    </v-hover>
                </div>
            </div>
            <div class="item item3">
                <v-hover>
                    <v-img
                        slot-scope="{ hover }"
                        class="mx-auto img"
                        color="grey lighten-4"
                        style="border-radius: 5px;"
                        src="https://images.pexels.com/photos/696295/pexels-photo-696295.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""
                    >
                        <v-expand-transition>
                            <div
                                v-if="hover"
                                class="d-flex transition-fast-in-fast-out v-card--reveal display-3 white--text font-weight-light title mb-2"
                                style="height: 100%;"
                            >
                                Santuarios <br> Sitios culturales
                            </div>
                        </v-expand-transition>
                    </v-img>
                </v-hover>
            </div>
        </div>
        <div class="wraper right">
            <div class="item item3">
                <v-hover>
                    <v-img
                        slot-scope="{ hover }"
                        class="mx-auto img"
                        color="grey lighten-4"
                        style="border-radius: 5px;"
                        src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""
                    >
                        <v-expand-transition>
                            <div
                                v-if="hover"
                                class="d-flex transition-fast-in-fast-out v-card--reveal display-3 white--text font-weight-light title mb-2"
                                style="height: 100%;"
                            >
                                Hospedajes <br> Alquileres de transporte
                            </div>
                        </v-expand-transition>
                    </v-img>
                </v-hover>
            </div>
            <div class="content">
                <div class="item item1">
                    <v-hover>
                        <v-img
                            slot-scope="{ hover }"
                            class="mx-auto"
                            color="grey lighten-4"
                            max-width="600" 
                            style="border-radius: 5px;"
                            src="https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""
                        >
                            <v-expand-transition>
                                <div
                                    v-if="hover"
                                    class="d-flex transition-fast-in-fast-out v-card--reveal display-3 white--text font-weight-light title mb-2"
                                    style="height: 100%;"
                                >
                                    Museos <br> Galerias
                                </div>
                            </v-expand-transition>
                        </v-img>
                    </v-hover>
                </div>
                <div class="item item2">
                    <v-hover>
                        <v-img
                            slot-scope="{ hover }"
                            class="mx-auto"
                            color="grey lighten-4"
                            max-width="600" 
                            style="border-radius: 5px;"
                            src="https://images.pexels.com/photos/295168/pexels-photo-295168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""
                        >
                            <v-expand-transition>
                                <div
                                    v-if="hover"
                                    class="d-flex transition-fast-in-fast-out v-card--reveal display-3 white--text font-weight-light title mb-2"
                                    style="height: 100%;"
                                >
                                    Reservas naturales <br> Resguardos indígenas
                                </div>
                            </v-expand-transition>
                        </v-img>
                    </v-hover>
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
        margin: 5px;
    }
    .wraper{
        width: 50%;
        height: 400px;
        display: flex;
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
        height: 100%;
    }
    .item3{
        background: violet;
        height: 50%;
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
        font-size: 10px;
    }
    .img{
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
    .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .8;
    position: absolute;
    width: 100%;
    font-size: 15px;
     background: rgb(196, 188, 188);
    }
</style>
