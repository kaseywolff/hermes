/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// RUN: %hermesc -O -dump-ir %s | %FileCheckOrRegen --match-full-lines %s

// Demonstrate that "x" can be promoted into a stack variable and SSA after
// inlining because no references to it as a captured variable remain - they
// should all have been cleaned up by DCE.

(function () {
var x = 10;

function leaf() {
    x += x + 1;
}

function middle() {
    for(var i = 0; i < 5; ++i)
        leaf();
}

middle();
return x;

})();

// Auto-generated content below. Please do not modify manually.

// CHECK:function global(): number
// CHECK-NEXT:frame = []
// CHECK-NEXT:%BB0:
// CHECK-NEXT:  %0 = CreateScopeInst (:environment) %global(): any, empty: any
// CHECK-NEXT:  %1 = CreateFunctionInst (:object) %0: environment, %""(): functionCode
// CHECK-NEXT:  %2 = CallInst (:number) %1: object, %""(): functionCode, %0: environment, undefined: undefined, undefined: undefined
// CHECK-NEXT:       ReturnInst %2: number
// CHECK-NEXT:function_end

// CHECK:function ""(): number [allCallsitesKnownInStrictMode]
// CHECK-NEXT:frame = [x: number]
// CHECK-NEXT:%BB0:
// CHECK-NEXT:  %0 = GetParentScopeInst (:environment) %global(): any, %parentScope: environment
// CHECK-NEXT:  %1 = CreateScopeInst (:environment) %""(): any, %0: environment
// CHECK-NEXT:  %2 = CreateFunctionInst (:object) %1: environment, %leaf(): functionCode
// CHECK-NEXT:       StoreFrameInst %1: environment, 10: number, [x]: number
// CHECK-NEXT:       BranchInst %BB2
// CHECK-NEXT:%BB1:
// CHECK-NEXT:       ReturnInst %10: number
// CHECK-NEXT:%BB2:
// CHECK-NEXT:  %6 = PhiInst (:number) 0: number, %BB0, %12: number, %BB2
// CHECK-NEXT:  %7 = GetClosureScopeInst (:environment) %""(): any, %2: object
// CHECK-NEXT:  %8 = LoadFrameInst (:number) %7: environment, [x]: number
// CHECK-NEXT:  %9 = FAddInst (:number) %8: number, 1: number
// CHECK-NEXT:  %10 = FAddInst (:number) %8: number, %9: number
// CHECK-NEXT:        StoreFrameInst %7: environment, %10: number, [x]: number
// CHECK-NEXT:  %12 = FAddInst (:number) %6: number, 1: number
// CHECK-NEXT:  %13 = FLessThanInst (:boolean) %12: number, 5: number
// CHECK-NEXT:        CondBranchInst %13: boolean, %BB2, %BB1
// CHECK-NEXT:function_end

// CHECK:function leaf(): undefined [allCallsitesKnownInStrictMode,unreachable]
// CHECK-NEXT:frame = []
// CHECK-NEXT:%BB0:
// CHECK-NEXT:       UnreachableInst
// CHECK-NEXT:function_end
