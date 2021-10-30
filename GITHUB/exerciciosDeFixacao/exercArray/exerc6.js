let array1 = [1, 2, 3, 4, 5];
let array2 = [10, 20, 30];

function verify(arr){
    if(arr.length >=5){
        console.log("Muitos elementos");
    }else{
        console.log("Poucos elementos");
    }
}

verify(array1);
verify(array2);