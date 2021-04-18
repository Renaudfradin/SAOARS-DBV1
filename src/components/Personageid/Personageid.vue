<template>
    <div class="wrapper1">
        <div class="main_content">
            <div class="info">
                <div>
                    <div class="box_personage">
                        <div class="box_info_title">
                            <div class="box_title">
                                <p>{{ perso.name }}</p>
                                <p>{{ perso.description }}</p>
                            </div>
                            <div class="box_img">
                                <img src="../../assets/character_92.png" alt="" srcset="" class="box_img_img">
                            </div>
                            <div class="box_arme">
                                <img src="../../assets/stuff_177.png" alt="" class="box_arme_img">
                                <div class="box_arme_title">
                                    <p>Arme 1</p>
                                </div>
                            </div>
                        </div>
                        <div class="box_atk">
                            <div class="box_atk1">
                                <div class="box_atk1_img_atk">
                                    <div class="box_atk1_img">
                                        <div v-if="perso.typeattack1 == 'B'" class="perso_atk_img_div">
                                            <img class="perso_atk_img" src="../../assets/skills_b.png" alt="" srcset="">
                                        </div>
                                        <div v-else-if="perso.typeattack1 == 'E'" class="perso_atk_img_div">
                                            <img class="perso_atk_img" src="../../assets/skills_e.png" alt="" srcset="">
                                        </div>
                                        <div v-else-if="perso.typeattack1 == 'H'" class="perso_atk_img_div">
                                            <img class="perso_atk_img" src="../../assets/skills_h.png" alt="" srcset="">
                                        </div>
                                        <div v-else-if="perso.typeattack1 == 'EM'" class="perso_atk_img_div">
                                            <img class="perso_atk_img" src="../../assets/skills_em.png" alt="" srcset="">
                                        </div>
                                        <div v-else-if="perso.typeattack1 == 'A'" class="perso_atk_img_div">
                                            <img class="perso_atk_img" src="../../assets/skills_a.png" alt="" srcset="">
                                        </div>
                                        <div v-else-if="perso.typeattack1 == 'C'" class="perso_atk_img_div">
                                            <img class="perso_atk_img" src="../../assets/skills_fc.png" alt="" srcset="">
                                        </div>
                                        <div v-else>
                                            <p></p>
                                        </div>
                                    </div>
                                    <div class="box_atk1_name_description">
                                        <div class="box_atk1_name">
                                            <p class="box_atk1_name_p">{{ perso.attack1 }}</p>
                                        </div>
                                        <div class="box_atk1_description">
                                            <p>{{ perso.descriptionattack1 }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="box_atk1_mp">
                                    <p>{{ perso.mpattack1 }} MP</p>
                                </div>
                            </div>

                            <div class="box_atk1">
                                <div class="box_atk1_img_atk">
                                    <div class="box_atk1_img">
                                        <div v-if="perso.typeattack2 == 'B'" class="perso_atk_img_div">
                                            <img class="perso_atk_img" src="../../assets/skills_b.png" alt="" srcset="">
                                        </div>
                                        <div v-else-if="perso.typeattack2 == 'E'" class="perso_atk_img_div">
                                            <img class="perso_atk_img" src="../../assets/skills_e.png" alt="" srcset="">
                                        </div>
                                        <div v-else-if="perso.typeattack2 == 'H'" class="perso_atk_img_div">
                                            <img class="perso_atk_img" src="../../assets/skills_h.png" alt="" srcset="">
                                        </div>
                                        <div v-else-if="perso.typeattack2 == 'EM'" class="perso_atk_img_div">
                                            <img class="perso_atk_img" src="../../assets/skills_em.png" alt="" srcset="">
                                        </div>
                                        <div v-else-if="perso.typeattack2 == 'A'" class="perso_atk_img_div">
                                            <img class="perso_atk_img" src="../../assets/skills_a.png" alt="" srcset="">
                                        </div>
                                        <div v-else-if="perso.typeattack2 == 'C'" class="perso_atk_img_div">
                                            <img class="perso_atk_img" src="../../assets/skills_fc.png" alt="" srcset="">
                                        </div>
                                        <div v-else>
                                            <p></p>
                                        </div>
                                    </div>
                                    <div class="box_atk1_name_description">
                                        <div class="box_atk1_name">
                                            <p class="box_atk1_name_p">{{ perso.attack2 }}</p>
                                        </div>
                                        <div class="box_atk1_description">
                                            <p>{{ perso.descriptionattack2 }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="box_atk1_mp">
                                    <p>{{ perso.mpattack2 }} MP</p>
                                </div>
                            </div>
                                <div class="box_atk1" v-if="perso.typeattack3 != 'NULL'">
                                    <div class="box_atk1_img_atk">
                                        <div class="box_atk1_img">
                                            <div v-if="perso.typeattack3 == 'B'" class="perso_atk_img_div">
                                                <img class="perso_atk_img" src="../../assets/skills_b.png" alt="" srcset="">
                                            </div>
                                            <div v-else-if="perso.typeattack3 == 'E'" class="perso_atk_img_div">
                                                <img class="perso_atk_img" src="../../assets/skills_e.png" alt="" srcset="">
                                            </div>
                                            <div v-else-if="perso.typeattack3 == 'H'" class="perso_atk_img_div">
                                                <img class="perso_atk_img" src="../../assets/skills_h.png" alt="" srcset="">
                                            </div>
                                            <div v-else-if="perso.typeattack3 == 'EM'" class="perso_atk_img_div">
                                                <img class="perso_atk_img" src="../../assets/skills_em.png" alt="" srcset="">
                                            </div>
                                            <div v-else-if="perso.typeattack3 == 'A'" class="perso_atk_img_div">
                                                <img class="perso_atk_img" src="../../assets/skills_a.png" alt="" srcset="">
                                            </div>
                                            <div v-else-if="perso.typeattack3 == 'C'" class="perso_atk_img_div">
                                                <img class="perso_atk_img" src="../../assets/skills_fc.png" alt="" srcset="">
                                            </div>
                                            <div v-else>
                                                <p></p>
                                            </div>
                                        </div>
                                        <div class="box_atk1_name_description">
                                            <div class="box_atk1_name">
                                                <p class="box_atk1_name_p">{{ perso.attack3 }}</p>
                                            </div>
                                            <div class="box_atk1_description">
                                                <p>{{ perso.descriptionattack3 }}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="box_atk1_mp">
                                        <p>{{ perso.mpattack3 }} MP</p>
                                    </div>
                                </div>
                                <div v-else>

                                </div>

                                <div class="box_atk1">
                                    <div class="box_atk1_img_atk">
                                        <div class="box_atk1_img">
                                            <div  class="perso_atk_img_div">
                                                <img class="perso_atk_img" src="../../assets/skills_i.png" alt="" srcset="">
                                            </div>
                                        </div>
                                        <div class="box_atk1_name_description">
                                            <div class="box_atk1_name">
                                                <p class="box_atk1_name_p">{{ perso.ultime }}</p>
                                            </div>
                                            <div class="box_atk1_description">
                                                <p>{{ perso.descriptionultime }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
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