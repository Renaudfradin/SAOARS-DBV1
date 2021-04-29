<template>
    <div class="wrapper">
        <div class="navhori" v-bind:class="{navhorinone: nenuetrue}">
            <div class="navhori_div">
                <div>
                    <button v-on:click="nenuetrue =!nenuetrue" class="btn_menu">
                        <div v-if="nenuetrue == true"><img class="img_menu" src="../../assets/navigation.png" alt=""></div>
                        <div v-else><img class="img_menu" src="../../assets/cancel1.png" alt=""></div>
                    </button>
                </div>
                <div class="navhori_title">
                    <router-link to="/"><h2>SAOARS DB</h2></router-link>
                </div>
            </div>
        </div>
        <div v-bind:class="{sidebar, none : nenuetrue}">
            <ul>
                <li><router-link to="/" class="home_link"><img class="sidebar_img" src="../../assets/nav_main.png" alt=""><p class="sidebar_p">Home</p></router-link></li>
                <li><router-link to="/personages"><img class="sidebar_img" src="../../assets/nav_character.png" alt=""><p class="sidebar_p">Personages</p></router-link></li>
                <li><router-link to="/arme"><img class="sidebar_img" src="../../assets/nav_weapon.png" alt=""><p class="sidebar_p">Arme</p></router-link></li>
                <li><router-link to="/objet"><img class="sidebar_img" src="../../assets/nav_item.png" alt=""><p class="sidebar_p">Objet</p></router-link></li>
                <li><router-link to="/scoot"><img class="sidebar_img" src="../../assets/nav_scout.png" alt=""><p class="sidebar_p">Scoot</p></router-link></li>
                <li><router-link to="/equipement"><img class="sidebar_img" src="../../assets/nav_equipment.png" alt=""><p class="sidebar_p">Equipement</p></router-link></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:'HeaderNav',
    data(){
        return{
            nenuetrue: true,
            sidebar: true
        }
    }, 
    methods: {
        
    }
}
</script>
<style src="./HeaderNav.css" scoped></style>