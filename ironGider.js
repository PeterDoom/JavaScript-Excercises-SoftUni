function ironGlider(args) {

    let irongGliderMap = new Map();
    args.pop();

    for (let trainCourse of args) {

        let city = trainCourse.split(":")[0];
        let bestTime = trainCourse.split(":")[1].split("->")[0];
        let passengers = +trainCourse.split('->')[1];

        if (bestTime != "ambush") {
            if (!irongGliderMap.has(city)) {
                let arrOfTimeAndPeople = [bestTime, passengers];
                irongGliderMap.set(city, arrOfTimeAndPeople);
            } else {
                let theResult = irongGliderMap.get(city)[0];
                let people = +irongGliderMap.get(city)[1];

                if (+theResult === 0) {
                    theResult += +bestTime;
                }

                if (Number(bestTime) >= Number(theResult)) {
                    people += +passengers;
                    let newArrResult = [theResult, people]
                    irongGliderMap.set(city, newArrResult)
                } else {
                    people += passengers
                    let newArrResult = [bestTime, people]
                    irongGliderMap.set(city, newArrResult)
                }
            }
        } else {
            if (irongGliderMap.has(city)) {
                let currentResult = irongGliderMap.get(city)[1];
                let ambushBestTime = 0;
                if (Number(currentResult) > 0) {
                    currentResult -= passengers
                    let newArrResult = [ambushBestTime, currentResult]
                    irongGliderMap.set(city, newArrResult)
                    } else {
                        currentResult = 0
                        let newArrResult = [ambushBestTime, currentResult]
                        irongGliderMap.set(city, newArrResult)
                }
            }
        }
    }

    let finalResult = [...irongGliderMap.entries()]
        .sort((a, b) => +a[1][0] - +b[1][0] ? +a[1][0] - +b[1][0] : a[0][0].localeCompare(b[0][0]))
        
    for (let entry of finalResult) {
        if(entry[1][0] != 0 || entry[1][1]!= 0){
            console.log(`${entry[0]} -> Time: ${entry[1][0]} -> Passengers: ${entry[1][1]}`)
        }
        
    }

}

// ironGlider(["Sto-Lat:8->120",
//     "Ankh-Morpork:3->143",
//     "Sto-Lat:9->80",
//     "Ankh-Morpork:4->143",
//     "Sto-Lat:3->20",
//     "Quirm:12->40",
//     "Quirm:13->29",
//     "Slide rule"
// ])


// ironGlider(["Quirm:12->258",
//     "Ankh-Morpork:ambush->200",
//     "Ankh-Morpork:5->143",
//     "Sto-Lat:4->80",
//     "Ankh-Morpork:4->143",
//     "Ankh-Morpork:ambush->143",
//     "Sto-Lat:3->20",
//     "Ankh-Morpork:5->17",
//     "Slide rule"
// ])