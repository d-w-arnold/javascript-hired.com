const nums = [7, 2, 6, 3];
const list = [3, 6, 2, 9, -1, 10];
const mze = [
    [1,0,0,0,1],
    [1,1,1,0,1],
    [1,0,0,0,1],
    [1,0,1,1,1],
    [1,0,0,0,1]
]

function printMsg(id, fun) {
    document.getElementById(id).innerHTML = fun;
}

function mazePath(maze, startRow, startCol, destRow, destCol) {
    var currentRow = startRow;
    var currentCol = startCol;
    var lastMove = -1;
    while (true) {
        if (currentRow === destRow && currentCol === destCol) {
            return true;
        }
        if (((currentRow - 1) >= 0) && (maze[(currentRow - 1)][currentCol] === 0) && (lastMove !== 0)) { // Up
            currentRow--;
            lastMove = 2;
            continue;
        } else if (((currentCol + 1) >= 0) && (maze[currentRow][(currentCol + 1)] === 0) && (lastMove !== 1)) { // Right
            currentCol++;
            lastMove = 3;
            continue;
        } else if (((currentRow + 1) >= 0) && (maze[(currentRow + 1)][currentCol] === 0) && (lastMove !== 2)) { // Down
            currentRow++;
            lastMove = 0;
            continue;
        } else if (((currentCol - 1) >= 0) && (maze[currentRow][(currentCol - 1)] === 0) && (lastMove !== 3)) { // Left
            currentCol--;
            lastMove = 1;
            continue;
        }
        return false;
    }
}

function largestNum(numbers) {
    let largestNumber = 0;
    for (let i = 0; i < numbers.length; i++) {
        let tmp = numbers[i];
        if (tmp > largestNumber) {
            largestNumber = tmp;
        }
    }
    return largestNumber;
}

function binaryTree(arr) {
    let index = 0; // Overall index in arr
    let interval = 1; // Doubles each time
    let position = 1; // Position with an interval
    let leftTotal = 0;
    let rightTotal = 0;
    while (index < arr.length) {
        if (interval !== 1) {
            for (let i = 0; i < interval; i++) {
                if (index < arr.length) {
                    const tmp = arr[index];
                    if (tmp !== -1) {
                        if (position <= (interval / 2)) {
                            leftTotal += tmp;
                        } else {
                            rightTotal += tmp;
                        }
                    }
                    index++;
                    position++;
                }
            }
        } else {
            index++;
        }
        interval *= 2;
        position = 1;
    }
    if (leftTotal > rightTotal) {
        return "Left";
    } else if (leftTotal < rightTotal) {
        return "Right";
    } else {
        return "";
    }
}
