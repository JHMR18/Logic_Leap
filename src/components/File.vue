<template>
    <div class="file-container">
        <div class="file">
            <v-icon icon="mdi-folder" style="font-size: 100px; color: navajowhite;"/>
            <p class="file-name" style="color: navajowhite; padding-bottom: 10px;">filename</p>
        </div>
    </div>
</template>

<style scoped>
.file {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.file-container {
    margin: 20px;
    display: flex;
    width: 200px;
    background-color: rgb(46, 47, 68);;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
</style>