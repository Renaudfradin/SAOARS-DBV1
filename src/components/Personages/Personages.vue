<template>
    <div class="wrapper1">
        <div class="main_content">
            <div class="info">
                <h1>personages</h1>
                <button v-on:click.prevent="callapi">test api</button>
                <ul idss="persoss.name">
                    <li v-for="persoss in persos" :key="persoss.id"><router-link to="{name:'personage'}" >{{persoss.name}}</router-link> {{persoss.description}} {{persoss.typeattack1}} {{persoss.typeattack2}} {{persoss.typeattack3}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'Personages',
    data(){
        return {
            perso: undefined,
            persos: [],
            urlapi:'https://api-saoars.herokuapp.com/perso'
        }
    },
    methods:{
        callapi:function() {
            axios
            .get(`${this.urlapi}/45`)
            .then(reponse => {    
                this.perso = reponse.data.Personage; 
                console.log(this.perso);
            })
        }
    },
    mounted(){
        axios
        .get(`${this.urlapi}`)
        .then(reponse => {
            this.persos = reponse.data.Personage;
            console.log(this.persos);
        })
    }

    
}
</script>
<style src="./Personages.css" scoped></style>