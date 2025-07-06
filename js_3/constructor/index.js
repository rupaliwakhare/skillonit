// let arr =[1,2,3,4,5,6,7]
// console.log(typeof arr);

// let a = nikeData();


// function nikeData(){
//     let nike_obj = {};

//     nike_obj.name = "airforce";
//     nike_obj.price = 20000;

//     return nike_obj
// }
// console.log(a);


// using a,b

// function nikeData(a,b){
//     let nike_obj = {};

//     nike_obj.name = a,
//     nike_obj.price = b

//     return nike_obj
// }

// let a = nikeData("Air force",25000);
// console.log(a);


// using consructer

// function studentData(x,y){
//     // this{};
//     this.name = x,
//     this.class = y
//     }

//     let b = new studentData("rupal",10)
//     console.log(b);
    


// function classData(y,z){
//     this.batch = y,
//     this.time = z

//     return this

// }
// let c = new classData("1st",11)
// console.log(c);


// function data(a,b,c,d,e,f,){
//     this.batch = a,
//     this .name = b
//     this.ro__no = c,
//     this.class = d,
//     this.age = e,
//     this.field = f
//     return this
// }
// let dataget = new data(1,45,34758,12,18,34)
// console.log(dataget);



function data(x,y,z){
    this.age = x,
    this.class = y,
    this.bench_no = z
    return this 
}
let d = new data(15,10,5)
console.log(d);
