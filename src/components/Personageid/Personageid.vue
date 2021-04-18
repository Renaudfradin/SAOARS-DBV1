<template>
    <div class="wrapper1">
        <div class="main_content">
            <div class="info">
                <div>
                    <div></div>
                    <div>
                        <div class="box_atk1">
                            <div></div>
                            <div class="box_atk1_mp">
                                <p></p>
                            </div>
                        </div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div>
                    <div class="box_stat">
                        <table class="table_box_stat">
                            <tr class="box_stat_ligne">
                                <td class="box_stat_title">HP</td>
                                <td class="box_stat_value">{{ perso.hp }}</td>
                            </tr>
                            <tr>
                                <td class="box_stat_hp"></td>
                            </tr>
                            <tr class="box_stat_ligne">
                                <td class="box_stat_title">MP</td>
                                <td class="box_stat_value">{{ perso.mp }}</td>
                            </tr>
                            <tr>
                                <td class="box_stat_mp"></td>
                            </tr>
                            <tr class="box_stat_ligne">
                                <td class="box_stat_title">ATK</td>
                                <td class="box_stat_value">{{ perso.atk }}</td>
                            </tr>
                            <tr>
                                <td class="box_stat_atk"></td>
                            </tr>
                            <tr class="box_stat_ligne">
                                <td class="box_stat_title">MATK</td>
                                <td class="box_stat_value">{{ perso.matk }}</td>
                            </tr>
                            <tr>
                                <td class="box_stat_matk"></td>
                            </tr>
                            <tr class="box_stat_ligne">
                                <td class="box_stat_title">DEF</td>
                                <td class="box_stat_value">{{ perso.def }}</td>
                            </tr>
                            <tr>
                                <td class="box_stat_def"></td>
                            </tr>
                            <tr class="box_stat_ligne">
                                <td class="box_stat_title">MDEF</td>
                                <td class="box_stat_value">{{ perso.mdef }}</td>
                            </tr>
                            <tr>
                                <td class="box_stat_mdef"></td>
                            </tr>
                            <tr class="box_stat_ligne">
                                <td class="box_stat_title">CRIT</td>
                                <td class="box_stat_value">{{ perso.crit }}</td>
                            </tr>
                            <tr>
                                <td class="box_stat_crit"></td>
                            </tr>
                            <tr class="box_stat_ligne">
                                <td class="box_stat_title">SPD</td>
                                <td class="box_stat_value">{{ perso.spd }}</td>
                            </tr>
                            <tr>
                                <td class="box_stat_spd"></td>
                            </tr>
                        </table>
                        <div class="histoire">
                            <p class="histoire_perso">{{ perso.description1 }}</p>
                        </div>
                    </div>
                </div>
                
                    <p>{{ perso.typeattack1 }}</p>
                    <p>{{ perso.typeattack2 }}</p>
                    <p>{{ perso.typeattack3 }}</p>
                <h1>personage id</h1>
                <p>test</p>
                <p>{{ perso.id }}</p>
                <p>{{ perso.name }}</p>
                <p>{{ perso.description }}</p>
                
                <p>{{ perso.attack1 }}</p>
                <p>{{ perso.descriptionattack1 }}</p>
                <p>{{ perso.mpattack1 }}</p>
                <p>{{ perso.attack2 }}</p>
                <p>{{ perso.descriptionattack2 }}</p>
                <p>{{ perso.mpattack2 }}</p>
                <p>{{ perso.attack3 }}</p>
                <p>{{ perso.descriptionattack3 }}</p>
                <p>{{ perso.mpattack3 }}</p>
                
                <p>{{ perso.ultime }}</p>
                <p>{{ perso.descriptionultime }}</p>
                
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