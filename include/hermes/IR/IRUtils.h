/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#ifndef HERMES_IR_IRUTILS_H
#define HERMES_IR_IRUTILS_H

#include "hermes/IR/IRBuilder.h"

namespace hermes {

class BasicBlock;
class Function;
class IRBuilder;

/// Delete all unreachable basic blocks from \p F.
/// \return true if anything was deleted, false otherwise.
bool deleteUnreachableBasicBlocks(Function *F);

/// In blockToFix, change all incoming Phi values from previousBlock to instead
/// come from newBlock.
void updateIncomingPhiValues(
    BasicBlock *blockToFix,
    BasicBlock *previousBlock,
    BasicBlock *newBlock);

/// Update the insertion point of the builder to the beginning of \p BB,
/// skipping past any initial FirstInBlock instructions.
void movePastFirstInBlock(IRBuilder &builder, BasicBlock *BB);

} // namespace hermes

#endif
