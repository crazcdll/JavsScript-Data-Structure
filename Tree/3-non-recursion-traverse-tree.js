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

// 非递归先序遍历
const iterativePreOrder = (node) => {
  let stack = []
  stack.push(node) // 入栈
  while (stack.length !== 0) {
    if ((node = stack.pop()) != null) { //出栈
      console.log(node.value)
      stack.push(node.right) //右子结点入栈
      stack.push(node.left) //左子结点入栈
    }
  }
}
console.log('非递归先序遍历：')
iterativePreOrder(tree)

// 非递归中序遍历
const iterativeMidOrder = (node) => {
  let stack = []
  while (true) {
    for (; node != null; node = node.left) {
      stack.push(node)
    }
    if (stack.length === 0) {
      break
    }
    node = stack.pop()
    console.log(node.value)
    node = node.right
  }
}
console.log('非递归中序遍历：')
iterativeMidOrder(tree)

// 非递归后序遍历，单栈
const iterativePostOrder = (node) => {
  let stack = [], flag = node //flag标识已经遍历过的结点
  while (node != null) {
    for (; node.left != null; node = node.left) {
      stack.push(node) //左子树的结点逐一入栈
    }
    while (node.right == null || node.right === flag) {
      console.log(node.value)
      flag = node
      if (stack.length === 0) {
        return
      }
      node = stack.pop()
    }
    stack.push(node) //可能是重新将该结点入栈
    node = node.right //转向右子树
  }
}
console.log('非递归后序遍历，单栈：')
iterativePostOrder(tree)

// 非递归后序遍历，双栈
const iterativeDoubleStackPostOrder = (node) => {
  let stack = [], result = []
  if (node != null) {
    stack.push(node)
  }
  // 按照根左右顺序逐一入栈、出栈、二次入栈
  while (stack.length !== 0) {
    result.push(node = stack.pop())
    if (node.left != null) {
      stack.push(node.left)
    }
    if (node.right != null) {
      stack.push(node.right)
    }
  }
  while (result.length !== 0) {
    console.log(result.pop().value)
  }
}
console.log('非递归后序遍历，双栈：')
iterativeDoubleStackPostOrder(tree)

// 非递归层序遍历
const iterativeLeverOrder = (node) => {
  let queue = []  // 模拟队列
  queue.unshift(node)  //插入根结点到队列最前面
  while (queue.length !== 0) {
    if ((node = queue.pop()) != null) {  //从队列最后面取结点
      console.log(node.value)
      queue.unshift(node.left)  //左子结点入队
      queue.unshift(node.right)  //右子结点入队
    }
  }
}

console.log('非递归层序遍历：')
iterativeLeverOrder(tree)