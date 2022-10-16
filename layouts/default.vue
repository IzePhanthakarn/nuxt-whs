<template>
    <div class="w-screen h-screen overflow-hidden bg-main">
        <!-- Navbar -->
        <nav class="nav w-full h-16 fixed top-0 flex justify-center items-center text-white">
            <div class="w-full flex items-center justify-between pl-3.5 pr-5">

                <!-- Left side -->
                <div class="flex items-center space-x-4">
                    <div class="list-ul cursor-pointer h-12 w-12 flex items-center justify-center rounded-full">
                        <button @click="toggle" v-show="!is_open">
                            <base-icon icon="list-ul" size="24"></base-icon>
                        </button>
                        <button @click="toggle" v-show="is_open">
                            <base-icon icon="arrow-circle-left" size="36"></base-icon>
                        </button>
                    </div>
                    <nuxt-link to="/" class="text-2xl font-semibold">My Warehouse</nuxt-link>
                </div>

                <!-- Search box -->
                <div class="w-1/2 text-black font-semibold">
                    <form class="form w-full">
                        <button class="flex items-center space-x-3">
                            <base-icon icon="magnifying-glass"></base-icon>
                            <p class="mt-0.5">Search</p>
                        </button>
                        <input class="input w-full pt-2" placeholder="Car's name" required="" type="text">
                        <button class="reset" type="reset">
                            <base-icon icon="x"></base-icon>
                        </button>
                    </form>
                </div>

                <!-- Right side -->
                <div class="flex items-center space-x-4">
                    <div class="list-ul cursor-pointer h-10 w-10 flex items-center justify-center rounded-full">
                        <div @click="$colorMode.preference = 'light'" v-show="$colorMode.value === 'dark'"
                            class="cursor-pointer">
                            <base-icon icon="moon"></base-icon>
                        </div>
                        <div @click="$colorMode.preference = 'dark'" v-show="$colorMode.value === 'light'"
                            class="cursor-pointer">
                            <base-icon icon="sun"></base-icon>
                        </div>
                    </div>
                    <div class="list-ul cursor-pointer h-10 w-10 flex items-center justify-center rounded-full">
                        <base-icon icon="forum" size="28"></base-icon>
                    </div>
                    <div class="list-ul cursor-pointer h-10 w-10 flex items-center justify-center rounded-full">
                        <base-icon icon="bell" size="28"></base-icon>
                    </div>
                    <div class="list-ul cursor-pointer h-12 w-12 flex items-center justify-center rounded-full">
                        <base-icon icon="user"></base-icon>
                    </div>
                </div>
            </div>
        </nav>

        <div class="w-full mt-16 flex text-white">
            <div class="sidebar flex flex-col justify-between" :class="{'active':is_open}">

                <!-- Admin -->
                <ul :class="{'mt-3':is_open}" v-if="role == 'admin'">
                    <li>
                        <nuxt-link to="/dashboard" class="menu-list flex items-center rounded-xl m-1 cursor-pointer"
                            :class="{'flex-col justify-center active':!is_open,'highlight': route_name == 'dashboard'}">
                            <base-icon icon="chart-pie" size="24" :class="{'ml-5':is_open}"></base-icon>
                            <p class="mt-1 text-xs font-medium" :class="{'ml-5 text-base':is_open}">Dashboard</p>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/all_cars" class="menu-list flex items-center rounded-xl m-1 cursor-pointer"
                            :class="{'flex-col justify-center active':!is_open,'highlight': route_name == 'all_cars'}">
                            <base-icon icon="car-sideview" size="24" :class="{'ml-5':is_open}"></base-icon>
                            <p class="mt-1 text-xs font-medium" :class="{'ml-5 text-base':is_open}">All Cars</p>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/showroom" class="menu-list flex items-center rounded-xl m-1 cursor-pointer"
                            :class="{'flex-col justify-center active':!is_open,'highlight': route_name == 'showroom'}">
                            <base-icon icon="garage" size="24" :class="{'ml-5':is_open}"></base-icon>
                            <p class="mt-1 text-xs font-medium" :class="{'ml-5 text-base':is_open}">Showroom</p>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/history" class="menu-list flex items-center rounded-xl m-1 cursor-pointer"
                            :class="{'flex-col justify-center active':!is_open,'highlight': route_name == 'history'}">
                            <base-icon icon="clock-rotate-left" size="24" :class="{'ml-5':is_open}"></base-icon>
                            <p class="mt-1 text-xs font-medium" :class="{'ml-5 text-base':is_open}">History</p>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/user" class="menu-list flex items-center rounded-xl m-1 cursor-pointer"
                            :class="{'flex-col justify-center active':!is_open,'highlight': route_name == 'user'}">
                            <base-icon icon="user-square" size="24" :class="{'ml-5':is_open}"></base-icon>
                            <p class="mt-1 text-xs font-medium" :class="{'ml-5 text-base':is_open}">User</p>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/review" class="menu-list flex items-center rounded-xl m-1 cursor-pointer"
                            :class="{'flex-col justify-center active':!is_open,'highlight': route_name == 'review'}">
                            <base-icon icon="thumbs-updown" size="24" :class="{'ml-5':is_open}"></base-icon>
                            <p class="mt-1 text-xs font-medium" :class="{'ml-5 text-base':is_open}">Review</p>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/complaint" class="menu-list flex items-center rounded-xl m-1 cursor-pointer"
                            :class="{'flex-col justify-center active':!is_open,'highlight': route_name == 'complaint'}">
                            <base-icon icon="exclamation-octagon" size="24" :class="{'ml-5':is_open}"></base-icon>
                            <p class="mt-1 text-xs font-medium" :class="{'ml-5 text-base':is_open}">Complaint</p>
                        </nuxt-link>
                    </li>
                </ul>

                <!-- Seller -->
                <ul :class="{'mt-3':is_open}" v-if="role == 'seller'">
                    <li>
                        <nuxt-link to="/dashboard" class="menu-list flex items-center rounded-xl m-1 cursor-pointer"
                            :class="{'flex-col justify-center active':!is_open,'highlight': route_name == 'dashboard'}">
                            <base-icon icon="chart-pie" size="24" :class="{'ml-5':is_open}"></base-icon>
                            <p class="mt-1 text-xs font-medium" :class="{'ml-5 text-base':is_open}">Dashboard</p>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/all_cars" class="menu-list flex items-center rounded-xl m-1 cursor-pointer"
                            :class="{'flex-col justify-center active':!is_open,'highlight': route_name == 'all_cars'}">
                            <base-icon icon="car-sideview" size="24" :class="{'ml-5':is_open}"></base-icon>
                            <p class="mt-1 text-xs font-medium" :class="{'ml-5 text-base':is_open}">All Cars</p>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/showroom" class="menu-list flex items-center rounded-xl m-1 cursor-pointer"
                            :class="{'flex-col justify-center active':!is_open,'highlight': route_name == 'showroom'}">
                            <base-icon icon="garage" size="24" :class="{'ml-5':is_open}"></base-icon>
                            <p class="mt-1 text-xs font-medium" :class="{'ml-5 text-base':is_open}">Showroom</p>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/garage" class="menu-list flex items-center rounded-xl m-1 cursor-pointer"
                            :class="{'flex-col justify-center active':!is_open,'highlight': route_name == 'garage'}">
                            <base-icon icon="directions-car" size="24" :class="{'ml-5':is_open}"></base-icon>
                            <p class="mt-1 text-xs font-medium" :class="{'ml-5 text-base':is_open}">Garage</p>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/dealing" class="menu-list flex items-center rounded-xl m-1 cursor-pointer"
                            :class="{'flex-col justify-center active':!is_open,'highlight': route_name == 'dealing'}">
                            <base-icon icon="handshake" size="24" :class="{'ml-5':is_open}"></base-icon>
                            <p class="mt-1 text-xs font-medium" :class="{'ml-5 text-base':is_open}">Dealing</p>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/history" class="menu-list flex items-center rounded-xl m-1 cursor-pointer"
                            :class="{'flex-col justify-center active':!is_open,'highlight': route_name == 'history'}">
                            <base-icon icon="clock-rotate-left" size="24" :class="{'ml-5':is_open}"></base-icon>
                            <p class="mt-1 text-xs font-medium" :class="{'ml-5 text-base':is_open}">History</p>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/review" class="menu-list flex items-center rounded-xl m-1 cursor-pointer"
                            :class="{'flex-col justify-center active':!is_open,'highlight': route_name == 'review'}">
                            <base-icon icon="thumbs-updown" size="24" :class="{'ml-5':is_open}"></base-icon>
                            <p class="mt-1 text-xs font-medium" :class="{'ml-5 text-base':is_open}">Review</p>
                        </nuxt-link>
                    </li>
                </ul>

                <!-- User -->
                <ul :class="{'mt-3':is_open}" v-if="role == 'user'">
                    <li>
                        <nuxt-link to="/all_cars" class="menu-list flex items-center rounded-xl m-1 cursor-pointer"
                            :class="{'flex-col justify-center active':!is_open,'highlight': route_name == 'all_cars'}">
                            <base-icon icon="car-sideview" size="24" :class="{'ml-5':is_open}"></base-icon>
                            <p class="mt-1 text-xs font-medium" :class="{'ml-5 text-base':is_open}">All Cars</p>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/showroom" class="menu-list flex items-center rounded-xl m-1 cursor-pointer"
                            :class="{'flex-col justify-center active':!is_open,'highlight': route_name == 'showroom'}">
                            <base-icon icon="garage" size="24" :class="{'ml-5':is_open}"></base-icon>
                            <p class="mt-1 text-xs font-medium" :class="{'ml-5 text-base':is_open}">Showroom</p>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/garage" class="menu-list flex items-center rounded-xl m-1 cursor-pointer"
                            :class="{'flex-col justify-center active':!is_open,'highlight': route_name == 'garage'}">
                            <base-icon icon="directions-car" size="24" :class="{'ml-5':is_open}"></base-icon>
                            <p class="mt-1 text-xs font-medium" :class="{'ml-5 text-base':is_open}">Garage</p>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/dealing" class="menu-list flex items-center rounded-xl m-1 cursor-pointer"
                            :class="{'flex-col justify-center active':!is_open,'highlight': route_name == 'dealing'}">
                            <base-icon icon="handshake" size="24" :class="{'ml-5':is_open}"></base-icon>
                            <p class="mt-1 text-xs font-medium" :class="{'ml-5 text-base':is_open}">Dealing</p>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/history" class="menu-list flex items-center rounded-xl m-1 cursor-pointer"
                            :class="{'flex-col justify-center active':!is_open,'highlight': route_name == 'history'}">
                            <base-icon icon="clock-rotate-left" size="24" :class="{'ml-5':is_open}"></base-icon>
                            <p class="mt-1 text-xs font-medium" :class="{'ml-5 text-base':is_open}">History</p>
                        </nuxt-link>
                    </li>
                </ul>

                <ul :class="{'mb-3':is_open}">
                    <div class="vertical-line"></div>
                    <li>
                        <nuxt-link to="/setting" class="menu-list flex items-center rounded-xl m-1 cursor-pointer"
                            :class="{'flex-col justify-center active mt-2':!is_open,'highlight': route_name == 'setting'}">
                            <base-icon icon="setting" size="24" :class="{'ml-5':is_open}"></base-icon>
                            <p class="mt-1 text-xs font-medium" :class="{'ml-5 text-base':is_open}">Setting</p>
                        </nuxt-link>
                    </li>
                </ul>
            </div>
            <nuxt class="content w-full py-8 px-24" :class="{'px-12':is_open}" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            is_open: false,
            role: "admin",
            email: "admin@whs.com"
        }
    },
    methods: {
        toggle() {
            this.is_open = !this.is_open
        }
    },
    computed: {
        route_name() {
            return this.$route.name
        },
    }
}
</script>

<style scoped>
.nav {
    background: var(--gray);
    z-index: 99;
}

.list-ul {
    background: transparent;
}

.list-ul:hover {
    background: var(--gray2);
}

.sidebar {
    min-height: calc(100vh - 64px);
    width: 72px;
    background: var(--gray);
    transition: width .4s;
}

.sidebar.active {
    width: 290px;
}

.menu-list {
    height: 40px;
}

.menu-list:hover {
    background: var(--gray2);
}

.menu-list.highlight {
    background: var(--gray2);
}

.menu-list.active {
    height: 76px;
}

.content {
    height: calc(100vh - 64px);
    transition: all .4s;
}

.form button {
    border: none;
    background: none;
    color: #8b8ba7;
}

/* styling of whole input container */
.form {
    position: relative;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    padding-inline: 0.8em;
    border-radius: 30px;
    transition: border-radius 0.5s ease;
    background: #fff;
}

.input {
    font-size: 0.9rem;
    background-color: transparent;
    width: 100%;
    height: 100%;
    padding-inline: 1em;
    padding-block: 1em;
    border: none;
}

.form:before {
    content: "";
    position: absolute;
    background: crimson;
    transform: scaleX(0);
    transform-origin: center;
    width: 100%;
    height: 2px;
    left: 0;
    bottom: 0;
    border-radius: 1px;
    transition: transform 0.3s ease;
}

.form:focus-within {
    border-radius: 2px;
}

input:focus {
    outline: none;
}

.form:focus-within:before {
    transform: scale(1);
}

/* styling of close button */
/* == you can click the close button to remove text == */
.reset {
    border: none;
    background: none;
    opacity: 0;
    visibility: hidden;
}

/* close button shown when typing */
input:not(:placeholder-shown)~.reset {
    opacity: 1;
    visibility: visible;
}

/* sizing svg icons */
.form svg {
    width: 17px;
    /* margin-top: 1px; */
}

.vertical-line {
    width: 100%;
    height: 1px;
    margin: 12px 0px;
    background: #f5f5f7;
}
</style>