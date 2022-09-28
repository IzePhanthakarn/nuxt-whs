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
                <div class="w-1/2 text-default font-semibold">
                    <form class="form w-full">
                        <button class="flex items-center space-x-3">
                            <base-icon icon="magnifying-glass"></base-icon>
                            <p class="mt-0.5">Search</p>
                        </button>
                        <input class="input w-full pt-2" placeholder="Product" required="" type="text">
                        <button class="reset" type="reset">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
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
                    <div class="list-ul cursor-pointer h-12 w-12 flex items-center justify-center rounded-full">
                        <base-icon icon="user"></base-icon>
                    </div>
                </div>
            </div>
        </nav>
        <div class="w-full mt-16 flex text-white">
            <div class="sidebar flex flex-col justify-between" :class="{'active':is_open}">
                <ul :class="{'mt-3':is_open}" v-if="role == 'admin'|| role=='superadmin'">
                    <li>
                        <nuxt-link to="/dashboard" class="menu-list flex items-center rounded-xl m-1 cursor-pointer"
                            :class="{'flex-col justify-center active':!is_open,'highlight': route_name == 'dashboard'}">
                            <base-icon icon="chart-pie" size="24" :class="{'ml-5':is_open}"></base-icon>
                            <p class="mt-1 text-xs font-medium" :class="{'ml-5 text-base':is_open}">Dashboard</p>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/storage" class="menu-list flex items-center rounded-xl m-1 cursor-pointer"
                            :class="{'flex-col justify-center active':!is_open,'highlight': route_name == 'storage'}">
                            <base-icon icon="estate" size="24" :class="{'ml-5':is_open}"></base-icon>
                            <p class="mt-1 text-xs font-medium" :class="{'ml-5 text-base':is_open}">Storage</p>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/update" class="menu-list flex items-center rounded-xl m-1 cursor-pointer"
                            :class="{'flex-col justify-center active':!is_open,'highlight': route_name == 'update'}">
                            <base-icon icon="pen-to-square" size="24" :class="{'ml-5':is_open}"></base-icon>
                            <p class="mt-1 text-xs font-medium" :class="{'ml-5 text-base':is_open}">Update</p>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/adminhistory" class="menu-list flex items-center rounded-xl m-1 cursor-pointer"
                            :class="{'flex-col justify-center active':!is_open,'highlight': route_name == 'adminhistory'}">
                            <base-icon icon="exchange-alt" size="24" :class="{'ml-5':is_open}"></base-icon>
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
                    <li v-if="role == 'superadmin'">
                        <nuxt-link to="/role" class="menu-list flex items-center rounded-xl m-1 cursor-pointer"
                            :class="{'flex-col justify-center active':!is_open,'highlight': route_name == 'role'}">
                            <base-icon icon="book" size="24" :class="{'ml-5':is_open}"></base-icon>
                            <p class="mt-1 text-xs font-medium" :class="{'ml-5 text-base':is_open}">Role</p>
                        </nuxt-link>
                    </li>
                </ul>
                <ul :class="{'mt-3':is_open}" v-if="role == 'user'">
                    <li>
                        <nuxt-link to="/storage" class="menu-list flex items-center rounded-xl m-1 cursor-pointer"
                            :class="{'flex-col justify-center active':!is_open,'highlight': route_name == 'storage'}">
                            <base-icon icon="estate" size="24" :class="{'ml-5':is_open}"></base-icon>
                            <p class="mt-1 text-xs font-medium" :class="{'ml-5 text-base':is_open}">Storage</p>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/inventory" class="menu-list flex items-center rounded-xl m-1 cursor-pointer"
                            :class="{'flex-col justify-center active':!is_open,'highlight': route_name == 'inventory'}">
                            <base-icon icon="inbox" size="24" :class="{'ml-5':is_open}"></base-icon>
                            <p class="mt-1 text-xs font-medium" :class="{'ml-5 text-base':is_open}">Inventory</p>
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
                    <li class="flex items-center rounded-xl m-1" :class="{'flex-col justify-center active':!is_open}">
                        <base-icon icon="account" size="24" v-show="!is_open"></base-icon>
                        <base-icon icon="account" size="32" class="ml-4" v-show="is_open"></base-icon>
                        <p class="mt-1 text-xs font-medium" :class="{'hidden':is_open}">Admin</p>
                        <div class="block ml-3" :class="{'hidden':!is_open}">
                            <p class="text-base font-medium">Admin</p>
                            <p class="text-base">admin@whs.com</p>
                        </div>
                    </li>
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
            <nuxt />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            is_open: false,
            role: "user"
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
    background: var(--gray7);
    z-index: 99;
}

.list-ul {
    background: transparent;
}

.list-ul:hover {
    background: var(--gray8);
}

.sidebar {
    min-height: calc(100vh - 64px);
    width: 72px;
    background: var(--gray7);
    transition: all .4s;
}

.sidebar.active {
    width: 240px;
}

.menu-list {
    height: 40px;
}

.menu-list:hover {
    background: var(--gray8);
}

.menu-list.highlight {
    background: var(--gray8);
}

.menu-list.active {
    height: 76px;
}

/* From uiverse.io by @satyamchaudharydev */
/* From uiverse.io by @satyamchaudharydev */
/* removing default style of button */

.form button {
    border: none;
    background: none;
    color: #8b8ba7;
}

/* styling of whole input container */
.form {
    --timing: 0.3s;
    --width-of-input: 200px;
    --height-of-input: 40px;
    --border-height: 2px;
    --input-bg: #fff;
    --border-color: #2f2ee9;
    --border-radius: 30px;
    --after-border-radius: 2px;
    position: relative;
    width: 100%;
    height: var(--height-of-input);
    display: flex;
    align-items: center;
    padding-inline: 0.8em;
    border-radius: var(--border-radius);
    transition: border-radius 0.5s ease;
    background: var(--input-bg, #fff);
}

/* styling of Input */
.input {
    font-size: 0.9rem;
    background-color: transparent;
    width: 100%;
    height: 100%;
    padding-inline: 1em;
    padding-block: 1em;
    border: none;
}

/* styling of animated border */
.form:before {
    content: "";
    position: absolute;
    background: var(--green);
    transform: scaleX(0);
    transform-origin: center;
    width: 100%;
    height: var(--border-height);
    left: 0;
    bottom: 0;
    border-radius: 1px;
    transition: transform var(--timing) ease;
}

/* Hover on Input */
.form:focus-within {
    border-radius: var(--after-border-radius);
}

input:focus {
    outline: none;
}

/* here is code of animated border */
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
    margin-top: 3px;
}
.vertical-line{
    width: 100%;
    height: 1px;
    margin: 12px 0px;
    background: #f5f5f7;
}
</style>