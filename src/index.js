import h from './h'
import patch from './patch'

const container = document.getElementById('container')

// const vnode = h('h1', {}, '我是来上树的')
const vnode = h('ul', {}, [
    h('li', {}, 'A'),
    h('li', {}, 'B'),
    h('li', {}, 'C'),
    h('li', {}, 'D')
])

patch(container, vnode)