<template>
    <div class="w-full h-full flex flex-col text-default">
        <div class="w-full bg-gray4 rounded-xl text-white flex items-center justify-between p-3">
            <div class="flex items-center space-x-2">
                <base-icon icon="garage" size="40"></base-icon>
                <h1 class="text-3xl font-medium">Showroom</h1>
            </div>
            <button class="register-btn font-medium text-lg rounded-full">
                <base-icon icon="app-register" size="24"></base-icon>
                Register Showroom
            </button>
        </div>

        <div class="w-full h-full bg-gray3 overflow-y-auto grid grid-cols-4 gap-5 mt-5 rounded-xl p-5">
            <div class="card bg-gray5 rounded-lg p-4" v-for="i in 5" :key="i">
                <img src="img/cars/BMW-M8.jpg" alt="" class="rounded-xl">
                <h1 class="mt-2 text-xl font-medium">Showroom's Name</h1>
                <h2>Province: Bangkok</h2>
                <h3>Number of cars: 8 cars</h3>
                <h4>Sold: 5 cars</h4>
                <div class="w-full flex justify-between items-center">
                    <h2>Rating :</h2>
                    <div class="flex items-center space-x-1">
                        <base-icon icon="star" size="12" class="text-primary"></base-icon>
                        <base-icon icon="star" size="12" class="text-primary"></base-icon>
                        <base-icon icon="star" size="12" class="text-primary"></base-icon>
                        <base-icon icon="star" size="12" class="text-primary"></base-icon>
                        <base-icon icon="star-half" size="12" class="text-primary"></base-icon>
                        (12)
                    </div>
                </div>
                <div class="w-full mt-3 flex justify-between">
                    <div class="flex items-center space-x-2">
                        <div class="h-3 w-3 rounded-full bg-success" :class="{'bg-close':!is_open}"></div>
                        <p v-show="is_open">Open</p>
                        <p v-show="!is_open">Closed</p>
                    </div>
                    <div class="flex items-center space-x-1">
                        <base-icon icon="visibility" size="24" class="text-primary"></base-icon>
                        <p>10.7 K</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            is_open: true
        }
    }
}
</script>
<style scoped>
.register-btn {
    background: var(--green);
    color: #f5f5f7;
    box-sizing: border-box;
    padding: 3px 9px;
    border: solid 3px var(--green);
    transition: all .2s;
}

.register-btn:hover {
    background: none;
    color: #f5f5f7;
    border: solid 3px var(--green);
    transform: scale(1.02);
}
</style>