// document.write('<h2>hello</h2>')
// document.write('<h2>hello</h2>')
// document.write('<h2>hello</h2>')
// document.write('<h2>hello</h2>')
// document.write('<h2>hello</h2>')

// window.alert('Your document \n is submited')
// document.getElementById("demo").innerHTML = "Hello Dolly."

let a;
a=10;
console.log(a);

a--;
console.log('++:' ,a);
console.log('++:' , a**2);
//strings
let sharif;
sharif = "this \"is sharif ahmed'sharif'";
console.log(sharif);
//number
let tarek,age;
age=20;
// tarek=`tarek age is ${age} `;
tarek="tarek age " +age;
console.log(tarek );

//bigint
let e;
e= BigInt("123456789012345678901234567890");
console.log(e);

//boolean
let n=3;
let m=5;
let o=5;

console.log(n==m);
console.log(m==o);


//undefined
let p;
console.log(p);

//Null
let d,g;
g=10;
d=30;
console.log(d ,g);

//symbol
let q;
q= Symbol ("sharif");
console.log(typeof q);

//Object
const student={Name:"Rakib", roll:39,Grade:"A+"};
console.log(student.Name);
console.log( student);

//Array
let arr;
arr=["sharif",
    39,
    {
        Name:'Sharif',
        Roll:39,
        Grade:'fail'
    },
    [
        "shairf",
        39,
        8949.455
    ]
    
];
console.log(typeof arr);
console.log(arr);

///Function
function sum(){
    let s=10;
}
console.log(typeof new sum);