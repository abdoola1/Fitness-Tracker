<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <router-link style="color:#ffcc00" exact-active-class="active" class="navbar-item" to="/">
            <i class="fas fa-home fa-pull-left"></i>
            Home
        </router-link>

        <a @click.prevent="isOpen = !isOpen" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active' : isOpen }">
        <div class="navbar-start">

        <router-link style="color:#ffcc00" cexact-active-class="active" class="navbar-item" to="/calorie">
            <i class="fab fa-sith fa-pull-left"></i>
            calorie calculator
        </router-link>

        <router-link style="color:#ffcc00" exact-active-class="active" class="navbar-item" to="/game">
            <i class="fas fa-ghost fa-pull-left"></i>
            Game
        </router-link>

        <div class="navbar-item has-dropdown is-hoverable">
            <a style="color:#ffcc00" class="navbar-link" active-class="kind-of-active">
            Calorie Calculator
            </a>

            <div class="navbar-dropdown">
                <router-link style="color:#ffcc00" class="navbar-item" to="/burnt" exact-active-class="active">
                    <i class="fab fa-vuejs fa-pull-left"></i>
                    How much burnt
                </router-link>
                <router-link style="color:#ffcc00" class="navbar-item" to="/time" exact-active-class="active">
                    <i class="fab fa-vuejs fa-pull-left"></i>
                    Minutes Needed
                </router-link>
                
            <a style="color:#ffcc00" class="navbar-item" to=/time exact-active-class="active">
                Minutes needed
            </a>

            </div>
        </div>
        </div>

        <div class="navbar-end">
        <div class="navbar-item">
            <div class="buttons">
            <a class="button is-primary">
                <strong>Sign up</strong>
            </a>
            <a class="button is-light">
                Log in
            </a>
            </div>
        </div>
        </div>
    </div>
    </nav>
</template>

<script>
export default {
    data(){
        return {
            isOpen: false
        }
    }
}
</script>

<style>
    .active {
        background-color: rgb(253, 253, 253);
        font-weight: bold;
    }
    .kind-of-active {
        background-color: rgb(213, 216, 9);
        font-weight: 100;
    }
</style>