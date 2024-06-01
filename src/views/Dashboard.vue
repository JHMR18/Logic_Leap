<template>
    <div class="top">
        <p style="color: navajowhite; margin: 20px;">Jhomer Opulencia</p>
        <input  class="search" type="text" placeholder="Search ..."> 
        <p style="color: navajowhite; margin: 20px;">Account <span>  <v-icon style="display: inline-block ; margin-top: -8px;" icon="mdi-account" /></span></p>
    </div>
    <div class="container">
        <div class="control-bar">
            <div class="header">
                <h3 style="color: navajowhite;">Manage Documents</h3>
            </div>
            <div class="create-folder">
                <button>+ Create Folder</button>
            </div>
            <div class="create-new-file">
                <button>+ Add New File</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.control-bar {
    display: flex;
    background-color: rgb(46, 47, 68);;
    height: 50px;
    width: 1000px;
    margin-top: 30px;
    align-items: center;
}
.container {
    display: flex;
    justify-content: center;
}
.top {

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