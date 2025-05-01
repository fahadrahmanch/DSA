
// for(let i=0;i<a.length-1;i++){
//     for(let j=0;j<a.length-1-i;j++){
//         if(a[j]>a[j+1]){
//             let tem=a[j]
//             a[j]=a[j+1]
//             a[j+1]=tem
//         }
//     }
// }
// for(let i=1;i<a.length;i++){
//     let curr=a[i]
//     let j=i-1
//     while(j>=0&&curr<a[j]){
//         a[j+1]=a[j]
//         j--
//     }
//     a[j+1]=curr
// }
// for(let i=0;i<a.length-1;i++){
//     for(j=i+1;j<a.length;j++){
//         if(a[i]>a[j]){
//             let tem=a[i]
//             a[i]=a[j]
//             a[j]=tem
//         }
//     }
// }




// function quick(arr){
//     if(arr.length<=1){
//         return arr
//     }
//     let left=[]
//     let right=[]
//     let eq=[]
   
//     let pivot=arr[arr.length-1]
//     for(let i=0;i<arr.length;i++){
//         // if(arr[i]===pivot) continue
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else if(arr[i]>pivot){
//             right.push(arr[i])
//         }else{
//             eq.push(arr[i])
//         }
//     }
//     return [...quick(left),...eq,...quick(right)]
// }

let a=[8,8,23,5,1,5]

function mergeSort(arr){
    if(arr.length<=1){
        return arr
    }
    let mid=Math.floor(arr.length/2)
    let left=mergeSort(arr.slice(0,mid))
    let right=mergeSort(arr.slice(mid))
    return merge(left,right)
}
function merge(left,right){
    let result=[]
    while(left.length&&right.length){
        if(left[0]<right[0]){
            result.push(left.shift())
        }else{
            result.push(right.shift())
        }
    }
    return result.concat(left,right)
}


console.log(mergeSort(a))














