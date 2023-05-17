// 'use strict';
// const get_fullname=(First_Name,last_name)=>First_Name + ' ' +last_name;
// let student={
//     First_Name:'sharif',
//     last_name:'ahmed',
//     Roll:5,
//     Department:'CSE'
// }
// console.table(student);
// console.log( get_fullname(student.First_Name,student.last_name));
// console.log(student.Department);




let student1={
    first_name:'sharif',
    second_name:'Ahmed',
    Hello:[394,544,6456],
    full_name:function()
    {
     
        return this.first_name + ' ' + this.second_name;
         
        

    }
}

let student2={
    first_name:'tarek',
    second_name:'Islam'
}
console.log(student1['first_name']);
console.log(student1.full_name());
console.log(student1.full_name.call(student2));

// let student1={
//     first_name:'sharif',
//     second_name:'Ahmed',
//     Hello:[394,544,6456],
//     full_name:function(First=this.first_name,second=this.second_name){
     
//         return  First + ' ' + second ;
         
        

//     }
// }

// console.log(student1.full_name());
// console.log(student1.full_name.call('shsri','dfdf','dfdh'));







