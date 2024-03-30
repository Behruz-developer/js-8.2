let string = '!!!hi!'
let number = 2

function exclamation(str, num) {

    for (let i = 0; i < str.length; i++) {
        let newSTR = str.replace('!', '');
        console.log(newSTR);
    }
}
exclamation(string, number)

