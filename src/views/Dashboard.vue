<template>
    <div class="top">
        <h4>Jhomer Opulencia</h4>
        <input class="search" type="text" placeholder="Search ..."> 
        <p>Account <span>  <v-icon style="background-color: ;" icon="mdi-account" /></span></p>
    </div>
</template>

<style scoped>
.top {
    background-color: aliceblue;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
}
.search {
    margin-left: 10px;
    background-color: rgb(238, 238, 238);
    border-radius: 40px;
    font-size: 12px;
}
</style>