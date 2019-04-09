function santaHelper(args) {

    let key = Number(args.shift())
    let pattern = /@([A-Z][a-z]+)[^@\-\!:\>]*!G!/ 
    let goodKids = []
    let debug = [];

    for(let kid of args){
        if(kid === 'end'){
            break
        }
        else{
            let wordBuilder = ""
            for(let char of kid){
                let currentChar = Number(char.charCodeAt(0)) - key;
                wordBuilder+= String.fromCharCode(currentChar)
            }
            debug.push(wordBuilder)
            if(pattern.test(wordBuilder)){
                let goodKid = pattern.exec(wordBuilder)
                goodKids.push(goodKid[1])
            } 
        }
    }
    
    goodKids.forEach((value)=>console.log(value))

}

santaHelper(["4",
    "~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%",
    "0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf",
    ";:<lyiljz{onzDPere=;=9<;8=rhknlf%K%",
    "Wonvfkmwzkmpwvzkm'lhjnlDWeqerxle0wlnzj{nz%K%nohwn",
    "DReh}e=<4lhzj1%K%",
    "end"
])