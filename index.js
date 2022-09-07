// Code your solutions in this file
function writeCards(names,something){
    const newarray=[];
for(let i =0 ; i < names.length;i++){
    var string = `Thank you, ${names[i]}, for the wonderful ${something} gift!`;
    newarray.push(string);
}
return newarray;
}

function countDown(number){
for(let i=number; i >=0;i--)
console.log(i);
}

