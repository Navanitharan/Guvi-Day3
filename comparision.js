let obj1={name:"person", age:5};
let obj2={age:6, name:"person"};
let res=true;

let parob1=JSON.parse(JSON.stringify(obj1));
let parob2=JSON.parse(JSON.stringify(obj2));

for(let key of Object.keys(parob1)){
    
 if(parob1[key]===parob2[key]){
     res=true
 }
 else{
     res=false;
     break;
 }
}

console.log(res);
