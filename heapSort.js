function heapSort(arr){
    let n=arr.length
    for(let i=Math.floor((n-1)/2);i>=0;i--){
        heapify(arr,n,i)
    }
    
    for(let i=n-1;i>=0;i--){
        [arr[0],arr[i]]=
        [arr[i],arr[0]]
        heapify(arr,i,0)
    }
    
    return arr
}
function heapify(arr,n,i){
    let large=i
    let left=2*i+1
    let right=2*i+2
    if(left<n&&arr[large]<arr[left]){
        large=left
    }
    if(right<n&&arr[large]<arr[right]){
        large=right
    }
    if(i!=large){
        [arr[i],arr[large]]=
        [arr[large],arr[i]]
        heapify(arr,n,large)
    }
}
console.log(heapSort([1,2,3,4,5]))