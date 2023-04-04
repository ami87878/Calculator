 
 
 const operator=[

    document.getElementsByName("+")[0].value,//0
    document.getElementsByName("-")[0].value,//1
     document.getElementsByName("*")[0].value,//2
     document.getElementsByName("/")[0].value,//3
     document.getElementsByName("=")[0].value,//4
     document.getElementsByName("1")[0].value,//5   
     document.getElementsByName("2")[0].value,//6
     document.getElementsByName("3")[0].value,//7
     document.getElementsByName("4")[0].value,//8
     document.getElementsByName("5")[0].value,//9
     document.getElementsByName("6")[0].value,//10
     document.getElementsByName("7")[0].value,//11
     document.getElementsByName("8")[0].value,//12
     document.getElementsByName("9")[0].value,//13
     document.getElementsByName("0")[0].value,//14

 ];

const operatorAsNumber=[];

 for(let n=0;n<=4;n++){


    
  
operatorAsNumber.push(operator[n]);






 }
for(let t=5;t>=5&&t<=14;t++){


operatorAsNumber.push(Number(operator[t]));






}










