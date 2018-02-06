"use strict";
var User = (function () {
    function User() {
        this.email = "";
        this.address = new UserAddress();
    }
    return User;
}());
exports.User = User;
var UserAddress = (function () {
    function UserAddress() {
    }
    return UserAddress;
}());
exports.UserAddress = UserAddress;
var DefaultUsers = (function () {
    function DefaultUsers() {
        this._users = [
            {
                "id": 1,
                "name": "Leanne Graham",
                "email": "Sincere@april.biz",
                "address": {
                    "street": "Kulas Light",
                    "suite": "Apt. 556",
                    "city": "Gwenborough",
                    "zipcode": "92998-3874",
                },
                "phone": "1-770-736-8031 x56442",
            },
            {
                "id": 2,
                "name": "Ervin Howell",
                "email": "Shanna@melissa.tv",
                "address": {
                    "street": "Victor Plains",
                    "suite": "Suite 879",
                    "city": "Wisokyburgh",
                    "zipcode": "90566-7771",
                },
                "phone": "010-692-6593 x09125",
            },
            {
                "id": 3,
                "name": "Clementine Bauch",
                "email": "Nathan@yesenia.net",
                "address": {
                    "street": "Douglas Extension",
                    "suite": "Suite 847",
                    "city": "McKenziehaven",
                    "zipcode": "59590-4157",
                },
                "phone": "1-463-123-4447",
            },
            {
                "id": 4,
                "name": "Patricia Lebsack",
                "email": "Julianne.OConner@kory.org",
                "address": {
                    "street": "Hoeger Mall",
                    "suite": "Apt. 692",
                    "city": "South Elvis",
                    "zipcode": "53919-4257",
                },
                "phone": "493-170-9623 x156",
            },
            {
                "id": 5,
                "name": "Chelsey Dietrich",
                "email": "Lucio_Hettinger@annie.ca",
                "address": {
                    "street": "Skiles Walks",
                    "suite": "Suite 351",
                    "city": "Roscoeview",
                    "zipcode": "33263",
                },
                "phone": "(254)954-1289",
            },
            {
                "id": 6,
                "name": "Mrs. Dennis Schulist",
                "email": "Karley_Dach@jasper.info",
                "address": {
                    "street": "Norberto Crossing",
                    "suite": "Apt. 950",
                    "city": "South Christy",
                    "zipcode": "23505-1337",
                },
                "phone": "1-477-935-8478 x6430",
            },
            {
                "id": 7,
                "name": "Kurtis Weissnat",
                "email": "Telly.Hoeger@billy.biz",
                "address": {
                    "street": "Rex Trail",
                    "suite": "Suite 280",
                    "city": "Howemouth",
                    "zipcode": "58804-1099",
                },
                "phone": "210.067.6132",
            },
            {
                "id": 8,
                "name": "Nicholas Runolfsdottir V",
                "email": "Sherwood@rosamond.me",
                "address": {
                    "street": "Ellsworth Summit",
                    "suite": "Suite 729",
                    "city": "Aliyaview",
                    "zipcode": "45169",
                },
                "phone": "586.493.6943 x140",
            },
            {
                "id": 9,
                "name": "Glenna Reichert",
                "email": "Chaim_McDermott@dana.io",
                "address": {
                    "street": "Dayna Park",
                    "suite": "Suite 449",
                    "city": "Bartholomebury",
                    "zipcode": "76495-3109",
                },
                "phone": "(775)976-6794 x41206",
            },
            {
                "id": 10,
                "name": "Clementina DuBuque",
                "email": "Rey.Padberg@karina.biz",
                "address": {
                    "street": "Kattie Turnpike",
                    "suite": "Suite 198",
                    "city": "Lebsackbury",
                    "zipcode": "31428-2261",
                },
                "phone": "024-648-3804",
            }
        ];
    }
    DefaultUsers.prototype.getDefaultUserList = function () {
        return this._users;
    };
    return DefaultUsers;
}());
exports.DefaultUsers = DefaultUsers;
//# sourceMappingURL=User.js.map