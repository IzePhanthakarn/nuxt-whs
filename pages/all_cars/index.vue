<template>
    <div class="w-full h-full flex flex-col text-default">

        <!-- Title -->
        <div class="w-full bg-gray4 rounded-xl text-white flex items-center p-3 space-x-2">
            <base-icon icon="car-sideview" size="40"></base-icon>
            <h1 class="text-3xl font-medium">All Cars</h1>
        </div>

        <!-- Content -->
        <div class="w-full h-full mt-5 grid grid-cols-4 gap-5">
            <div class="p-5 bg-gray3 rounded-xl">
                <div class="bg-gray3 h-full rounded-xl">
                    <div class="w-full flex items-center space-x-3">
                        <base-icon icon="category" size="36"></base-icon>
                        <h1 class="text-3xl font-semibold">Category</h1>
                    </div>
                    <div class="w-full mt-3 overflow-y-auto" id="menu">
                        <!-- <div class="w-full" v-for="(brand,index) in brands" :key="index">
                            <div class="w-full sticky top-0 p-1 bg-gray-600">{{brand.head}}</div>
                            <div class="w-full" v-for="(cname,j) in brand.name" :key="j">
                                <div class="card">
                                    <p>{{cname}}</p>
                                </div>
                            </div>
                        </div> -->

                        <!-- <div class="w-full" v-for="(brands,i) in brandss" :key="i">
                            <div class="w-full sticky top-0 p-1 bg-gray-600">{{brands[0].charAt(0)}}</div>
                            <div class="w-full" v-for="(cname,j) in brandss[i]" :key="j">
                                {{cname}}</div>
                        </div> -->

                        <div class="category-list font-medium py-1.5 px-3 mb-1 cursor-pointer hover:text-white rounded-lg flex items-center space-x-2"
                            :class="{'bg-gray4 text-white':header=='All Cars'}" @click="title('All Cars')">
                            <div class="w-7 h-7 bg-gray rounded-full flex items-center justify-center">
                                <base-icon icon="car-sideview" size="24" class="text-white"></base-icon>
                            </div>
                            <p>All Cars</p>
                        </div>

                        <!-- <div class="font-medium text-lg" v-for="(brand,i) in brands" :key="i">
                            <div class="w-full sticky top-0 px-2 py-1 text-white head rounded-xl">{{brand[i].name[0]}}
                            </div>
                            <div class="category-list py-1.5 px-3 my-1 cursor-pointer rounded-lg flex items-center space-x-2"
                                v-for="(cbrand,j) in brands[i]" :key="j"
                                :class="{'bg-gray4 text-white':header== cbrand.name}" @click="title(cbrand.name)">
                                <div class="w-7 h-7 bg-gray rounded-full flex items-center justify-center">
                                    <img :src="require(`~/static/img/logo/${cbrand.img}`)" />
                                </div>
                                <p>{{cbrand.name}}</p>
                            </div>
                        </div> -->

                        <ul class="font-medium text-lg">
                            <li class="category-list py-1.5 px-3 my-1 cursor-pointer rounded-lg flex items-center space-x-2"
                                :class="{'bg-gray4': header==brand.name}" @click="title(brand.name)"
                                v-for="(brand,index) in brands" :key="index">
                                <div class="w-7 h-7 bg-gray rounded-full flex items-center justify-center">
                                    <img :src="require(`~/static/img/logo/${brand.img}`)" class="w-6" />
                                </div>
                                <p :class="{'text-white': header==brand.name}">{{brand.name}}</p>
                            </li>
                        </ul>
                        <!-- <ul class="category-list font-medium text-lg">
                            <li class="py-1.5 px-3 mb-1 cursor-pointer hover:text-white rounded-lg flex items-center space-x-2"
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
                                :class="{'bg-gray4 text-white':header=='Mercedes-Benz'}"
                                @click="title('Mercedes-Benz')">
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
                        </ul> -->
                    </div>
                </div>
            </div>

            <div class="col-span-3 h-full bg-gray3 p-5 rounded-xl flex flex-col">
                <div class="w-full h-10 flex">
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

                    <h1 class="text-3xl font-semibold ml-3">{{header}}</h1>
                </div>
                <hr class="border-gray-400 mb-4 mt-3">
                <div class="w-full flex justify-between">
                    <base-input label="Car's name" class="w-96" />
                    <div class="flex items-center space-x-3">
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
                </div>
                <div class="w-full mt-5 grid grid-cols-3 gap-5 text-white rounded-lg overflow-y-auto" id="content">
                    <div class="card bg-gray5 rounded-lg p-4" v-for="i in 5" :key="i">
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
            showroom: null,
            // brands: [
            //     { head: "A", name: ["Aston Martin", "Audi"] },
            //     { head: "B", name: ["Bentley", "BMW", "BYD"] },
            //     { head: "C", name: ["Chery", "Chevrolet"] },
            //     { head: "D", name: ["Ferrari", "Ford"] },
            //     { head: "E", name: ["GWM"] },
            //     { head: "F", name: ["Haval", "Honda", "Hozon", "Hyundai"] },
            // ],
            // brandss: [
            //     ["Aston Martin", "Audi"],
            //     ["Bentley", "BMW", "BYD"],
            //     ["Chery", "Chevrolet"],
            //     ["Ferrari", "Ford"],
            //     ["GWM"],
            //     ["Haval", "Honda", "Hozon", "Hyundai"]
            // ],
            brands: [
                { name: 'Aston Martin', img: 'Audi.png' },
                { name: 'Audi', img: 'Audi.png' },
                { name: 'Bentley', img: 'BMW.png' },
                { name: 'BMW', img: 'BMW.png' },
                { name: 'BYD', img: 'BMW.png' },
                { name: 'Chery', img: 'Audi.png' },
                { name: 'Chevrolet', img: 'Audi.png' },
                { name: 'Ferrari', img: 'Audi.png' },
                { name: 'Ford', img: 'Audi.png' },
                { name: 'GWM', img: 'Audi.png' },
                { name: 'Haval', img: 'Audi.png' },
                { name: 'Honda', img: 'Audi.png' },
                { name: 'Hozon', img: 'Audi.png' },
                { name: 'Hyundai', img: 'Audi.png' },
                { name: 'Isuzu', img: 'Audi.png' },
                { name: 'Jaguar', img: 'Audi.png' },
                { name: 'Jeep', img: 'Audi.png' },
                { name: 'Kia', img: 'Audi.png' },
                { name: 'Lamborghini', img: 'Audi.png' },
                { name: 'Land Rover', img: 'Audi.png' },
                { name: 'Lexus', img: 'Audi.png' },
                { name: 'Maserati', img: 'Audi.png' },
                { name: 'Mazda', img: 'Audi.png' },
                { name: 'McLaren', img: 'Audi.png' },
                { name: 'Mercedes-Benz', img: 'Audi.png' },
                { name: 'MG', img: 'Audi.png' },
                { name: 'Mini', img: 'Audi.png' },
                { name: 'Mitsubishi', img: 'Audi.png' },
                { name: 'Nissan', img: 'Audi.png' },
                { name: 'ORA', img: 'Audi.png' },
                { name: 'Peugeot', img: 'Audi.png' },
                { name: 'Porsche', img: 'Audi.png' },
                { name: 'Rolls-Royce', img: 'Audi.png' },
                { name: 'Ssangyong', img: 'Audi.png' },
                { name: 'Subaru', img: 'Audi.png' },
                { name: 'Suzuki', img: 'Audi.png' },
                { name: 'Tata', img: 'Audi.png' },
                { name: 'Tesla', img: 'Audi.png' },
                { name: 'Thairung', img: 'Audi.png' },
                { name: 'Toyota', img: 'Audi.png' },
                { name: 'Volvo', img: 'Audi.png' },
                { name: 'Wuling', img: 'Audi.png' },
            ],
            // brands: [
            //     [
            //         { name: 'Aston Martin', img: 'Audi.png' },
            //         { name: 'Audi', img: 'Audi.png' }
            //     ],
            //     [
            //         { name: 'Bentley', img: 'BMW.png' },
            //         { name: 'BMW', img: 'BMW.png' },
            //         { name: 'BYD', img: 'BMW.png' }
            //     ],
            // [
            //     { name: 'Chery', img: 'Audi.png' },
            //     { name: 'Chevrolet', img: 'Audi.png' }
            // ],
            // [
            //     { name: 'Ferrari', img: 'Audi.png' },
            //     { name: 'Ford', img: 'Audi.png' }
            // ],
            // [
            //     { name: 'GWM', img: 'Audi.png' }
            // ],
            // [
            //     { name: 'Haval', img: 'Audi.png' },
            //     { name: 'Honda', img: 'Audi.png' },
            //     { name: 'Hozon', img: 'Audi.png' },
            //     { name: 'Hyundai', img: 'Audi.png' }
            // ],
            // [
            //     { name: 'Isuzu', img: 'Audi.png' }
            // ],
            // [
            //     { name: 'Jaguar', img: 'Audi.png' },
            //     { name: 'Jeep', img: 'Audi.png' }
            // ],
            // [
            //     { name: 'Kia', img: 'Audi.png' }
            // ],
            // [
            //     { name: 'Lamborghini', img: 'Audi.png' },
            //     { name: 'Land Rover', img: 'Audi.png' },
            //     { name: 'Lexus', img: 'Audi.png' }
            // ],
            // [
            //     { name: 'Maserati', img: 'Audi.png' },
            //     { name: 'Mazda', img: 'Audi.png' },
            //     { name: 'McLaren', img: 'Audi.png' },
            //     { name: 'Mercedes-Benz', img: 'Audi.png' },
            //     { name: 'MG', img: 'Audi.png' },
            //     { name: 'Mini', img: 'Audi.png' },
            //     { name: 'Mitsubishi', img: 'Audi.png' }
            // ],
            // [
            //     { name: 'Nissan', img: 'Audi.png' }
            // ],
            // [
            //     { name: 'ORA', img: 'Audi.png' }
            // ],
            // [
            //     { name: 'Peugeot', img: 'Audi.png' },
            //     { name: 'Porsche', img: 'Audi.png' }
            // ],
            // [
            //     { name: 'Rolls-Royce', img: 'Audi.png' }
            // ],
            // [
            //     { name: 'Ssangyong', img: 'Audi.png' },
            //     { name: 'Subaru', img: 'Audi.png' },
            //     { name: 'Suzuki', img: 'Audi.png' }
            // ],
            // [
            //     { name: 'Tata', img: 'Audi.png' },
            //     { name: 'Tesla', img: 'Audi.png' },
            //     { name: 'Thairung', img: 'Audi.png' },
            //     { name: 'Toyota', img: 'Audi.png' }
            // ],
            // [
            //     { name: 'Volvo', img: 'Audi.png' }
            // ],
            // [
            //     { name: 'Wuling', img: 'Audi.png' }
            // ],
            // ]
        }
    },
    methods: {
        title(value) {
            this.header = value
        },
        calulateHeight() {
            let height = window.innerHeight;
            let menuHeight = height - 300
            let contentHeight = height - 402
            document.getElementById("menu").style.height = menuHeight + "px";
            document.getElementById("content").style.height = contentHeight + "px";
        },
        price(value) {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    },
    mounted() {
        this.calulateHeight();
    }
}
</script>

<style scoped>
.head {
    background: #2f2f2f;
}

.category-list:hover {
    background: var(--gray4);
}

.category-list:hover p {
    color: #f5f5f7;
}

.highlight:hover {
    color: var(--pink);
    text-decoration: underline;
    text-underline-offset: 2px;
}
</style>