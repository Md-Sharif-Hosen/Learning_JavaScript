let aa;
aa=49;
aa+=6
aa++ //post increment
aa--//post decrement
console.log(++aa); //pre increment
console.log(--aa); //pre dicrement

function name(message){
    // console.log('Sharif')
    console.log(message);
    return 0;
}
name("sharif,arif");
name(89);
name([23,345,56,'dfhdr']);
name({
    name:"dhf" ,
    roll:3543
    })
console.log();
console.log();
console.log();

    function tea(type='masala')
    {
        console.log('bought tea type:'+type);
    }
    tea("misty");

    let a=30 //global variable
    function sum(num1,num2){
        console.log(num1+num2);
        console.log("global var:"+a); //global variable
        return 0
    }
    sum(40,59);

    function sub(num1,num2){
        console.log(num1-num2);
        let arr=['sharif',68]; //local variable
        console.log(arr);
        console.log("global var:"+a); //global variable
        return 0
    }
    sub(80,59);

    function mul(num1,num2){
        console.log(num1*num2);
        
        console.log("global var:"+a); //global variable use
        return 0
    }
    mul(80,59); //call by value

    let x=30;
    let y=40;

   mul(x,y);
   sub(x,y);  ///call by reference
   sum(x,y);

   console.log();
   console.log();

function person(given_tk=0,item="",chanachur_price=10){
    console.log(`${item} kinlam ${chanachur_price} ` );
   let return_money=given_tk-chanachur_price;
    return return_money;
}
let money=30;
console.log('hand cash:'+money);

money11= person(money,'chanachu r')
console.log(money11); 

console.log();
console.log();

let money1;
function buy(amount=0,item="",price=0)
{
    console.log(`# ${item} kinlam: ${price}`);
    hand_amount=amount-price;
    return hand_amount;
}
money1=100;
console.log('amar kace cash ace:'+money1 +'\n');

let buy1=buy(money1,'chal',60)
console.log('cash ace:'+ buy1 +"\n" );

let buy2=buy(buy1 ,'1 pis dim',10)
console.log('amar kace cash ace:'+ buy2+'\n');

let buy3=buy(buy2 ,'1 kg piyaj','30')
console.log('amar kace cash ace: '+buy3 );










 
console.log();
console.log();
console.log();