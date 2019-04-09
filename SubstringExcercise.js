function findSubstring (wordToSearch, textToSearch){

    let text = textToSearch.split(" ")

    for(let word of text){
        let toCompare = word.toLowerCase()
        if(toCompare.includes(wordToSearch.toLowerCase())){
            let index = text.indexOf(word);
            text.splice(index,1)
        }
    }

    text.forEach((value,index) => console.log(`idx[${index}] -> ${value}`))
}

findSubstring('wel','University!')