// 创建一棵树
const tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4
    }
  },
  right: {
    value: 3,
    left: {
      value: 5,
      left: {
        value: 7,
      },
      right: {
        value: 8
      }
    },
    right: {
      value: 6
    }
  }
}

// 先序遍历
const preOrder = (node) => {
  if (node) {
    console.log(node.value)
    preOrder(node.left)
    preOrder(node.right)
  }
}
console.log('先序遍历：')
preOrder(tree)

// 中序遍历
const midOrder = (node) => {
  if (node) {
    midOrder(node.left)
    console.log(node.value)
    midOrder(node.right)
  }
}
console.log('中序遍历：')
midOrder(tree)

// 后序遍历
const postOrder = (node) => {
  if (node) {
    postOrder(node.left)
    postOrder(node.right)
    console.log(node.value)
  }
}
console.log('后序遍历：')
postOrder(tree)

// 层次遍历，获取二叉树深度（高度）
const getDepth = (node) => {
  if (!node) return 0
  let leftDepth = getDepth(node.left)
  let rightDepth = getDepth(node.right)
  // console.log('leftDepth---', leftDepth)
  // console.log('rightDepth---', rightDepth)
  return Math.max(leftDepth, rightDepth) + 1
}
console.log('树的深度为：', getDepth(tree))

// 层序遍历
const levelOrder = (node) => {
  const depth = getDepth(node)
  const showNodeOfLevel = (node, level) => {
    if (node == null || level < 0) {
      return
    } else if (level === 0) {
      console.log(node.value)
    }
    showNodeOfLevel(node.left, level - 1)
    showNodeOfLevel(node.right, level - 1)
  }

  for (let i = 0; i < depth; i++) {
    showNodeOfLevel(node, i)
  }
}
console.log('层序遍历：')
levelOrder(tree)
