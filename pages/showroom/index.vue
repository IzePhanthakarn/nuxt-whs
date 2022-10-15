<template>
    <div class="w-full h-full flex flex-col text-default">
        <div class="w-full bg-gray4 rounded-xl flex items-center justify-between p-3">
            <div class="flex items-center text-white space-x-2">
                <base-icon icon="garage" size="40"></base-icon>
                <h1 class="text-3xl font-medium">Showroom</h1>
            </div>
            <button class="register-btn font-medium text-lg rounded-full">
                <base-icon icon="app-register" size="24"></base-icon>
                Register Showroom
            </button>
        </div>

        <div class="w-full bg-gray3 mt-5 rounded-t-xl flex justify-end space-x-3 px-5 py-3 text-default">
            <div @click="toggle(false)"
                class="bg-view h-8 w-8 rounded-lg flex items-center justify-center cursor-pointer"
                :class="{'active':!is_list}">
                <base-icon icon="apps" size="23"></base-icon>
            </div>
            <div @click="toggle(true)"
                class="bg-view h-8 w-8 rounded-lg flex items-center justify-center cursor-pointer"
                :class="{'active':is_list}">
                <base-icon icon="list-ul" size="23"></base-icon>
            </div>
        </div>

        <div class="w-full h-full bg-gray3 overflow-y-auto grid grid-cols-4 gap-5 px-5">
            <div class="card bg-gray5 rounded-lg p-4 flex col-span-4 space-x-5" v-for="i in 5" :key="i"
                :class="{'col-span-1 flex-col space-x-0':!is_list}">
                <img src="img/cars/BMW-M8.jpg" alt="" class="rounded-xl w-full" :class="{'w-1/2':is_list}">
                <div class="w-full h-full flex flex-col justify-between">
                    <div class="w-full h-full flex flex-col justify-around">
                        <div class="mt-0 text-3xl font-medium" :class="{'mt-2 text-xl':!is_list}">
                            Showroom's Name
                        </div>
                        <div class="text-base flex justify-between" :class="{'text-xl':is_list}">
                            <p> Owner: </p>
                            <span class="highlight">Phanthakarn Khumphai</span>
                        </div>
                        <div class="text-base flex justify-between" :class="{'text-xl':is_list}">
                            <p>Province:</p>
                            <p>Bangkok</p>
                        </div>
                        <div class="text-base flex justify-between" :class="{'text-xl':is_list}">
                            <p>Number of cars:</p>
                            <p>8 cars</p>
                        </div>
                        <div class="text-base flex justify-between" :class="{'text-xl':is_list}">
                            <p>Sold:</p>
                            <p>5 cars</p>
                        </div>
                        <div v-show="is_list" class="text-base flex justify-between" :class="{'text-xl':is_list}">
                            <p>Business days:</p>
                            <p>Monday - Saturday</p>
                        </div>
                        <div v-show="is_list" class="text-base flex justify-between" :class="{'text-xl':is_list}">
                            <p>Business hours:</p>
                            <p>9.00 - 18.00</p>
                        </div>
                        <div class="w-full flex justify-between items-center" :class="{'hidden':is_list}">
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
                        <div class="w-full flex justify-between items-center text-xl" :class="{'hidden':!is_list}">
                            <h2>Rating :</h2>
                            <div class="flex items-center space-x-1">
                                <base-icon icon="star" size="24" class="text-primary"></base-icon>
                                <base-icon icon="star" size="24" class="text-primary"></base-icon>
                                <base-icon icon="star" size="24" class="text-primary"></base-icon>
                                <base-icon icon="star" size="24" class="text-primary"></base-icon>
                                <base-icon icon="star-half" size="24" class="text-primary"></base-icon>
                                (12)
                            </div>
                        </div>
                    </div>
                    <div class="w-full mt-3 flex justify-between text-base" :class="{'text-xl':is_list}">
                        <div class="flex items-center space-x-2">
                            <div class="h-3 w-3 rounded-full bg-success" :class="{'bg-close':!is_open}"></div>
                            <p v-show="is_open">Open</p>
                            <p v-show="!is_open">Closed</p>
                        </div>
                        <div class="flex items-center space-x-1">
                            <base-icon v-show="!is_list" icon="visibility" size="24" class="text-primary"></base-icon>
                            <base-icon v-show="is_list" icon="visibility" size="36" class="text-primary"></base-icon>
                            <p>10.7 K</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="bg-gray3 p-2.5 rounded-b-xl"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            is_open: true,
            is_list: true
        }
    },
    methods: {
        toggle(value) {
            this.is_list = value
        }
    },
}
</script>
<style scoped>
.register-btn {
    background: var(--teal);
    color: #f5f5f7;
    box-sizing: border-box;
    padding: 3px 9px;
    border: solid 3px var(--teal);
    transition: all .2s;
}

.register-btn:hover {
    background: none;
    border: solid 3px var(--teal);
    transform: scale(1.02);
}

.register-btn svg {
    transition: all .2s;
}

.register-btn:hover svg {
    color: var(--teal);
}

.bg-view {
    transition: all .2s;
}

.bg-view:hover {
    background: #a2a2a2;
}

.active {
    background: #555555;
    color: #f5f5f7;
}

.highlight:hover {
    color: var(--pink);
    text-decoration: underline;
    text-underline-offset: 2px;
}
</style>