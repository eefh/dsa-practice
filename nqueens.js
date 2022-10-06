function nQueens(n) {
    var board = new Array(n);
    for (var i = 0; i < n; i++) {
        board[i] = new Array(n);
        for (var j = 0; j < n; j++) {
            board[i][j] = 0;
        }
    }

    var solutions = [];

    function solve(board, row) {
        if (row === n) {
            solutions.push(board);
            return;
        }

        for (var col = 0; col < n; col++) {
            if (isValid(board, row, col)) {
                board[row][col] = 1;
                solve(board, row + 1);
                board[row][col] = 0;
            }
        }
    }

    function isValid(board, row, col) {
        for (var i = 0; i < row; i++) {
            if (board[i][col]) return false;
        }

        for (var i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j]) return false;
        }

        for (var i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j]) return false;
        }

        return true;
    }

    solve(board, 0);
    return solutions;
}
