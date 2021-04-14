<template>
    <div class="wrapper">
        <div class="main_content">
            <div class="info">
                <h1>personage id</h1>
                <p>test</p>
                <p>{{ perso.id }}</p>
                <p>{{ perso.name }}</p>
                <p>{{ perso.description }}</p>
                <p>{{ perso.description1 }}</p>
                <p>{{ perso.attack1 }}</p>
                <p>{{ perso.descriptionattack1 }}</p>
                <p>{{ perso.mpattack1 }}</p>
                <p>{{ perso.attack2 }}</p>
                <p>{{ perso.descriptionattack2 }}</p>
                <p>{{ perso.mpattack2 }}</p>
                <p>{{ perso.attack3 }}</p>
                <p>{{ perso.descriptionattack3 }}</p>
                <p>{{ perso.mpattack3 }}</p>
                <p>{{ perso.hp }}</p>
                <p>{{ perso.mp }}</p>
                <p>{{ perso.atk }}</p>
                <p>{{ perso.matk }}</p>
                <p>{{ perso.def }}</p>
                <p>{{ perso.mdef }}</p>
                <p>{{ perso.crit }}</p>
                <p>{{ perso.spd }}</p>
                <p>{{ perso.ultime }}</p>
                <p>{{ perso.descriptionultime }}</p>
                <p>{{ perso.typeattack1 }}</p>
                <p>{{ perso.typeattack2 }}</p>
                <p>{{ perso.typeattack3 }}</p>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    name:'Personageid',
    data(){
        return{
            perso: [],
            id:this.$route.params.id,
            urlapi:"https://api-saoars.herokuapp.com/perso/"
        }
    },
    mounted(){
        axios
        .get(`${this.urlapi}/${this.id}`)
        .then(reponse => {
            this.perso = reponse.data.Personage[0];
            console.log(this.perso);
        })
    }
}
</script>
<style src="./Personageid.css" scoped> </style>