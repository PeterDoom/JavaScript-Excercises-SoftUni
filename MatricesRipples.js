//A fun excersice that let's you pick coordinates for a starting number in a 2D matrice and creates 'riples' of numbers around it.  


function solve([cols, rows, x, y]) {

    let matrix = [];
    for (let row = 0; row < rows; row++) {
        matrix[row] = [];
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row-x), Math.abs(col- y)) +1 ;
        }
    }

    for(let line of matrix){
        console.log(line.join(' '))
    }

}

solve([5, 5, 2, 2])