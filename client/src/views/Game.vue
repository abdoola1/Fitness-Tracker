<template>
<div>
    <h1 class="is-size-1">
        This is the Game Page
    </h1> 

    <div class="columns">
        <div class="column is-one-quarter">
            
            <ul class="panel">
                <p class="panel-heading">
                    USERS
                </p>
                <li v-for="(p, i) in game.Players " :key="i" 
                    class="panel-block" :class="{ 'is-active': i == game.Dealer, 'has-text-primary': i == me.User_Id }">
                    <span class="panel-icon">
                    <i class="fas" :class=" i == game.Dealer ? 'fa-user-secret' : 'fa-user' " aria-hidden="true"></i>
                    </span>
                    {{p.name}}
                </li>
            </ul>

            <ul class="panel" style="height: 220px; overflow: auto">
                <p class="panel-heading">
                    EXERCISES
                </p>
                <li v-for="(c, i) in My_Captions " :key="i" 
                    class="panel-block is-active"
                    @click="submitCaption(c ,i)">
                    {{c}}
                </li>
            </ul>

        </div>
        <div class="column">        
            <div class="box is-clickable" @click="pictureClicked">
                <img    alt="Current Picture in Play" class="image is-fullwidth"
                        :src="game.Picture_In_Play" v-if="game.Picture_In_Play"  />
                <div class="notification is-primary" v-else>
                    Random exercise
                </div>
                <div>
                    <button v-on:click ="caloriesburnt += 250/*randcal*/">complete random excercise</button>
                    <p> so far you have burnt {{caloriesburnt}}</p>
                </div>
            </div>

            <ul class="panel">
                <p class="panel-heading">
                    Calculated calories
                </p>
                <li v-for="(c, i) in game.Captions_In_Play " :key="i" class="panel-block is-active" :class="{'has-background-warning': i == game.Caption_Chosen }">
                    <div class="is-expanded">{{c.text}}</div>
                    <span class="tag " :class=" game.Caption_Chosen > -1 ? 'is-primary' : 'is-light'">{{c.player}}</span>
                    <button class="button is-small is-primary"
                            @click.prevent="chooseCaption(i)" 
                            v-show="me.User_Id == game.Dealer && game.Caption_Chosen == -1"
                            :disabled="game.Captions_In_Play.length < game.Players.length - 1"  >
                            Choose
                    </button>
                </li>
            </ul>

        </div>
    </div>

</div>
</template>

<script>
import { Game_Server } from "../models/Game";


export default {
    data: ()=> ({
        game: {},
        My_Captions: [],
        me: Game_Server.User,
        caloriesburnt: 0

    }),
    async created(){
        this.My_Captions = await Game_Server.Get_Hand();
        setInterval( async ()=> this.game = await Game_Server.Get_State(), 2000 )
        
    },
    methods: {
        pictureClicked(){
            Game_Server.Flip_Picture();
        },
        async submitCaption(caption, i){
            const response = await Game_Server.Submit_Caption(caption);
        
        },
        async chooseCaption(i){
            const response = await Game_Server.Choose_Caption(i);
        }
    }
}
</script>

<style>
    .is-clickable {
        cursor: pointer;
    }
    .is-expanded {
        flex-grow: 1;
    }
</style>