//this is a function that gets a 3 line input, takes the words, each word is split with a " | " and each meaning with ": ".
// if the command is list and the words on the 2nd line exist the program will list all of the words within the Map. 
//if the command is end this will print all of the words with their meanings if the words on the 2nd input exsist. 

function dictonary(args) {

    let initialDict = args.shift().split(" | ")
    let wordsToCheck = args.shift().split(" | ")
    let command = String(args)

    let dictionaryMap = new Map();

    for (const line of initialDict) {
        wordsToDict = line.split(": ")[1]
        let theKey = line.split(": ")[0]

        if (dictionaryMap.has(theKey)) {
            let moreMeanings = [wordsToDict];
            let theResult = dictionaryMap.get(theKey)
            moreMeanings.push(wordsToDict)
            moreMeanings = moreMeanings.concat(theResult)
            moreMeanings.sort((a, b) => b.length - a.length);
            dictionaryMap.set(theKey, moreMeanings)

        } else {
            let definition = wordsToDict[1]
            dictionaryMap.set(theKey, definition)
        }
    }

    let dictMapEntries = [...dictionaryMap.entries()]
        .sort((a, b) => a[0].localeCompare(b[0]))


    if (command === "List") {
        let stringifying = ""
        for (const word of dictMapEntries) {
            stringifying += `${word[0]} `
        }
        console.log(stringifying)
    } else if (command === "End") {
        for (let word of dictMapEntries) {
            let wordToCompare = String(wordsToCheck.shift())

            if (word[0] === wordToCompare) {
                console.log(wordToCompare)
                word.shift()
                if (typeof word[0] === "object") {
                    word[0].forEach(element => console.log(` -${element}`))
                } else {
                    console.log(` -${word}`)
                }
            }

            if (wordsToCheck.length === 0) {
                break
            }
        }
    }


}

dictonary(["tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance",
    "bit | code | tackle",
    "End"
])