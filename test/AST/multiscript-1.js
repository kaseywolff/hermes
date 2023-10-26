/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// RUN: %shermes -dump-ast -script %S/multiscript-1.js %S/multiscript-2.js | %FileCheckOrRegen --match-full-lines %s

1 + 1

// Auto-generated content below. Please do not modify manually.

// CHECK:{
// CHECK-NEXT:  "type": "Program",
// CHECK-NEXT:  "body": [
// CHECK-NEXT:    {
// CHECK-NEXT:      "type": "ExpressionStatement",
// CHECK-NEXT:      "expression": {
// CHECK-NEXT:        "type": "BinaryExpression",
// CHECK-NEXT:        "left": {
// CHECK-NEXT:          "type": "NumericLiteral",
// CHECK-NEXT:          "value": 1,
// CHECK-NEXT:          "raw": "1"
// CHECK-NEXT:        },
// CHECK-NEXT:        "right": {
// CHECK-NEXT:          "type": "NumericLiteral",
// CHECK-NEXT:          "value": 1,
// CHECK-NEXT:          "raw": "1"
// CHECK-NEXT:        },
// CHECK-NEXT:        "operator": "+"
// CHECK-NEXT:      },
// CHECK-NEXT:      "directive": null
// CHECK-NEXT:    },
// CHECK-NEXT:    {
// CHECK-NEXT:      "type": "ExpressionStatement",
// CHECK-NEXT:      "expression": {
// CHECK-NEXT:        "type": "BinaryExpression",
// CHECK-NEXT:        "left": {
// CHECK-NEXT:          "type": "NumericLiteral",
// CHECK-NEXT:          "value": 2,
// CHECK-NEXT:          "raw": "2"
// CHECK-NEXT:        },
// CHECK-NEXT:        "right": {
// CHECK-NEXT:          "type": "NumericLiteral",
// CHECK-NEXT:          "value": 2,
// CHECK-NEXT:          "raw": "2"
// CHECK-NEXT:        },
// CHECK-NEXT:        "operator": "-"
// CHECK-NEXT:      },
// CHECK-NEXT:      "directive": null
// CHECK-NEXT:    }
// CHECK-NEXT:  ]
// CHECK-NEXT:}
