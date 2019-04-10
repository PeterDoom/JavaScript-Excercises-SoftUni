//Regex exam problem that can be found here -> https://judge.softuni.bg/Contests/Practice/Index/1628#1


function deciphering(args) {

    let text = args[0]
    let subStringers = args[1].split(" ")

    function checker(text) {
        let bool = true
        let pattern = /^([d-z]+#*\|*\}*\{*)+$/gm
        if (!pattern.test(text)) {
            bool = false;
            return bool
        }
        return bool
    }

    function initialDecipher(text) {
        let stringBuilder = "";

        for (let char of text) {
            let numberOfChar = char.charCodeAt(0)
            stringBuilder += String.fromCharCode(numberOfChar - 3)
        }
        return stringBuilder
    }

    if (checker(text)) {


        let string = initialDecipher(text)
        string = string.split(" ")
        let arr = [];

        for (let word of string) {
            if (word.includes(subStringers[0])) {
                word = word.replace(subStringers[0], subStringers[1])
                arr.push(word)
            } else {
                arr.push(word)
            }
        }
        console.log(arr.join(" "))
    }else{
        console.log(`This is not the book you are looking for.`)
    }


}

deciphering(["arx#vkdww#qrw#sdvv",
    "t l"
])

deciphering(["wkhfn#|rx#jhqfkr#phf#exw#|rxu#uholf#lv#khfgohg#lq#hfrwkhu#sohfhw",
"ec an"])