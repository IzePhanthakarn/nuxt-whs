<template>
    <div class="w-full h-full flex flex-col text-default">
        <div class="w-full bg-gray4 rounded-xl text-white flex items-center p-3 space-x-2">
            <base-icon icon="car-sideview" size="40"></base-icon>
            <h1 class="text-3xl font-medium">All Cars</h1>
        </div>
        <div class="w-full overflow-y-auto grid grid-cols-4 gap-5 mt-5 rounded-xl">
            <!-- Category -->
            <div class="bg-gray3 p-5 rounded-xl">
                <div class="w-full flex items-center space-x-3">
                    <base-icon icon="category" size="36"></base-icon>
                    <h1 class="text-3xl font-semibold">Category</h1>
                </div>
                <ul class="category-list p-2 font-medium text-lg">
                    <li class="py-1.5 px-3 my-1 cursor-pointer hover:text-white rounded-lg flex items-center space-x-2"
                        :class="{'bg-gray4 text-white':header=='All Cars'}" @click="title('All Cars')">
                        <div class="w-7 h-7 bg-gray rounded-full flex items-center justify-center">
                            <base-icon icon="car-sideview" size="24" class="text-white"></base-icon>
                        </div>
                        <p>All Cars</p>
                    </li>
                    <li class="py-1.5 px-3 my-1 cursor-pointer rounded-lg flex items-center space-x-2"
                        :class="{'bg-gray4':header=='BMW'}" @click="title('BMW')">
                        <div class="w-7 h-7 bg-gray rounded-full flex items-center justify-center">
                            <img src="img/logo/BMW.png" alt="" class="w-6">
                        </div>
                        <p :class="{'text-white':header=='BMW'}">BMW</p>
                    </li>
                    <li class="py-1.5 px-3 my-1 cursor-pointer rounded-lg flex items-center space-x-2"
                        :class="{'bg-gray4 text-white':header=='Audi'}" @click="title('Audi')">
                        <div class="w-7 h-7 bg-gray rounded-full flex items-center justify-center">
                            <img src="img/logo/Audi.png" alt="" class="w-5">
                        </div>
                        <p>Audi</p>
                    </li>
                    <li class="py-1.5 px-3 my-1 cursor-pointer rounded-lg flex items-center space-x-2"
                        :class="{'bg-gray4 text-white':header=='Mercedes-Benz'}" @click="title('Mercedes-Benz')">
                        <div class="w-7 h-7 bg-gray rounded-full flex items-center justify-center">
                            <img src="img/logo/Benz.png" alt="" class="w-5">
                        </div>
                        <p>Mercedes-Benz</p>
                    </li>
                    <li class="py-1.5 px-3 my-1 cursor-pointer rounded-lg flex items-center space-x-2"
                        :class="{'bg-gray4 text-white':header=='Honda'}" @click="title('Honda')">
                        <div class="w-7 h-7 bg-gray rounded-full flex items-center justify-center">
                            <img src="img/logo/Honda.png" alt="" class="w-6">
                        </div>
                        <p>Honda</p>
                    </li>
                </ul>
            </div>
            <!-- Content -->
            <div class="col-span-3 bg-gray3 p-5 rounded-xl">
                <div class="w-full h-10 flex space-x-3">
                    <div v-show="header == 'All Cars'"
                        class="w-10 h-10 bg-gray rounded-full flex items-center justify-center">
                        <base-icon class="text-white" icon="car-sideview" size="36"></base-icon>
                    </div>
                    <div v-show="header == 'BMW'"
                        class="w-10 h-10 bg-gray rounded-full flex items-center justify-center">
                        <img src="img/logo/BMW.png" alt="" class="w-9">
                    </div>
                    <div v-show="header == 'Audi'"
                        class="w-10 h-10 bg-gray rounded-full flex items-center justify-center">
                        <img src="img/logo/Audi.png" alt="" class="w-8">
                    </div>
                    <div v-show="header == 'Mercedes-Benz'"
                        class="w-10 h-10 bg-gray rounded-full flex items-center justify-center">
                        <img src="img/logo/Benz.png" alt="" class="w-7">
                    </div>
                    <div v-show="header == 'Honda'"
                        class="w-10 h-10 bg-gray rounded-full flex items-center justify-center">
                        <img src="img/logo/Honda.png" alt="" class="w-9">
                    </div>

                    <h1 class="text-3xl font-semibold">{{header}}</h1>
                </div>
                <hr class="border-gray-400 mb-4 mt-3">
                <div class="w-full flex justify-end space-x-4">
                    <div>
                        <h1>Sort By</h1>
                        <div class="select w-44 text-black pl-2.5">
                            <select name="" id="">
                                <option value="all">All</option>
                                <option value="lasted">Lasted to Oldest</option>
                                <option value="oldest">Oldest to Lasted</option>
                                <option value="az">A to Z</option>
                                <option value="za">Z to A</option>
                                <option value="popular">Popular</option>
                                <option value="rating">Rating</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1>Item Per Page</h1>
                            <div class="select text-black w-20 px-3">
                                <select name="" id="">
                                    <option value=6 selected>6</option>
                                    <option value=12>12</option>
                                    <option value=18>18</option>
                                    <option value=24>24</option>
                                    <option value=30>30</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full mt-5 grid grid-cols-3 gap-5 text-white">
                    <div class="card bg-gray5 rounded-lg p-4" v-for="i in 30" :key="i">
                        <img src="img/cars/BMW-M8.jpg" alt="" class="rounded-xl">
                        <h1 class="mt-2 text-xl font-medium">BMW M8</h1>
                        <h2>Brand: BMW</h2>
                        <h3>Type: Sport Car</h3>
                        <h4>Price: {{price("17959000")}} Baht</h4>
                        <h5>Seller: <span class="highlight">Phanthakarn Khumphai</span></h5>
                        <h6 v-if="showroom != null">Showroom: <span class="highlight">Showroom's name</span></h6>
                        <h6 v-if="showroom == null">Province: Bangkok</h6>
                        <div class="w-full mt-3 flex justify-between">
                            <div class="flex items-center space-x-1">
                                <base-icon icon="visibility" size="24" class="text-primary"></base-icon>
                                <p>10.7 K</p>
                            </div>
                            <button class="duration-200 hover:scale-110">
                                <base-icon icon="heart-regular" size="28" class="text-primary"></base-icon>
                            </button>
                        </div>
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
            header: "All Cars",
            showroom: null
        }
    },
    methods: {
        title(value) {
            this.header = value
        },
        price(value) {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    },
}
</script>

<style scoped>
.category-list li:hover {
    background: var(--gray4);
}

.category-list li:hover p {
    color: #f5f5f7;
}

select {
    /* Reset Select */
    appearance: none;
    outline: 0;
    border: 0;
    box-shadow: none;
    /* Personalize */
    flex: 1;
    padding: auto;
    background-color: #f5f5f7;
    background-image: none;
    cursor: pointer;
}

/* Remove IE arrow */
select::-ms-expand {
    display: none;
}

/* Custom Select wrapper */
.select {
    position: relative;
    display: flex;
    /* padding: 10px; */
    /* width: auto; */
    height: 35px;
    border-radius: .25em;
    overflow: hidden;
    background: #f5f5f7;
}

/* Arrow */
.select::after {
    content: '\25BC';
    position: absolute;
    top: 0;
    right: 0;
    padding: .35em .75em;
    background-color: var(--gray);
    color: #f5f5f7;
    transition: .25s all ease;
    pointer-events: none;
}

.select:hover::after {
    color: var(--pink);
}

.highlight:hover {
    color: var(--pink);
    text-decoration: underline;
    text-underline-offset: 2px;
}
</style>