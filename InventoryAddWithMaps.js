function addOrRemove(args) {

    let supplyMap = new Map();

    for (let line of args) {
        let command = line.split("->")[0]

        if (command === "Add") {
            let store = line.split("->")[1]
            let items = line.split("->")[2].split(",")

            if (!supplyMap.has(store)) {
                supplyMap.set(store, items)

            } else {
                let theResult = items
                let currentItems = supplyMap.get(store)
                theResult = currentItems.concat(theResult)
                supplyMap.set(store, theResult)
            }

        } else if (command === "Remove") {
            let store = line.split("->")[1]
            if (supplyMap.has(store)) {
                supplyMap.delete(store)
            }
        } else if (command === 'END') {
            break;
        }

    }

    let theFinalMap = [...supplyMap.entries()]
        .sort((a, b) => a[1].length - b[1].length ? b[1].length - a[1].length : b[0][0].localeCompare(a[0][0]))

    console.log(`Stores list:`)

    for (let element of theFinalMap) {
        console.log(element[0])
        for (let supply of element[1]) {
            if (supply != "" || supply != " ") {
                console.log(`<<${supply}>>`)

            }
        }
    }

}

addOrRemove(["Add->PeakSports->Map,Navigation,Compass",
    "Add->Paragon->Sunscreen",
    "Add->Groceries->Dried-fruit,Nuts",
    "Add->Groceries->Nuts",
    "Add->Paragon->Tent",
    "Remove->Paragon",
    "Add->Pharmacy->Pain-killers",
    "Add->Groceries->Smores,Bread,Food",
    "Remove",
    "END",
])