function setMatrixZeroes(matrix: number[][]): void {
    const rows = new Set<number>();
    const cols = new Set<number>();

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                rows.add(i);
                cols.add(j)
            }
        }
    }

    for (const row of rows) {
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[row][j] = 0;
        }
    }

    for (const col of cols) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][col] = 0
        }
    }

}

setMatrixZeroes([[1, 0, 0], [1, 0, 1], [1, 1, 1]]);
