<template>
    <div class="sidebar">
        <base-icon icon="warehouse"></base-icon>
    </div>
</template>

<script>
export default{
    data(){
        return{
            
        }
    }
}
</script>

<style scoped>
.sidebar{
    min-height: calc(100vh - 64px);
    width: 72px;
    transition: all .3s;
}
.sidebar.active{
    width: 240px;
}
</style>