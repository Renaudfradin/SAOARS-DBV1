<template>
    <div class="wrapper">
                <div class="sidebar">
                    <h2>SAOARS DB</h2>
                    <ul>
                        <li><router-link to="/"><img class="sidebar_img" src="../../assets/nav_main.png" alt=""><p class="sidebar_p">Home</p></router-link></li>
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
    name:'HeaderNav'
}
</script>
<style src="./HeaderNav.css" scoped></style>