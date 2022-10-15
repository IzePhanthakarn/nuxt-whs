<template>
    <div class="w-full h-full flex flex-col text-default">
        <div class="w-full bg-gray4 rounded-xl text-white flex items-center p-3 space-x-2">
            <base-icon icon="user-square" size="40"></base-icon>
            <h1 class="text-3xl font-medium">User</h1>
        </div>

        <div class="w-full bg-gray3 mt-5 rounded-t-xl flex flex-col px-5 py-3 text-default">
            <div class="w-full flex items-center space-x-5">
                <base-input type="text" label="Name" placeholder="User's name" />
                <base-input type="text" label="Email" placeholder="abc@mail.com" />
                <base-input type="phone" label="Phone" placeholder="Telephone number" />
            </div>
            <div class="ml-auto mr-0 mt-2 flex items-center space-x-5">
                <div>
                    <h1 class="font-medium">Role</h1>
                    <div class="select w-24 text-black pl-2.5">
                        <select name="" id="">
                            <option value="all" selected>All</option>
                            <option value="buy">Buyer</option>
                            <option value="sell">Seller</option>
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
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Phanthakarn Khumphai</td>
                                <td>izephanthakarn@hotmail.com</td>
                                <td>0983405579</td>
                                <td>Admin</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Waraphon Chuinim</td>
                                <td>snooker143@gmail.com</td>
                                <td>0929255768</td>
                                <td>Buyer</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Devid Martinez</td>
                                <td>martinez_dev@gmail.com</td>
                                <td>0987654321</td>
                                <td>Seller</td>
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