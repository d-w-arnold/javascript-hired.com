const nums = [7, 2, 6, 3];
const nums2 = [9, 6, 7, 4, 7, 2, 2, 4, 2, 3, 7, 7];
const list = [3, 6, 2, 9, -1, 10];
const mze = [
    [1, 0, 0, 0, 1],
    [1, 1, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 0, 0, 0, 1]
]

function printMsg(id, fun) {
    document.getElementById(id).innerHTML = fun;
}

function merge(left, right) {
    let merged = []
    let l = 0
    let r = 0;
    while (l < left.length && r < right.length) {
        if (left[l] < right[r]) {
            merged.push(left[l]);
            l++;
        } else {
            merged.push(right[r]);
            r++;
        }
    }
    return merged.concat(left.slice(l)).concat(right.slice(r));
}

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    let middleIndex = Math.floor(array.length / 2);
    let left = array.slice(0, middleIndex);
    let right = array.slice(middleIndex, array.length);
    return merge(mergeSort(left), mergeSort(right));
}

function flowers(pot) {
    for (let i = 0; i < pot[0].length; i++) {
        if (pot[0][i] === 1) {
            continue;
        }
        var currentRow = 0;
        var currentCol = i;
        var lastMove = -1;
        while (true) {
            if (currentRow === (pot.length - 1)) {
                return true;
            }
            if (((currentRow - 1) >= 0) && (pot[(currentRow - 1)][currentCol] === 0) && (lastMove !== 0)) { // Up
                currentRow--;
                lastMove = 2;
                continue;
            } else if (((currentCol + 1) >= 0) && (pot[currentRow][(currentCol + 1)] === 0) && (lastMove !== 1)) { // Right
                currentCol++;
                lastMove = 3;
                continue;
            } else if (((currentRow + 1) >= 0) && (pot[(currentRow + 1)][currentCol] === 0) && (lastMove !== 2)) { // Down
                currentRow++;
                lastMove = 0;
                continue;
            } else if (((currentCol - 1) >= 0) && (pot[currentRow][(currentCol - 1)] === 0) && (lastMove !== 3)) { // Left
                currentCol--;
                lastMove = 1;
                continue;
            }
            return false;
        }
    }
    return false;
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
