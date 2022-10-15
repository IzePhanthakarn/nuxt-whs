<template>
    <div class="w-full h-full flex flex-col text-default">
        <div class="w-full bg-gray4 rounded-xl text-white flex items-center p-3 space-x-2">
            <base-icon icon="thumbs-updown" size="40"></base-icon>
            <h1 class="text-3xl font-medium">Review</h1>
        </div>

        <div class="w-full bg-gray3 mt-5 rounded-t-xl flex flex-col px-5 py-3 text-default">
            <div class="w-full flex items-center justify-between">
                <base-input type="text" label="Name" placeholder="User's name" class="w-96"/>
                <div class="flex items-center space-x-5">
                    <div>
                        <h1 class="font-medium">Score</h1>
                        <div class="select w-24 text-black pl-2.5">
                            <select name="" id="">
                                <option value="all" selected>All</option>
                                <option value="5">5 Star</option>
                                <option value="4">4 Star</option>
                                <option value="3">3 Star</option>
                                <option value="2">2 Star</option>
                                <option value="1">1 Star</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <h1 class="font-medium">Comment</h1>
                        <div class="select w-24 text-black pl-2.5">
                            <select name="" id="">
                                <option value="all" selected>All</option>
                                <option value="1">Have a comment</option>
                                <option value="0">No comment</option>
                            </select>
                        </div>
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
                                <th>Score</th>
                                <th>Comment</th>
                                <th>Review date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Phanthakarn Khumphai</td>
                                <td>5 Star</td>
                                <td>No comment</td>
                                <td>1 oct 2022, 13.00</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Waraphon Chuinim</td>
                                <td>4 Star</td>
                                <td>Good</td>
                                <td>1 oct 2022, 13.00</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Devid Martinez</td>
                                <td>5 Star</td>
                                <td>Exellent</td>
                                <td>1 oct 2022, 13.00</td>
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