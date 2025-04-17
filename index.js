// Code your solutions in this file
const nameList = ["Guadalupe", "Ollie", "Aki"];

function writeCards(array, message) {
    const newNameList = []
    for (let i = 0; i < array.length; i++) {
        newNameList.push(`Thank you, ${array[i]}, for the wonderful ${message} gift!`);
        debugger;
    }

    return newNameList;
}

writeCards(nameList, "surprise");

function countDown(n){
    let count = 0
    while(count <= n){
        console.log(n--);
        debugger; 
    }

}

countDown(10);