const bt = [3, 6, 2, 9, -1, 10];
const fo = [14, 941, 13, 10, 13, 941];
const fp = [
    [1, 0, 0, 0, 1],
    [1, 1, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 0, 1, 1, 1]
]
const ln = [7, 2, 6, 3];
const ls = "7234";
const mz = [
    [1, 0, 0, 0, 1],
    [1, 1, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 0, 0, 0, 1]
]
const ms = [9, 6, 7, 4, 7, 2, 2, 4, 2, 3, 7, 7];
const trans = [10, 24, 12, 8, 10, 24];
const tx = 1.2;
const td = [1, 2, 3, 4, -1, -1];

function printMsg(id, fun) {
    document.getElementById(id).innerHTML = fun;
}

function main() {
    printMsg('q1', q1());
    printMsg('q2', q2());
    printMsg('binaryTree', binaryTree(bt));
    printMsg('fewestOccurrences', fewestOccurrences(fo));
    printMsg('flowerPot', flowers(fp));
    printMsg('largestNum', largestNum(ln));
    printMsg('longestStr', longestStr(ls));
    printMsg('mazePath', mazePath(mz, 0, 1, 4, 3));
    printMsg('mergeSort', mergeSort(ms));
    printMsg('taxTrans', taxTrans(trans, tx));
    printMsg('treeDepth', treeDepth(td));
}

function q1() {
    return "Hello";
}

function q2() {
    return "World";
}

function binaryTree(arr) {
    var index = 0; // Overall index in arr
    var interval = 1; // Doubles each time
    var position = 1; // Position with an interval
    var leftTotal = 0;
    var rightTotal = 0;
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

function fewestOccurrences(numbers) {
    if (numbers.length === 0) {
        return [];
    }
    var nums = new Map();
    for (let i = 0; i < numbers.length; i++) {
        if (!nums.has(numbers[i])) {
            nums.set(numbers[i], 1);
        } else {
            nums.set(numbers[i], nums.get(numbers[i]) + 1);
        }
    }
    var fewestValue = -1;
    for (const [key, value] of nums.entries()) {
        if (fewestValue === -1) {
            fewestValue = value;
        } else {
            let occurValue = value;
            if (occurValue < fewestValue) {
                fewestValue = occurValue;
            }
        }
    }
    var smallestOccurNums = [];
    for (const [key, value] of nums.entries()) {
        if (value === fewestValue) {
            smallestOccurNums.push(key)
        }
    }
    return smallestOccurNums.sort();
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

function largestNum(numbers) {
    var largestNumber = 0;
    for (let i = 0; i < numbers.length; i++) {
        let tmp = numbers[i];
        if (tmp > largestNumber) {
            largestNumber = tmp;
        }
    }
    return largestNumber;
}

function longestStr(n) {
    var charArr = [];
    var newN = n.toString(10);
    for (var i = 0; i < newN.length; i++) {
        charArr.push(newN.charAt(i));
    }
    var longestStrLen = 0;
    for (let i = 0; i < charArr.length; i++) {
        let count = 0;
        let repeats = false;
        let map = new Map()
        let index = 0;
        while (!repeats) {
            if ((i + index) < charArr.length) {
                let tmpChar = charArr[i + index];
                if (map.has(tmpChar)) {
                    repeats = true;
                } else {
                    map.set(tmpChar, 1);
                    count++;
                    index++;
                }
            } else {
                break;
            }
        }
        if (count > longestStrLen) {
            longestStrLen = count;
        }
    }
    return longestStrLen;
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

function merge(left, right) {
    var merged = []
    var l = 0
    var r = 0;
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
    var middleIndex = Math.floor(array.length / 2);
    var left = array.slice(0, middleIndex);
    var right = array.slice(middleIndex, array.length);
    return merge(mergeSort(left), mergeSort(right));
}

function taxTrans(transactions, taxRate) {
    var numCalls = 0;
    var map = new Map()
    for (let i = 0; i < transactions.length; i++) {
        let trans = transactions[i];
        if (map.has(trans)) {
            continue;
        } else {
            numCalls++;
            map.set(trans, 1);
        }
    }
    return numCalls;
}

function treeDepth(tree) {
    const treeSize = tree.length;
    if (treeSize === 0) {
        return 0;
    }
    var total = 0;
    var index = 0;
    var increment = 1;
    var found;
    while (true) {
        found = false;
        for (let i = index; i < (index + increment); i++) {
            if (i >= treeSize) {
                return total;
            }
            if (tree[i] > -1) {
                total++;
                found = true;
                break;
            }
        }
        if (!found) {
            return total;
        }
        index += increment;
        increment *= 2;
    }
}
