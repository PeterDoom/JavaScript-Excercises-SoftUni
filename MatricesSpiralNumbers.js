//more complex "spiral" matrice that prints to the console numbers that are spiriling to the center of the array


function downwardSpiral(rows,cols){

    let matrix = [];

    for(let row = 0; row <rows; row++){
        matrix[row] = [];
        for (let col = 0; col< cols; col++){
            matrix[row][col] = 0

        }
    }

    let counter = 1; 
    let currentRow = 0;
    let currentCol = 0;
    let dir = 'r';

    for(let i = 0; i < rows* cols ; i++){
        matrix[currentRow][currentCol] = counter;
        counter++
        if(dir === 'r'){
        if (currentCol + 1 >= cols || matrix[currentRow][currentCol+1] !==0){
            dir = 'd';
            currentRow++;
        }else{
            currentCol++
        }
        }else if (dir==='d'){
            if(currentRow +1 >= rows || matrix[currentRow+1][currentCol] !==0){
                dir ='l';
                currentCol--;
            }else{
                currentRow++
            }
        }else if (dir === 'l'){
            if (currentRow -1 <= 0 || matrix[currentRow][currentCol-1] !==0){
                dir = 'u';
                currentRow--;
            }else{
                currentCol--;
            }
        }else if (dir === 'u'){
            if (currentRow - 1 <=0 || matrix[currentRow-1][currentCol]!==0){
                dir = 'r';
                currentCol++;
            }else{
                currentRow--
            }
        }
    }

    for (const line of matrix) {
        console.log(line.join(' '));
    }

}

downwardSpiral(10,10)