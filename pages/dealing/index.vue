<template>
    <div class="w-full h-full flex flex-col text-default">
        <div class="w-full bg-gray4 rounded-xl text-white flex items-center p-3 space-x-2">
            <base-icon icon="handshake" size="40"></base-icon>
            <h1 class="text-3xl font-medium">Dealing</h1>
        </div>
        <div class="w-full h-full bg-gray3 rounded-xl mt-5 flex items-center justify-center">
            <h1 class="nodeal bg-gray px-60 py-32 text-6xl font-semibold text-white rounded-2xl hidden">No dealing now.</h1>
            <div class="w-full h-full mt-2 rounded-2xl p-4">
                <div class="h-full border-table overflow-y-hidden rounded-2xl">
                    <table class="styled-table text-black font-semibold text-center">
                        <thead class="text-xl font-normal">
                            <tr>
                                <th>Car's Name</th>
                                <th>Trading</th>
                                <th>Trading with</th>
                                <th>Status</th>
                                <th>Latest Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>BMW M8</td>
                                <td class="text-success">Buy</td>
                                <td>Waraphon Chuinim</td>
                                <td class="text-gray">Negotiating..</td>
                                <td>5 Oct 2022 13:30</td>
                            </tr>
                            <tr>
                                <td>Honda NSX</td>
                                <td class="text-primary">Sell</td>
                                <td>Phanthakarn Khumphai</td>
                                <td class="text-orange">Paying..</td>
                                <td>5 Oct 2022 13:30</td>
                            </tr>
                            <tr>
                                <td>Audi R8</td>
                                <td class="text-success">Buy</td>
                                <td>Devid Martinez</td>
                                <td class="text-purple">Sending..</td>
                                <td>5 Oct 2022 13:30</td>
                            </tr>
                            <tr>
                                <td>Honda Civic</td>
                                <td class="text-primary">Sell</td>
                                <td>Adam Smasher</td>
                                <td class="text-success">Success</td>
                                <td>5 Oct 2022 13:30</td>
                            </tr>
                            <tr>
                                <td>Mercedes-AMG GT 53</td>
                                <td class="text-primary">Sell</td>
                                <td>Yorinobu Arasaka</td>
                                <td class="text-primary">Cancel</td>
                                <td>5 Oct 2022 13:30</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.nodeal {
    border-bottom: solid 2px var(--pink);
}

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
.styled-table tbody tr:nth-last-child(1){
    border: none;
}
.styled-table tbody tr:nth-last-child(1) td:nth-last-child(1){
    border-radius: 0 0 .8rem 0;
}
.styled-table tbody tr:nth-last-child(1) td:nth-child(1){
    border-radius: 0 0 0 .8rem;
}
</style>