function commonChild(string1, string2) {

    let matrix = Array(string1.length + 1).fill().map(() => Array(string1.length + 1).fill(0));
    for (let i = 0; i <= string1.length; i++) {
        for (let j = 0; j <= string1.length; j++) {
            if (i < 1 || j < 1) matrix[i][j] = 0;
            else if (string1[i - 1] === string2[j - 1]) matrix[i][j] = matrix[i - 1][j - 1] + 1;
            else matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
        }
    }
    return matrix[string1.length][string1.length];
}

exports.commonChild = commonChild;
