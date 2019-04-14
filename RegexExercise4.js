function findCoordinates(args) {

    args.pop()

    function checker(text){
        
        let returnee = ("Nothing")
        let pattern = /^([\!@#\?\$A-Za-z0-9]+)=([0-9]+)<<([a-z0-9]+)$/

        if (pattern.test(text)){
            let matchLen = pattern.exec(text)
            if (Number(matchLen[2]) === matchLen[3].length){
            let answer = ""
            for(let char of matchLen[1]){
                let charCode = char.charCodeAt()
                if(charCode >= 48 && charCode <= 57 || charCode >= 65 && charCode <= 90 || charCode >= 97 && charCode <= 122 ){
                    answer+=char
                }
            }

            console.log(`Coordinates found! ${answer} -> ${matchLen[3]}`)
        }else{
            console.log('Nothing found!')
        }
        }else{
            console.log('Nothing found!')
        }
    }

    for(let arg of args){
        checker(arg)
    }


}

findCoordinates(["!@Ma?na?sl!u@=7<<tv58ycb4845",
    "E!ve?rest=.6<<tuvz26",
    "!K@2.,##$=4<<tvnd",
    "!Shiha@pan@gma##9<<tgfgegu67",
    "!###Anna@pur@na##=16<<tv5dekdz8x11ddkc",
    "Last note"
])