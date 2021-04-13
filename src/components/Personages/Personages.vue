<template>
    <div class="wrapper">
        <div class="main_content">
            <div class="info">
                <h1>personages</h1>
                <button v-on:click.prevent="callapi">test api</button>
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
            perso:undefined,
            persos:undefined,
            urlapi:'https://api-saoars.herokuapp.com/perso'
        }
    },
    methods:{
        callapi:function() {
            axios
            .get(`${this.urlapi}/45`)
            .then(reponse => {    
                this.perso = reponse.data; 
                console.log(this.perso);
            })
        }
    },
    mounted(){
        axios
        .get(`${this.urlapi}`)
        .then(reponse => {
            //this.persos = reponse.data;
            console.log(reponse.data.Personage);
        })
    }

    
}
</script>
<style src="./Personages.css" scoped></style>