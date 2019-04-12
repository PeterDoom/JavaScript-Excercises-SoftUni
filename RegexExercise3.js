//a solve for https://judge.softuni.bg/Contests/Practice/Index/1148#0 problem. 


function postOfficeDecryption(args) {

    let initalKey = args[0].split ("|")[0];
    let charsAndLen = args[0].split ("|")[1];
    let encodedMessage = args[0].split ("|")[2].split (" ");

    let pattern1 = /(#|\$|%|\*|&)([A-Z]+)\1/gm;
    let pattern2 = /[0-9]{2}:[0-9]{2}/gm;

    initalKey = pattern1.exec (initalKey);
    initalKey = initalKey[2];

    charsAndLen = charsAndLen.match (pattern2);

    let arrForDecoding = [];

    for (let char of initalKey) {
        for (let charLen of charsAndLen) {
            let charNum = charLen.split (":")[0];
            if (Number (charNum) === char.charCodeAt()) {
                arrForDecoding.push (charLen);
                break;
            }
        }
    }


    for (let charLen of arrForDecoding) {
        let [char, len] = charLen.split (":");
        for (let word of encodedMessage) {
            if (word.charCodeAt (0) === Number (char)) {
                if (word.length === Number (len) + 1) {
                    console.log (word);
                }
            }
        }
    }


}

postOfficeDecryption (['UrgentMessage.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig'])