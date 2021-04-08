import vnode from './vnode'
import createElement from './createElement' 
export default function(oldNode, newNode) {
    console.log('oldNode--获取的是DOM没有sel属性', oldNode)
    if (oldNode.sel === '' || oldNode.sel === undefined) {
        oldNode = vnode(oldNode.tagName.toLowerCase(), {}, [], undefined, oldNode)
    }
    if (oldNode.key === newNode.key && newNode.sel === oldNode.sel) {
        console.log('是相同的节点');
    } else {
        console.log('不是相同的节点，暴力删除旧节点，将新节点插入');
        // createElement(newNode, oldNode.elm)
        const newElm = createElement(newNode)
        console.log('newElm', newElm)
        if (newElm) {
            oldNode.elm.parentNode.insertBefore(newElm, oldNode.elm)
        }
    }
}

/**
 * patch 函数，
 * 1.旧节点与新节点对比，如果旧的为dom需要把他转化为虚拟节点，
 * 2.然后在判断新旧节点与新节点是否相等， 
 *  2.1如果不等，暴力删除，并设置标记，等待新节点插入，（需要找到旧节点的elm元素，pivot.parentNode.insertBefore(新的元素节点，标记点)
 *  2.2 如果相等，递归
 * 
 * 
 */