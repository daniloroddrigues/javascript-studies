// Recurção

function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

function findSolution(target) {
  // 24
  function find(start, history) {
    // 1, "1"
    // 6, ( 1 + 5 )
    // 11, (( 1 + 5) + 5 )
    // 16, ((( 1 + 5) + 5 ) + 5 )
    // 21, (((( 1 + 5) + 5 ) + 5 ) + 5 )
    // 26, ((((( 1 + 5) + 5 ) + 5 ) + 5 ) + 5 )

    // ||
    // 3, (1 * 3)
    // 9, ((1 * 3) * 3)
    // 27, (((( 1 * 3 ) * 3) * 3) * 3)

    // 1 == 24
    // 6 == 34
    // 11 == 24
    // 16 == 24
    // 21 == 24
    // 26 == 24
    // ||
    // 3 == 24
    // 9 == 24
    // 27 == 24
    if (start == target) {
      return history;

      // 1 > 24
      // 6 > 24
      // 11 > 24
      // 16 > 24
      // 21 > 24
      // 26 > 24
      // ||
      // 3 > 24
      // 9 > 24
      // 27 > 24
    } else if (start > target) {
      // null
      // ||
      // null
      return null;
    } else {
      return (
        // 1 + 5, ( 1 + 5 )
        // 6 + 5, (( 1 + 5) + 5 )
        // 11 + 5, ((( 1 + 5) + 5 ) + 5 )
        // 16 + 5, (((( 1 + 5) + 5 ) + 5 ) + 5 )
        // 21 + 5, ((((( 1 + 5) + 5 ) + 5 ) + 5 ) + 5 )
        // null
        find(start + 5, "(" + history + " + 5)") ||
        // 1 * 3, ( 1 * 3 )
        // 3 * 3, (( 1 * 3 ) * 3)
        // 9 * 3, ((( 1 * 3 ) * 3) * 3)
        find(start * 3, "(" + history + " * 3)")
      );
    }
  }
  return find(1, "1");
}

console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)
