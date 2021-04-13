<template>
    <div class="wrapper1">
        <div class="main_content">
            <div class="info">
                <h1>home page</h1>
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
                        <img src="../../assets/character_152.png" alt="" srcset="" style="height: 315px">
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
export default {
    name: 'Home',
    data(){
        return{
            imgNew:"./assets/new.png",
        }
    }
    
}
</script>
<style src="./Home.css" scoped></style>