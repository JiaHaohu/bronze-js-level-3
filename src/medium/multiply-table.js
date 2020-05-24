/**
 * Return a string represents the multiply table. The returned multiply table should match
 * the following rules:
 *
 * - The table should begin with `start * start`.
 * - The first number in each expression should be increased by 1 per row.
 * - The second number in each expression should be increased by 1 per column.
 * - Each column should be left aligned (filled by ' ').
 * - Each column width should be equals to the maximum width of the expression in that column plus 2.
 * - The line break character should be `'\n'`, The whitespace character should be `' '`.
 *
 * For example, suppose that the `start` is 2 and `end` is 4. The output should be
 *
 * ```
 * 2*2=4
 * 3*2=6  3*3=9
 * 4*2=8  4*3=12  4*4=16
 * ```
 *
 * Take another example. Suppose that the `start` is 2 and `end` is 5. The output should be
 *
 * ```
 * 2*2=4
 * 3*2=6   3*3=9
 * 4*2=8   4*3=12  4*4=16
 * 5*2=10  5*3=15  5*4=20  5*5=25
 * ```
 * @param options An object containing the `start` and `end` of the multiply table.
 * @return A string which represents the multiply table.
 */
export default function createMultiplyTable (options) {
  // TODO: Please implement this function.
  // <--start--
  if (options === undefined) {
    // eslint-disable-next-line no-throw-literal
    throw 'Error';
  }

  if (options.start === undefined || options.end === undefined) {
    // eslint-disable-next-line no-throw-literal
    throw 'Error';
  }

  const start = options.start;
  const end = options.end;

  if (start <= 0 || end <= 0) {
    // eslint-disable-next-line no-throw-literal
    throw 'Error';
  }

  if (start > end) {
    // eslint-disable-next-line no-throw-literal
    throw 'Error';
  }

  // eslint-disable-next-line no-unused-vars
  var result = '';

  for (let row = start; row <= end; row++) {
    result += createRow(start, end, row);
  }

  return result;
  // --end-->
}

// TODO: You can add additional functions if needed.
// <--start--

function createRow (start, end, row) {
  var rowStr = '';

  for (let column = start; column <= row; column++) {
    rowStr += createCell(row, column, end);
  }
  rowStr += '\n';

  return rowStr;
}

function createCell (row, column, end) {
  var expression = `${row}*${column}=` + row * column;
  const cellWidth = getCellWidth(column, end);
  // eslint-disable-next-line no-undef
  const resultCell = expression + ' '.repeat(cellWidth - expression.length);

  // eslint-disable-next-line no-undef
  return resultCell;
}

function getCellWidth (column, end) {
  const maxLengthExpression = `${end}*${column}=` + column * end;
  return maxLengthExpression.length + 2;
}
// --end-->
