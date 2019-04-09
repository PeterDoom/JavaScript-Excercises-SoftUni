function vaporWinterSale (input){

    let games = new Map();
    let gamesDLC = new Map();

    let newInput = input[0].split(", ")

    for (let line of newInput){
        if (line.includes(":")){
            let [game,dlc] = line.split(":")

            if (games.has(game)){
                let price = games.get(game)
                let dlcPrice = (price + price* 0.2)/ 2
                let dlcMap = [dlc, dlcPrice.toFixed(2)]
                gamesDLC.set(game,dlcMap)
                games.delete(game)
            }
        }
        else if (line.includes("-")){
            let [game,price] = line.split("-")
            games.set(game, +price)
        }
    }

    let gameDlcEntries = [...gamesDLC.entries()]
    .sort((a,b) => a[1][1]- b[1][1])
    .forEach((value) => console.log(`${value[0]} - ${value[1][0]} - ${value[1][1]}`))

    let gamesEnteries = [...games.entries()]
    .sort((a,b) => b[1]- a[1])
    .forEach((value) => console.log(`${value[0]} - ${(value[1]*0.8).toFixed(2)}`))
}



vaporWinterSale (["Center Strike-14.99, FortLite-25, BattleShield 5-64.74, BattleShield 5:CoD edition, Dog of War-45, Dead Red Redemption-100, Dead Red Redemption:no DLC"])