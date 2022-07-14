//for loop


var myHeart = ["aurora","nimara","sobuj","rahat","rohan"];
for( i = 0; i < myHeart.length; i++ ){
    console.log(myHeart[i])
}

var myHeart = ["aurora","nimara","sobuj","rahat","rohan"];
for( i = 3; i < myHeart.length; i++ ){  
    console.log(myHeart[i])
}
 var num = "you"
for( i = 0; i < num.length; i++ ){
    console.log(num[i])
}
var num = "youshi"
for( i = 0; i < num.length; i++){
    console.log(num[i])
}



//while loop
var youshi = 20
while(youshi < 40){
    console.log("i hate js");
    youshi++
}


var youshi = 20 
var aurora = 10
while( youshi > aurora){
  console.log("i love tomie");
  aurora++
 }
 //function

function eidShoping( aurora , youshi){
    var total = aurora + youshi;
    console.log(total)
}

eidShoping(300,4500)

function christmasShoping(){

    var ourShoping = 5500;
    var homeDacoration = 5000;

console.log( ourShoping + homeDacoration)

}

console.log("total amount")
christmasShoping()



function doll(num1){
    var totalDoll = num1 * 3 ;
    return totalDoll
}

var a = doll(5)
var b = doll(15)
console.log(a + b)

//object

var mySelf = {name:"youshi",address:"ctg port", brother:"aurora",class:10};
console.log(mySelf.address)
var num1 = mySelf["class"]
var num2 = mySelf["address"]
var num3 = mySelf["brother"]
var num4 = mySelf["name"]
console.log(num3)
console.log(num1)


function About(name,Class,address,like){
    this.name = name;
    this.Class = Class;
    this.address = address;
    this.like = like;
    
}

var obj = new About("youshi",10,"ctg port","aurora");
console.log(obj)


function AboutAurora(name,like,life,hobby){
    this.name = name;
    this.like = like;
    this.life = life;
    this.hobby = hobby;
}

 var objt = new AboutAurora("Aurora","Esha","youshi","reading")
 console.log(objt)

function About(name,Class,address,like){
    this.name = name;
    this.Class = Class;
    this.address = address;
    this.like = like;
    this.allInfo = function(){
     
        console.log(this.name)
        console.log(this.Class)
        console.log(this.address)
        console.log(this.like)
    }
    
}

var obj = new About("youshi",10,"ctg port","aurora");
obj.allInfo()


//date object

 var myDate = new Date();

 console.log(myDate.toLocaleTimeString())

 console.log(myDate.getHours())

 console.log(myDate.getDay())

 console.log(myDate.setMonth())

 console.log(myDate.getMilliseconds())


 console.log(myDate.toTimeString())

 console.log(myDate.setMinutes())

 //simple math

 
var num1 = -40;
var sum = Math.abs(num1)
console.log(sum)

var totalbBook = 15;
var youshiHave = 7;
var auroraHave =  totalbBook - youshiHave;
console.log(auroraHave) 

var num = 0.00001;
var sum = Math.ceil(num)
console.log(sum)

var num = 0.5;
var sum = Math.floor(num)
console.log(sum)

console.log(mathNumber)
var mathNumber = Math.random() * 100;

 var a = 7;
var b = 5;

if(a > b){
    console.log("a boro");
}

//english result

var Youshi = 60;
var Aurora = 86;

if( Aurora > Youshi){
    console.log("Aurora say 'ye boi ami tomar thake talented'")
}


// dhaka to chittagong flight ticket price'promo'

var Novoair = 4000;
var regent = 4200;

if(Novoair < regent){
    console.log(" Aurora say 'Novoair sosta Novoair e Chol'")
}
else{
    console.log("Youshi say 'amar kicho bolar nai'");
}

// jodi Abbu Ammu amar birthday te taka gift korto

var AbburGift = 700;
var ammurGift = 1400;

var totalTaka = AbburGift + ammurGift;
console.log(totalTaka)

if( AbburGift < ammurGift){
    console.log("abbu say 'amar pocket theke taka mere vab dekaw :[ '")
}
else{
    console.log( " ammu say-amar kno love loss nai amar jibontai loss")

    
var aurora = 20;
var youshi = 19;
 var obj = (aurora < youshi) ? "i am 20" : "i am 19"
 console.log(obj)
}


 //array


 var myHeart = ["aurora","nimara","sobuj","rahat","rohan","sewashi","afrin","ibrahim","abir","Ema","rafi",]
            
 var friend = myHeart[5]
 console.log(friend)


 var myHeart = ["aurora","nimara","sobuj","rahat","rohan","sewashi","afrin","ibrahim","abir","Ema","rafi",]

 myHeart[6] = " aFRIN ekta bolod";
 console.log(myHeart[6])


 var myHeart = ["aurora","nimara","sobuj","rahat","rohan","sewashi","afrin","ibrahim","abir","Ema","rafi",]

 myHeart.push("ovi")
console.log(myHeart)          


var myHeart = ["aurora","nimara","sobuj","rahat","rohan","sewashi","afrin","ibrahim","abir","Ema","rafi",]

myHeart.pop()
console.log(myHeart);

var myHeart = ["aurora","nimara","sobuj","rahat","rohan","sewashi","afrin","ibrahim","abir","Ema","rafi",]
myHeart.shift()
console.log(myHeart)


var myHeart = ["aurora","nimara","sobuj","rahat","rohan","sewashi","afrin","ibrahim","abir","Ema","rafi",];
myHeart.unshift("siam")
console.log(myHeart)



//slice


var myHeart = ["aurora","nimara","sobuj","rahat","rohan","sewashi","afrin","ibrahim","abir","Ema","rafi",];
console.log(myHeart.slice(5,6));

var myHeart = ["aurora","nimara","sobuj","rahat","rohan","sewashi","afrin","ibrahim","abir","Ema","rafi",];
console.log(myHeart.slice(3,4));



var myHeart = ["aurora","nimara","sobuj","rahat","rohan","sewashi","afrin","ibrahim","abir","Ema","rafi",];
console.log(myHeart.slice(6,8));



//splice


var myHeart = ["aurora","nimara","sobuj","rahat","rohan","sewashi","afrin","ibrahim","abir","Ema","rafi",];
myHeart.splice(3,5,"armin","ishmam")
console.log(myHeart);




//switch

var num = 24;

switch(num){
    case 7:
        console.log("may i")
        break;
    case 17 :
        console.log("may i 2")
        break;    
    case 6 :
        console.log("may i 3") 
        break;
    case 5 :
        console.log("may i 4") 
        break;
    case 24 :
        console.log("may i 5")
        break;
    case 43:
        console.log("may i 6")
        break;
    case 73 :
        console.log("may i 7")
        break;
    case 93:
        console.log("may i 8")
        break;
    case 86:
        console.log("may i 9")
        break;
    
}


var youshi = 50;
for(aurora = 1 ; aurora <= youshi; aurora++){
    if( aurora  == 25){
    console.log("hulf position")}
 
console.log(aurora)
    }


    var youshi = 100

    for( aurora = 1 ; aurora <= youshi ; aurora++){   
        if( aurora == 25){
        console.log("we reach in 25");
        }
        if( aurora == 50){
            console.log("we reach in 50");
            }
            if( aurora == 75){
                console.log("we reach in 75");
                }
                
    
        console.log(aurora)
    }
    var aurora = 60;
var youshi = 40;
var rahat = 90 ;
var esha = 58;
function who(){
    console.log(aurora)
}

function he(){
    console.log(youshi)
}

function him(){
    console.log(rahat)
}

function she(){
    console.log(esha)
}


if( who > she ){
    console.log("im Aurora")
}
else{
    console.log( " i am esha")
}
if( he > him ){
    console.log("im youshi")

}
else{
    console.log(" i am rahat")
}



var team1 = (aurora + esha)
var team2 = (rahat + youshi)

console.log(team1 + team2)

