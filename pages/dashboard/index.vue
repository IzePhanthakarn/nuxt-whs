<template>
    <div class="w-full h-full flex flex-col text-default">
        <div class="w-full bg-gray4 rounded-xl text-white flex items-center p-3 space-x-2">
            <base-icon icon="chart-pie" size="40"></base-icon>
            <h1 class="text-3xl font-medium">Dashboard</h1>
        </div>
        <div class="w-full grid grid-cols-5 gap-5 mt-5">

            <!-- Server Used -->
            <div class="bg-gray3 py-4 rounded-xl flex items-center justify-evenly">
                <base-icon icon="server" size="70"></base-icon>
                <div class="flex flex-col text-center">
                    <p class="text-xl font-semibold">134 MB</p>
                    <p class="text-base font-semibold">Server Used</p>
                </div>
            </div>

            <!-- Total Cars -->
            <div class="bg-gray3 py-4 rounded-xl flex items-center justify-evenly">
                <base-icon icon="car-sideview" size="80"></base-icon>
                <div class="flex flex-col text-center">
                    <p class="text-xl font-semibold">7 Cars</p>
                    <p class="text-base font-semibold">Total Cars</p>
                </div>
            </div>

            <!-- Total Showrooms -->
            <div class="bg-gray3 py-4 rounded-xl flex items-center justify-evenly">
                <base-icon icon="garage" size="70"></base-icon>
                <div class="flex flex-col text-center">
                    <p class="text-xl font-semibold">7 Showrooms</p>
                    <p class="text-base font-semibold">Total Showrooms</p>
                </div>
            </div>

            <!-- Total User -->
            <div class="bg-gray3 py-4 rounded-xl flex items-center justify-evenly">
                <base-icon icon="user-square" size="70"></base-icon>
                <div class="flex flex-col text-center">
                    <p class="text-xl font-semibold">34 Accounts</p>
                    <p class="text-base font-semibold">Total User</p>
                </div>
            </div>

            <!-- Total User -->
            <div class="bg-gray3 py-4 rounded-xl flex items-center justify-evenly">
                <base-icon icon="thumbs-updown" size="60"></base-icon>
                <div class="flex flex-col text-center">
                    <p class="text-xl font-semibold">4.5 / 5 </p>
                    <p class="text-base font-semibold">Total Reviews</p>
                </div>
            </div>
        </div>

        <div class="w-full h-full grid grid-cols-4 gap-5 mt-5">
            <div class="col-span-2 h-full flex flex-col justify-center space-y-5">

                <!-- Most Popular Car -->
                <div class="bg-gray3 h-full p-4 rounded-xl flex flex-col">
                    <div class="w-full flex items-center space-x-2">
                        <base-icon icon="webhook" size="30"></base-icon>
                        <h1 class="text-2xl font-semibold">Most Popular Car</h1>
                    </div>
                    <div class="w-full h-full mt-2 grid grid-cols-3 gap-4">
                        <div class="bg-gray4 p-2 bg-gray4 flex flex-col text-white font-medium" v-for="i in 3" :key="i">
                            <img src="img/cars/BMW-M8.jpg" alt="" class="rounded-xl">
                            <hr class="my-2">
                            <div class="w-full h-full flex justify-between items-end">
                                <h1>BMW M8</h1>
                                <div class="flex items-center space-x-1">
                                    <base-icon icon="visibility" size="20" class="text-primary"></base-icon>
                                    <p>30</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Most Popular Brand -->
                <div class="bg-gray3 h-full p-4 rounded-xl flex flex-col">
                    <div class="w-full flex items-center space-x-2">
                        <base-icon icon="copyright" size="30"></base-icon>
                        <h1 class="text-2xl font-semibold">Most Popular Brand</h1>
                    </div>
                    <div class="w-full h-full mt-2 bg-gray4"></div>
                </div>
            </div>

            <!-- Most Brand Views -->
            <div class="col-span-2 h-full bg-gray3 p-3 rounded-xl flex flex-col">
                <div class="w-full flex items-center space-x-2">
                    <base-icon icon="visibility" size="26"></base-icon>
                    <h1 class="text-2xl font-semibold">Most Brand Views</h1>
                </div>
                <div class="mt-4 ml-4 w-80 h-80 bg-gray rounded-full"></div>
            </div>
        </div>
    </div>
</template>