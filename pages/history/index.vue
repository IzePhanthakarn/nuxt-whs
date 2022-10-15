<template>
    <div class="w-full h-full flex flex-col text-default">
        <div class="w-full bg-gray4 rounded-xl text-white flex items-center p-3 space-x-2">
            <base-icon icon="clock-rotate-left" size="40"></base-icon>
            <h1 class="text-3xl font-medium">History</h1>
        </div>

        <div class="w-full bg-gray3 mt-5 rounded-t-xl flex flex-col px-5 py-3 text-default">
            <div class="w-full flex items-center space-x-5">
                <base-input type="text" label="Car's name" placeholder="Audi, BMW, Tesla or others" />
                <base-input type="trading" label="Trading ID" placeholder="#12345" />
                <base-input type="text" label="Trading with" placeholder="Name of buyer or seller" />
            </div>
            <div class="ml-auto mr-0 mt-2 flex items-center space-x-5">
                <div>
                    <h1>Trading</h1>
                    <div class="select w-20 text-black pl-2.5">
                        <select name="" id="">
                            <option value="all" selected>All</option>
                            <option value="buy">Buy</option>
                            <option value="sell">Sell</option>
                        </select>
                    </div>
                </div>

                <div>
                    <h1>Status</h1>
                    <div class="select w-36 text-black pl-2.5">
                        <select name="" id="">
                            <option value="all" selected>All</option>
                            <option value="negotiating">Negotiating</option>
                            <option value="paying">Paying</option>
                            <option value="sending">Sending</option>
                            <option value="success">Success</option>
                            <option value="cancel">Cancel</option>
                        </select>
                    </div>
                </div>

                <div>
                    <h1>Sort By</h1>
                    <div class="select w-44 text-black pl-2.5">
                        <select name="" id="">
                            <option value="lasted" selected>Lasted to Oldest</option>
                            <option value="oldest">Oldest to Lasted</option>
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
                                <th>Trading ID</th>
                                <th>Car's Name</th>
                                <th>Trading</th>
                                <th>Trading with</th>
                                <th>Status</th>
                                <th>
                                    <p class="truncated-lines line-1">Latest Update</p>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>#12345</td>
                                <td>BMW M8</td>
                                <td class="text-success">Buy</td>
                                <td>Waraphon Chuinim</td>
                                <td class="text-gray">Negotiating..</td>
                                <td>5 oct 2022, 13:30</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>#12345</td>
                                <td>Honda NSX</td>
                                <td class="text-primary">Sell</td>
                                <td>
                                    <p class="truncated-lines line-1">Phanthakarn Khumphai</p>
                                </td>
                                <td class="text-orange">Paying..</td>
                                <td>5 oct 2022, 13:30</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>#12345</td>
                                <td>Audi R8</td>
                                <td class="text-success">Buy</td>
                                <td>Devid Martinez</td>
                                <td class="text-purple">Sending..</td>
                                <td>5 oct 2022, 13:30</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>#12345</td>
                                <td>Honda Civic</td>
                                <td class="text-primary">Sell</td>
                                <td>Adam Smasher</td>
                                <td class="text-success">Success</td>
                                <td>5 oct 2022, 13:30</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>#12345</td>
                                <td>Mercedes-AMG GT 53</td>
                                <td class="text-primary">Sell</td>
                                <td>Yorinobu Arasaka</td>
                                <td class="text-primary">Cancel</td>
                                <td>5 oct 2022, 13:30</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

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