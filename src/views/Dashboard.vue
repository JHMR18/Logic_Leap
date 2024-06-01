<script setup>
import File from '../components/File.vue'
</script>
<template>
    <div class="top">
        <p style="color: navajowhite; margin: 20px;">Jhomer Opulencia</p>
        <input  class="search" type="text" placeholder="Search ..."> 
        <p style="color: navajowhite; margin: 20px;">Account <span>  <v-icon style="display: inline-block ; margin-top: -8px;" icon="mdi-account" /></span></p>
    </div>
    <div class="container">
        <div class="control-bar">
            <div class="header">
                <h3 style="color: navajowhite; margin: 20px;">Manage Documents</h3>
            </div>
            <div class="operations" style="display: flex; margin-right: 20px">
                <div class="create-folder" style="background-color: rgb(24, 24, 38); padding: 5px; border-radius: 5px;">
                <button style="color: navajowhite;">+ Create Folder</button>
            </div>
            <div class="create-new-file" style="background-color: rgb(24, 24, 38); padding: 5px; border-radius: 5px; margin-left: 10px;">
                <button style="color: navajowhite;">+ Add New File</button>
            </div>
            </div>
        </div>
        <div class="file-container" style="width: 1500px; margin-top: 10px; display: flex; flex-direction: row; flex-wrap: wrap;">
            <File />
            <File />
            <File />
            <File />
            <File />
            <File />
            <File />
            <File />
            <File />
            <File />
            <File />
        </div>
    </div>
</template>

<style scoped>
.control-bar {
    display: flex;
    margin-top: 70px;
    align-items: center;
    margin: 10px;
    background-color: rgb(46, 47, 68);
    width: 1000px;
    height: 45px;
    border-radius: 5px;
    justify-content: space-between;
}
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.top {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
}
.search {
    background-color: rgb(46, 47, 68);
    width: 200px;
    font-size: 10px;
    height: 25px;
    border-radius: 5px;
    color: white;
    padding: 5px;
    width: 300px;
}
::placeholder{
    color: white;
    padding: 5px;
}
</style>