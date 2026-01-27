// function demo(){
//     let b = 20;
//     console.log(b);
// }
// demo()


let user = {
    Fullname: "SNEHANSH",
    address: "Gurugram",
    Mobile: 1234567890,
    fav_color: ["Blue","Red","Yellow"]
}
// console.log(user.address);
// console.log(user.fav_color[1]);
// console.log(Object.keys(user));
// console.log(Object.values(user));

const car = {
    make: "Mahindra",
    model: "Thar",
};

Object.freeze(car);
Object.seal(car);

car.model = "XEV 9E";
car.color = "Blue";
console.log(car);