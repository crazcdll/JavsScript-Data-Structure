// 根据二叉树的前序遍历和中序遍历，还原二叉树
// 中序遍历一定是 { 左子树中的节点集合 }，root，{ 右子树中的节点集合 }；
// 而前序遍历的作用就是找到每颗子树的root位置。

// 节点Node类
class Node {
  constructor (value, left, right) {
    this.value = value
    this.left = left
    this.right = right
  }
}

/* 根据中序遍历和前序遍历创建二叉树
 * param:
 *      preOrder——前序遍历数组
 *      midOrder——中序遍历数组
 * return:
 *      node——构建好的二叉树的根
 */
const BTFromOrderings = (preOrder, midOrder) => {
  if (preOrder.length) {
    let rootIndex = 0

    //寻找中序遍历中通过前序遍历获得的根的位置
    for (; rootIndex < preOrder.length; rootIndex++) {
      if (midOrder[rootIndex] === preOrder[0]) {
        break
      }
    }
    // 通过根结点的位置将中序遍历数组切割
    let leftMidOrder = midOrder.slice(0, rootIndex)
    let rightMidOrder = midOrder.slice(rootIndex + 1)

    // 通过递归得到左右子树
    let leftNode = BTFromOrderings(preOrder.slice(1, leftMidOrder.length + 1), leftMidOrder)
    let rightNode = BTFromOrderings(preOrder.slice(leftMidOrder.length + 1), rightMidOrder)

    // 创建二叉树结点
    return new Node(preOrder[0], leftNode, rightNode)
  }
}

const preOrder = [1, 2, 4, 3, 5, 6]
const midOrder = [4, 2, 1, 5, 3, 6]
console.log(BTFromOrderings(preOrder, midOrder))