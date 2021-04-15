<template>
    <div class="wrapper1">
        <div class="main_content">
            <div class="info">
                <h1>personages</h1>
                <div>
                    <input type="text" @keyup="searchperso" v-model="queryperso" placeholder="rechecher un perso">
                </div>
                <!-- <button v-on:click.prevent="callapi">test api</button> -->
                <div v-if="perso.length == 0">
                    <ul idss="persoss.name" v-for="persoss in persos" :key="persoss.id">
                        <li><router-link :to="{ name: 'personageid' , params: { id:persoss.id }}">{{persoss.name}}</router-link> {{persoss.description}} {{persoss.typeattack1}} {{persoss.typeattack2}} {{persoss.typeattack3}}</li>
                    </ul>
                </div> 
                <div v-else>
                    <ul idss="persoss.name" v-for="persoss in perso" :key="persoss.id">
                        <li><router-link :to="{ name: 'personageid' , params: { id:persoss.id }}">{{persoss.name}}</router-link> {{persoss.description}} {{persoss.typeattack1}} {{persoss.typeattack2}} {{persoss.typeattack3}}</li>
                    </ul>
                </div>
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
            perso: [],
            persos: [],
            urlapi:'https://api-saoars.herokuapp.com/perso',
            queryperso:'',

        }
    },
    methods:{
       /* callapi:function() {
            axios
            .get(`${this.urlapi}/45`)
            .then(reponse => {    
                this.perso = reponse.data.Personage; 
                console.log(this.perso);
            })
        }*/
        searchperso(){
            axios
            .get(`${this.urlapi}/p/${this.queryperso}`)
            .then(reponse => {
                this.perso = reponse.data.Personage;
                console.log(this.perso);
            })
            .catch(this.persos)
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