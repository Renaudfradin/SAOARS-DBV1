import Home from './components/Home/Home.vue'
import Personages from './components/Personages/Personages.vue'
import Arme from './components/Arme/Arme.vue'
import Objet from './components/Objet/Objet.vue'
import Scoot from './components/Scoot/Scoot.vue'
import Equipement from './components/Equipement/Equipement.vue'
import Personageid from './components/Personageid/Personageid.vue'

export default [
    {path: '*' , component:Home},
    {path: '/' , component: Home},
    {path: '/Home' , component: Home},
    {path: '/Personages' ,component: Personages},
    {path: '/Arme' ,component: Arme},
    {path: '/Objet' ,component: Objet},
    {path: '/Scoot' ,component: Scoot},
    {path: '/Equipement' ,component: Equipement},
    {path: '/Personage/:id(\\d+)', name:'personageid' ,component:Personageid , props: () =>({query: "test"}) }
]