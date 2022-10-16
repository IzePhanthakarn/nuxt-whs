<template>
    <div class="w-full h-full flex flex-col text-default">
        <div class="w-full bg-gray4 rounded-xl text-white flex items-center p-3 space-x-2">
            <base-icon icon="exclamation-octagon" size="40"></base-icon>
            <h1 class="text-3xl font-medium">Complaint</h1>
        </div>

        <div class="w-full bg-gray3 mt-5 rounded-t-xl flex flex-col px-5 py-3 text-default">
            <div class="w-full flex items-center justify-between">
                <base-input type="text" label="Name" placeholder="User's name" class="w-96" />
                <div>
                    <h1 class="font-medium">Type</h1>
                    <div class="select w-32 text-black pl-2.5">
                        <select name="" id="">
                            <option value="all" selected>All</option>
                            <option value="user">User</option>
                            <option value="car">Car</option>
                            <option value="showroom">Showroom</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full h-full bg-gray3 rounded-b-xl flex items-center justify-center">
            <div class="w-full h-full mt-2 rounded-2xl px-4 pb-4">
                <div class="h-full border-table overflow-y-hidden rounded-2xl">
                    <table class="styled-table text-black font-semibold text-center">
                        <thead class="text-xl font-normal">
                            <tr>
                                <th>No.</th>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Target</th>
                                <th>Comment</th>
                                <th>
                                    <p class="truncated-lines line-1">Complaint date</p>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Waraphon Chuinim</td>
                                <td>Car</td>
                                <td>BMW M8</td>
                                <td>
                                    <p class="truncated-lines line-1">Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Facere assumenda pariatur sit, quo non earum aperiam quas? Et
                                        quasi distinctio sapiente quisquam odit officia laudantium eaque magnam
                                        perferendis sit esse ullam deleniti accusamus reiciendis excepturi voluptate cum
                                        consequuntur reprehenderit magni quae, maiores quod accusantium deserunt?
                                        Praesentium a eveniet aperiam sint eos iste porro quidem, veniam dolor quasi
                                        minus necessitatibus voluptatum totam ducimus quo quas est cumque illum nemo sed
                                        repellat temporibus ab deleniti sequi. Perferendis incidunt eveniet rem velit
                                        tempore illo autem quos nostrum voluptas! Natus numquam quam ratione nesciunt
                                        esse. Architecto possimus doloribus corrupti vitae, suscipit voluptas quo
                                        aliquam?</p>
                                </td>
                                <td>5 oct 2022, 13:30</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>
                                    <p class="truncated-lines line-1">Phanthakarn Khumphai</p>
                                </td>
                                <td>User</td>
                                <td>
                                    <p class="truncated-lines line-1">Phanthakarn Khumphai</p>
                                </td>
                                <td>
                                    <p class="truncated-lines line-1">Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. Aliquid repellendus quo consequatur velit saepe facilis ipsam! Excepturi
                                        dolores, ipsam ad vero facilis porro modi dolorum nam ex odio magni ut
                                        praesentium nulla suscipit vitae, exercitationem deserunt cupiditate enim itaque
                                        alias? Reiciendis asperiores placeat velit architecto expedita odio sit nisi
                                        sapiente autem assumenda. Iure nostrum odio laborum quibusdam assumenda
                                        similique aspernatur dignissimos voluptas excepturi vero error culpa possimus
                                        earum atque quae at reprehenderit nesciunt corrupti inventore amet, tempore
                                        recusandae iste provident. Soluta impedit totam quas, possimus perferendis
                                        voluptate corporis sed accusantium. Optio velit dolor sint quia, veritatis ipsa
                                        debitis fugit at.</p>
                                </td>
                                <td>5 oct 2022, 13:30</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Devid Martinez</td>
                                <td>Showroom</td>
                                <td>Showroom's name</td>
                                <td>
                                    <p class="truncated-lines line-1">Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. Repellendus minus excepturi fuga iure, nulla fugiat ipsa, voluptatem
                                        labore sequi ad, saepe incidunt sint laudantium harum atque praesentium maxime
                                        eligendi sed aut voluptate obcaecati quis a eveniet! Officia, repellendus
                                        delectus ipsa aut voluptas, enim sapiente consequuntur illum consectetur rem
                                        optio dicta modi labore quibusdam deleniti at quia, mollitia hic ipsam corrupti
                                        ducimus dolore sit. Voluptatem suscipit perferendis debitis velit aspernatur
                                        voluptate veritatis, dolorum quam temporibus consectetur fugit non iste illo
                                        ipsum ducimus fuga consequuntur, repellat ratione natus labore? Qui libero
                                        repellat voluptatem rem voluptas numquam eos maiores culpa fugiat consequuntur,
                                        reprehenderit ipsam quibusdam nesciunt reiciendis at in vitae? Neque aut harum
                                        quis corrupti fugit necessitatibus quibusdam in. Suscipit odio magnam itaque cum
                                        deleniti id autem! Aliquid hic consequatur repellat veniam sed mollitia beatae
                                        ullam aut placeat repudiandae, tenetur iure numquam modi, praesentium
                                        exercitationem reiciendis doloremque sit maxime velit eveniet blanditiis tempore
                                        quibusdam non ut. Sunt in voluptatibus optio praesentium repellendus. Numquam
                                        temporibus omnis dolores ipsum aut sequi est quasi quas veritatis assumenda amet
                                        inventore officiis expedita vitae repellat, facere, quis iusto nobis aliquam a
                                        hic perspiciatis pariatur in suscipit? Reiciendis rem a neque vel commodi
                                        voluptatum, sed error numquam at cum.</p>
                                </td>
                                <td>5 oct 2022, 13:30</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Adam Smasher</td>
                                <td>User</td>
                                <td>Adam Smasher</td>
                                <td>
                                    <p class="truncated-lines line-1">Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. Repellendus minus excepturi fuga iure, nulla fugiat ipsa, voluptatem
                                        labore sequi ad, saepe incidunt sint laudantium harum atque praesentium maxime
                                        eligendi sed aut voluptate obcaecati quis a eveniet! Officia, repellendus
                                        delectus ipsa aut voluptas, enim sapiente consequuntur illum consectetur rem
                                        optio dicta modi labore quibusdam deleniti at quia, mollitia hic ipsam corrupti
                                        ducimus dolore sit. Voluptatem suscipit perferendis debitis velit aspernatur
                                        voluptate veritatis, dolorum quam temporibus consectetur fugit non iste illo
                                        ipsum ducimus fuga consequuntur, repellat ratione natus labore? Qui libero
                                        repellat voluptatem rem voluptas numquam eos maiores culpa fugiat consequuntur,
                                        reprehenderit ipsam quibusdam nesciunt reiciendis at in vitae? Neque aut harum
                                        quis corrupti fugit necessitatibus quibusdam in. Suscipit odio magnam itaque cum
                                        deleniti id autem! Aliquid hic consequatur repellat veniam sed mollitia beatae
                                        ullam aut placeat repudiandae, tenetur iure numquam modi, praesentium
                                        exercitationem reiciendis doloremque sit maxime velit eveniet blanditiis tempore
                                        quibusdam non ut. Sunt in voluptatibus optio praesentium repellendus. Numquam
                                        temporibus omnis dolores ipsum aut sequi est quasi quas veritatis assumenda amet
                                        inventore officiis expedita vitae repellat, facere, quis iusto nobis aliquam a
                                        hic perspiciatis pariatur in suscipit? Reiciendis rem a neque vel commodi
                                        voluptatum, sed error numquam at cum.</p>
                                </td>
                                <td>5 oct 2022, 13:30</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Yorinobu Arasaka</td>
                                <td>Car</td>
                                <td>Mercedes-AMG GT 53</td>
                                <td>
                                    <p class="truncated-lines line-1">Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. Repellendus minus excepturi fuga iure, nulla fugiat ipsa, voluptatem
                                        labore sequi ad, saepe incidunt sint laudantium harum atque praesentium maxime
                                        eligendi sed aut voluptate obcaecati quis a eveniet! Officia, repellendus
                                        delectus ipsa aut voluptas, enim sapiente consequuntur illum consectetur rem
                                        optio dicta modi labore quibusdam deleniti at quia, mollitia hic ipsam corrupti
                                        ducimus dolore sit. Voluptatem suscipit perferendis debitis velit aspernatur
                                        voluptate veritatis, dolorum quam temporibus consectetur fugit non iste illo
                                        ipsum ducimus fuga consequuntur, repellat ratione natus labore? Qui libero
                                        repellat voluptatem rem voluptas numquam eos maiores culpa fugiat consequuntur,
                                        reprehenderit ipsam quibusdam nesciunt reiciendis at in vitae? Neque aut harum
                                        quis corrupti fugit necessitatibus quibusdam in. Suscipit odio magnam itaque cum
                                        deleniti id autem! Aliquid hic consequatur repellat veniam sed mollitia beatae
                                        ullam aut placeat repudiandae, tenetur iure numquam modi, praesentium
                                        exercitationem reiciendis doloremque sit maxime velit eveniet blanditiis tempore
                                        quibusdam non ut. Sunt in voluptatibus optio praesentium repellendus. Numquam
                                        temporibus omnis dolores ipsum aut sequi est quasi quas veritatis assumenda amet
                                        inventore officiis expedita vitae repellat, facere, quis iusto nobis aliquam a
                                        hic perspiciatis pariatur in suscipit? Reiciendis rem a neque vel commodi
                                        voluptatum, sed error numquam at cum.</p>
                                </td>
                                <td>5 oct 2022, 13:30</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

</script>

<style scoped>
.border-table {
    border: solid 4px #2f2f2f;
}

.styled-table {
    border-collapse: collapse;
    font-size: 0.9em;
    width: 100%;
    height: 100%;
    table-layout: auto;
    background: #2f2f2f;
}

tbody {
    display: block;
    width: 100%;
    overflow-y: auto;
    height: 100%;
    border-radius: .8rem;
    background: #e5e5ea;
}

thead tr {
    display: block;
}

th,
td {
    width: 500px;
}

th {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 2;
}

.styled-table thead tr {
    background-color: #2f2f2f;
    color: #f5f5f7;
    text-align: center;
}

.styled-table th,
.styled-table td {
    padding: 12px 16px;
}

.styled-table tbody tr {
    border-bottom: 1px solid #f5f5f7;
}

.styled-table tbody tr:nth-of-type(odd) {
    background-color: #f5f5f7;
    /* color: var(--pink); */
}

.styled-table tbody tr:nth-of-type(even) {
    background: #e5e5ea;
}

.styled-table tbody tr:nth-last-child(1) {
    border: none;
}

.styled-table tbody tr:nth-last-child(1) td:nth-last-child(1) {
    border-radius: 0 0 .8rem 0;
}

.styled-table tbody tr:nth-last-child(1) td:nth-child(1) {
    border-radius: 0 0 0 .8rem;
}
</style>