<template>
    <div class="wrapper1">
        <div class="main_content">
            <div class="info">
                <div class="new_porso_box">
                    <div class="new_porso_box_pop_up_new">
                        <table>
                            <tbody>
                                <tr>
                                    <td class="new_porso_box_pop_up_new_img">
                                        <img src="../../assets/new.png" alt="" srcset="">
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="new_porso_box_img">
                        <img src="../../assets/character_152.png" alt="" class="new_porso_box_img_1">
                    </div>
                    <div class="new_porso_box_buttum">
                        <a href="btn-floating blue darken-1 pulse anim_bouton2">
                            <img src="../../assets/valide.png" alt="" srcset="" class="icon-footer">
                        </a>
                        <a href="btn-floating red darken-1 pulse anim_bouton2">
                            <img src="../../assets/cancel.png" alt="" srcset="" class="icon-footer">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    name: 'Home',
    data(){
        return{
            imgNew:"./assets/new.png",
            urlapi:'https://api-saoars.herokuapp.com/',
        }
    },
    mounted(){
        axios
        .get(`${this.urlapi}`)
        .then(reponse => {
            console.log(reponse.data.message);
        })
    }
    
}
</script>
<style src="./Home.css" scoped></style>