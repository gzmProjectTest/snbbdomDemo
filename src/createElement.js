export default function createElement(newNode, pivot) {
    // console.log('将', newNode, '插入到', pivot, 'pivot之前')
    // 创建节点方在外面是因为如果为传入数组有值， 就需要给数组中的每一项添加一个元素节点。
    const container = document.createElement(newNode.sel)
    if (newNode.text !== '' && (newNode.children && newNode.children.length === 0 || newNode.children === undefined)) {
        container.innerText = newNode.text
        // console.log('pivot', pivot.parentNode)
        // newNode.elm = container // container 为 h1 元素节点 
        // parentNode 节点的父节点
        // insertBefore（a, b） 参数一：插入的新节点， 参数二：插入新节点到哪个位置的标识
        // pivot.parentNode.insertBefore(container, pivot) 暂不在createDom中插入，如果有children，就没有标杆，所以当children为文本， 就可以return出去，交给patch
    } else if (newNode.children && newNode.children.length > 0) {
        for (let i = 0; i < newNode.children.length; i ++) {
            const newLiDom = createElement(newNode.children[i])
            // console.log('newLiDom', newLiDom)
            container.appendChild(newLiDom)
        }
    }

    console.log('container', container);
    // 为什么要newNode.elm 因为 ul -》 li 也会有虚拟dom 变成 li 元素节点，所以要添加一个li的elm属性为 <li>A</li>
    newNode.elm = container
    return  newNode.elm
}