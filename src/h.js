// 'div', {}, ['p', {}, '我是p标签']
// 'div', {}, h()
// 'div', {}, '文本'
//  栗子1:
// import vnode from './vnode'
// console.log(vnode('ul', {}, [vnode('li', {}, [ ], '我是文本', 'li') ], '我是文本', 'ul'))

import vnode from './vnode'
export default function(sel, data, c) {
    console.log('c', c)
    if (arguments.length !== 3) {
        throw  new Error('需要输入够三个参数')
    }
    if (typeof c === 'string') {
        console.log('2222', vnode(sel, data, undefined, c, undefined))
        return vnode(sel, data, undefined, c, undefined)
    } else if (Array.isArray(c)) {
        const children = []

        for (let i = 0; i < c.length; i++) {
            if (!(Object.prototype.toString.call(c[i]) === '[object Object]' && c[i].hasOwnProperty('sel'))) {
                throw new Error('传入的参数有误')
            }
            children.push(c[i])
        }
        return vnode(sel, data, children, undefined, undefined)
    } else if (Object.prototype.toString.call(c) === '[object Object]' && c.hasOwnProperty('sel')) {

        return vnode(sel, data, [c], undefined, undefined)
    } else{
        throw new Error('传入的参数有误')
    }

}
