<template>
    <div class="wrapper1">
        <div class="main_content">
            <div class="info">
                <div class="search_perso">
                    <input type="text" @keyup="searchperso" v-model="queryperso" placeholder="rechecher un personage" class="search_perso_input">
                </div>
                <div v-if="perso.length == 0">
                    <div class="perso_list">
                        <div v-for="persoss in persos" :key="persoss.id" class="perso_card">
                            <div class="perso_avatar">
                                <div class="perso_link">
                                    <router-link :to="{ name: 'personageid' , params: { id:persoss.id }}"><img src="../../assets/character_149.png" alt="" class="perso_img"></router-link>
                                </div>
                                <div class="perso_atk">
                                    <div v-if="persoss.typeattack1 == 'B'">
                                        <img class="perso_atk_img" src="../../assets/skills_b.png" alt="" srcset="">
                                    </div>
                                    <div v-else-if="persoss.typeattack1 == 'E'">
                                        <img class="perso_atk_img" src="../../assets/skills_e.png" alt="" srcset="">
                                    </div>
                                    <div v-else-if="persoss.typeattack1 == 'H'">
                                        <img class="perso_atk_img" src="../../assets/skills_h.png" alt="" srcset="">
                                    </div>
                                    <div v-else-if="persoss.typeattack1 == 'EM'">
                                        <img class="perso_atk_img" src="../../assets/skills_em.png" alt="" srcset="">
                                    </div>
                                    <div v-else-if="persoss.typeattack1 == 'A'">
                                        <img class="perso_atk_img" src="../../assets/skills_a.png" alt="" srcset="">
                                    </div>
                                    <div v-else-if="persoss.typeattack1 == 'C'">
                                        <img class="perso_atk_img" src="../../assets/skills_fc.png" alt="" srcset="">
                                    </div>
                                    <div v-else>
                                        <p></p>
                                    </div>

                                    <div v-if="persoss.typeattack2 == 'B'">
                                        <img class="perso_atk_img" src="../../assets/skills_b.png" alt="" srcset="">
                                    </div>
                                    <div v-else-if="persoss.typeattack2 == 'E'">
                                        <img class="perso_atk_img" src="../../assets/skills_e.png" alt="" srcset="">
                                    </div>
                                    <div v-else-if="persoss.typeattack2 == 'H'">
                                        <img class="perso_atk_img" src="../../assets/skills_h.png" alt="" srcset="">
                                    </div>
                                    <div v-else-if="persoss.typeattack2 == 'EM'">
                                        <img class="perso_atk_img" src="../../assets/skills_em.png" alt="" srcset="">
                                    </div>
                                    <div v-else-if="persoss.typeattack2 == 'A'">
                                        <img class="perso_atk_img" src="../../assets/skills_a.png" alt="" srcset="">
                                    </div>
                                    <div v-else-if="persoss.typeattack2 == 'C'">
                                        <img class="perso_atk_img" src="../../assets/skills_fc.png" alt="" srcset="">
                                    </div>
                                    <div v-else>
                                        <p></p>
                                    </div>

                                    <div v-if="persoss.typeattack3 == 'B'">
                                        <img class="perso_atk_img" src="../../assets/skills_b.png" alt="" srcset="">
                                    </div>
                                    <div v-else-if="persoss.typeattack3 == 'E'">
                                        <img class="perso_atk_img" src="../../assets/skills_e.png" alt="" srcset="">
                                    </div>
                                    <div v-else-if="persoss.typeattack3 == 'H'">
                                        <img class="perso_atk_img" src="../../assets/skills_h.png" alt="" srcset="">
                                    </div>
                                    <div v-else-if="persoss.typeattack3 == 'EM'">
                                        <img class="perso_atk_img" src="../../assets/skills_em.png" alt="" srcset="">
                                    </div>
                                    <div v-else-if="persoss.typeattack3 == 'A'">
                                        <img class="perso_atk_img" src="../../assets/skills_a.png" alt="" srcset="">
                                    </div>
                                    <div v-else-if="persoss.typeattack3 == 'C'">
                                        <img class="perso_atk_img" src="../../assets/skills_fc.png" alt="" srcset="">
                                    </div>
                                    <div v-else>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                            <div class="perso_info">
                                <p class="perso_info_name">{{persoss.name}}</p>
                                <p class="perso_info_description">{{persoss.description}}</p>
                            </div>
                        </div>
                    </div>
                </div> 
                <div v-else>
                    <div class="perso_list">
                        <div v-for="persosss in perso" :key="persosss.id" class="perso_card">
                            <div class="perso_avatar">
                                <div class="perso_link">
                                    <router-link :to="{ name: 'personageid' , params: { id:persosss.id }}"><img src="../../assets/character_149.png" alt="" class="perso_img"></router-link>
                                </div>
                                <div class="perso_atk">
                                    <div v-if="persosss.typeattack1 == 'B'">
                                        <img class="perso_atk_img" src="../../assets/skills_b.png" alt="" srcset="">
                                    </div>
                                    <div v-else-if="persosss.typeattack1 == 'E'">
                                        <img class="perso_atk_img" src="../../assets/skills_e.png" alt="" srcset="">
                                    </div>
                                    <div v-else-if="persosss.typeattack1 == 'H'">
                                        <img class="perso_atk_img" src="../../assets/skills_h.png" alt="" srcset="">
                                    </div>
                                    <div v-else-if="persosss.typeattack1 == 'EM'">
                                        <img class="perso_atk_img" src="../../assets/skills_em.png" alt="" srcset="">
                                    </div>
                                    <div v-else-if="persosss.typeattack1 == 'A'">
                                        <img class="perso_atk_img" src="../../assets/skills_a.png" alt="" srcset="">
                                    </div>
                                    <div v-else-if="persosss.typeattack1 == 'C'">
                                        <img class="perso_atk_img" src="../../assets/skills_fc.png" alt="" srcset="">
                                    </div>
                                    <div v-else>
                                        <p></p>
                                    </div>

                                    <div v-if="persosss.typeattack2 == 'B'">
                                        <img class="perso_atk_img" src="../../assets/skills_b.png" alt="" srcset="">
                                    </div>
                                    <div v-else-if="persosss.typeattack2 == 'E'">
                                        <img class="perso_atk_img" src="../../assets/skills_e.png" alt="" srcset="">
                                    </div>
                                    <div v-else-if="persosss.typeattack2 == 'H'">
                                        <img class="perso_atk_img" src="../../assets/skills_h.png" alt="" srcset="">
                                    </div>
                                    <div v-else-if="persosss.typeattack2 == 'EM'">
                                        <img class="perso_atk_img" src="../../assets/skills_em.png" alt="" srcset="">
                                    </div>
                                    <div v-else-if="persosss.typeattack2 == 'A'">
                                        <img class="perso_atk_img" src="../../assets/skills_a.png" alt="" srcset="">
                                    </div>
                                    <div v-else-if="persosss.typeattack2 == 'C'">
                                        <img class="perso_atk_img" src="../../assets/skills_fc.png" alt="" srcset="">
                                    </div>
                                    <div v-else>
                                        <p></p>
                                    </div>

                                    <div v-if="persosss.typeattack3 == 'B'">
                                        <img class="perso_atk_img" src="../../assets/skills_b.png" alt="" srcset="">
                                    </div>
                                    <div v-else-if="persosss.typeattack3 == 'E'">
                                        <img class="perso_atk_img" src="../../assets/skills_e.png" alt="" srcset="">
                                    </div>
                                    <div v-else-if="persosss.typeattack3 == 'H'">
                                        <img class="perso_atk_img" src="../../assets/skills_h.png" alt="" srcset="">
                                    </div>
                                    <div v-else-if="persosss.typeattack3 == 'EM'">
                                        <img class="perso_atk_img" src="../../assets/skills_em.png" alt="" srcset="">
                                    </div>
                                    <div v-else-if="persosss.typeattack3 == 'A'">
                                        <img class="perso_atk_img" src="../../assets/skills_a.png" alt="" srcset="">
                                    </div>
                                    <div v-else-if="persosss.typeattack3 == 'C'">
                                        <img class="perso_atk_img" src="../../assets/skills_fc.png" alt="" srcset="">
                                    </div>
                                    <div v-else>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                            <div class="perso_info">
                                <p class="perso_info_name">{{persosss.name}}</p>
                                <p class="perso_info_description">{{persosss.description}}</p>
                            </div>
                        </div>
                    </div>
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
            queryperso: '',
        }
    },
    methods:{
        searchperso(){
            axios
            .get(`${this.urlapi}/p/${this.queryperso}`)
            .then(reponse => {
                this.perso = reponse.data.Personage;
                //console.log(this.perso);
            })
            .catch(this.persos)
        }
    },
    mounted(){
        axios
        .get(`${this.urlapi}`)
        .then(reponse => {
            this.persos = reponse.data.Personage;
            //console.log(this.persos);
        })
    }

    
}
</script>
<style src="./Personages.css" scoped></style>