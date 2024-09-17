let arr=[6,13,22,18,0,3,45,57,5,12]

// var n = arr.sort((a,b)=>b-a);
// console.log(arr[1])

let max=arr[0];

let secondMax=-Infinity ;

for(let i=0;i<arr.length;i++){

    if(arr[i]>max){

        secondMax=max

        max=arr[i]

    }else if(max>arr[i] && secondMax<arr[i]){

        secondMax=arr[i]

    }

}

console.log(secondMax)


// if(arr.length <2){

// }else{

//   let max1=arr[0]>arr[1]?arr[0]:arr[1];
//   let max2=arr[0]>arr[1]?arr[1]:arr[0];
  
//   for(let i=2;i<arr.length-1;i++){
//     if(arr[i] != max1){

//       max2=arr[i]>max1?max1:arr[i]>max2?arr[i]:max2;
//       max1=arr[i]>max1?arr[i]:max1;
//     }
//   }
//   console.log(max1,max2)
// }