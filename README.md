# MongoDB $inc Operator with Non-Numeric Value

This repository demonstrates a common error when using the `$inc` operator in MongoDB updates.  Incorrectly providing a non-numeric value to `$inc` can result in unexpected behavior and potential data corruption.

The `bug.js` file showcases the erroneous code.  The `bugSolution.js` file provides the corrected implementation.

## Bug

The `$inc` operator is used to increment a numeric field.  Attempting to use it with a non-numeric value (such as `NaN` in this example) will lead to unpredictable results.  MongoDB may throw an error or silently fail to update the document.

## Solution

To avoid this error, ensure that the value you pass to the `$inc` operator is always a valid number.  Check your code to ensure that your counters or numeric values are correctly managed before updating your documents in MongoDB.
