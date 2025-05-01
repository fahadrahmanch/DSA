// function change(str, key){
//  let newKey=key%26
//  let char=[]
//  for(let i=0;i<str.length;i++){
//     let letterPosition=str.charCodeAt(i)+newKey
//     if(letterPosition<=122){
//         char[i]=String.fromCharCode(letterPosition)
//     }else{
//         char[i]=String.fromCharCode(96 + (letterPosition - 122))
//     }
    
// }
// return char.join('')
// }
// console.log(change("Zai",2))
function change(str, key) {
    let newKey = key % 26;
    let char = [];

    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        let letterPosition = str.charCodeAt(i) + newKey;

        if (letter >= "A" && letter <= "Z") {
            // Handling uppercase letters
           
            if (letterPosition > 90) {
                console.log("sui")
                letterPosition = 64 + (letterPosition - 90);
            }
        } else if (letter >= "a" && letter <= "z") {
           
            // Handling lowercase letters
            if (letterPosition > 122) {
                console.log("sh")
                letterPosition = 96 + (letterPosition - 122);
            }
        }

        char[i] = String.fromCharCode(letterPosition);
    }

    return char.join('');
}

console.log(change("Zai", 2)); // Output: "Bck"
