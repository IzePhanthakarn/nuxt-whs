<template>
    <div class="w-full h-full flex flex-col text-default">
        <div class="w-full bg-gray4 rounded-xl text-white flex items-center p-3 space-x-2">
            <base-icon icon="setting" size="40"></base-icon>
            <h1 class="text-3xl font-medium">Setting</h1>
        </div>
        <div class="w-full h-full mt-5 grid grid-cols-4 gap-5">
            <div class="bg-gray3 h-full rounded-xl p-2">
                <div class="w-full overflow-y-auto" id="menu">
                    <ul class="category-list font-medium text-lg">
                        <li class="py-1.5 px-3 my-1 cursor-pointer hover:text-white rounded-lg flex items-center space-x-2"
                            :class="{'bg-gray4 text-white':header=='Account'}" @click="title('Account')">
                            <div class="w-7 h-7 bg-gray rounded-full flex items-center justify-center">
                                <base-icon icon="user" size="24" class="text-white"></base-icon>
                            </div>
                            <p>Account</p>
                        </li>
                        <li class="py-1.5 px-3 my-1 cursor-pointer hover:text-white rounded-lg flex items-center space-x-2"
                            :class="{'bg-gray4 text-white':header=='System'}" @click="title('System')">
                            <div class="w-7 h-7 bg-gray rounded-full flex items-center justify-center">
                                <base-icon icon="wysiwyg" size="24" class="text-white"></base-icon>
                            </div>
                            <p>System</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-span-3 h-full bg-gray3 p-5 rounded-xl flex flex-col">
                <div class="w-full h-10 flex">
                    <div v-show="header == 'Account'"
                        class="w-10 h-10 bg-gray rounded-full flex items-center justify-center">
                        <base-icon class="text-white" icon="user" size="36"></base-icon>
                    </div>
                    <div v-show="header == 'System'"
                        class="w-10 h-10 bg-gray rounded-full flex items-center justify-center">
                        <base-icon class="text-white" icon="wysiwyg" size="30"></base-icon>
                    </div>

                    <h1 class="text-3xl font-semibold ml-3">{{header}}</h1>
                </div>

                <hr class="border-gray-400 mb-4 mt-3">

                <div class="bg-gray-800 overflow-y-auto" id="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fuga illo saepe facilis dolore
                        quas nemo minus quos repellendus, mollitia fugiat sint impedit unde? Quasi, similique soluta
                        numquam eligendi harum non ex molestias assumenda quia, vitae nulla optio veniam. Repellat quo
                        dolore voluptas dignissimos quos totam, veniam sed obcaecati expedita eum cum aut neque? Non,
                        obcaecati odio qui, quia sit reprehenderit, vero quidem praesentium dicta officiis officia nisi.
                        Vero cupiditate exercitationem natus veniam tempora! Ab quo officiis, consequatur nulla ea velit
                        magni deserunt quisquam quibusdam, provident rerum modi, dolores quis reprehenderit fugiat
                        explicabo dolore molestias distinctio excepturi mollitia consectetur minima laudantium! Tenetur
                        dicta qui eligendi accusantium et illo? Commodi sunt ducimus quis perferendis natus voluptas
                        nisi magni temporibus quae vitae consectetur, unde error ea fugiat accusamus illum assumenda
                        sequi dolorem pariatur inventore quo, tenetur esse odio aspernatur. Cumque quibusdam quaerat
                        consectetur amet fugiat ullam impedit, recusandae eum accusantium nobis neque vel voluptatibus
                        distinctio repudiandae, numquam sit a libero sed tempore ab excepturi maxime ad ducimus. Odio
                        deserunt nihil quasi, veniam, aspernatur quis necessitatibus voluptas quia corporis facere
                        exercitationem asperiores velit eius voluptates incidunt amet ullam cum. Facere deleniti velit
                        odit eaque rem, iure, vitae, cumque debitis dicta totam error! Illum, culpa, sapiente, animi
                        officia mollitia magni alias voluptate reprehenderit quia aspernatur debitis sed reiciendis.
                        Natus provident inventore tempora eos quam itaque amet odit ex, quaerat unde cupiditate facilis
                        vitae qui! Sequi error fugiat porro, magni magnam similique dolore odit deserunt illum,
                        molestias id aliquid quae aliquam! Similique et itaque rerum totam nemo voluptates, fuga cumque
                        adipisci in perferendis dolore tempora ullam repellat debitis mollitia quos obcaecati
                        dignissimos aut voluptatibus nesciunt odio voluptas, esse vitae. Deserunt error reprehenderit,
                        autem molestias, omnis exercitationem veniam quo voluptas itaque eius facere rem recusandae amet
                        nostrum. Odio distinctio repudiandae, ut ea unde laborum nobis illum veniam enim laboriosam qui
                        tempore ad. Neque pariatur autem hic, alias doloribus vel. Cupiditate perspiciatis porro id,
                        aspernatur facilis illum voluptatibus, atque, est culpa ducimus ea! Fuga facere ad nisi
                        consequuntur vel earum similique quam voluptas, eius sequi distinctio debitis minus autem
                        laudantium nam tempora error optio corrupti sit perspiciatis asperiores dolorem! Odit ducimus
                        blanditiis maxime tempora, voluptas natus iure, quaerat ex neque pariatur quas animi ad dolorem
                        ipsa expedita sed consectetur dolor nihil sequi, minus amet nulla possimus perspiciatis. A,
                        reprehenderit molestiae. Veniam consequuntur inventore molestias architecto, expedita fugit ea
                        sed? Facere possimus placeat quaerat explicabo, commodi aspernatur odio eius vitae, nam
                        asperiores doloribus earum tempore exercitationem atque fuga architecto rem praesentium adipisci
                        impedit tenetur nesciunt! Laudantium reiciendis consequuntur odio a aperiam unde vel alias velit
                        omnis tempora impedit ratione, recusandae deleniti animi pariatur laborum molestias? Tenetur,
                        tempore dolorum. Cumque odit illum inventore quam dolorum. Quis quidem aut libero. Sit, harum.
                        Quod recusandae accusamus unde! Delectus officia voluptatem dolor, perspiciatis eligendi
                        commodi? Voluptates corporis possimus quasi perspiciatis odit aspernatur, quod magni eos id sed
                        voluptatibus sequi vitae ipsa blanditiis, est eaque. Pariatur voluptatem at quae hic esse, cum
                        similique praesentium qui sit iusto nesciunt, alias est inventore corporis a!</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            header: "Account",
        }
    },
    mounted() {
        this.calulateHeight();
    },
    methods: {
        title(value) {
            this.header = value
        },
        calulateHeight() {
            let height = window.innerHeight;
            let menuHeight = height - 228
            let contentHeight = height - 321
            document.getElementById("menu").style.height = menuHeight + "px";
            document.getElementById("content").style.height = contentHeight + "px";
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
</style>