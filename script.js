let string = '!!!hi!'
let number = +prompt('son kriting')
function exclamation(str, num) {
    let newSTR = str
    for (let i = 0; i < num; i++) {
        newSTR = newSTR.replace('!', '');
    }
    console.log(newSTR);
}
exclamation(string, number)
