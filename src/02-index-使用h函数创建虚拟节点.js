import h from './h'
// console.log(h('div', {}, '我是第一种'))
// console.log(h('div', {}, h('p', {}, '我是div中的p标签')))
// console.log(h('div', {}, [
//   h('p', {}, '我是div中的p1标签'),
//   h('p', {}, '我是div中的p2标签'),
//   h('p', {}, '我是div中的p3标签'),
//   h('p', {}, '我是div中的p4标签')
// ]))
const container = document.getElementById('container')
console.log(container.ele, 'container');

const oldVal = h('div', {}, [
  h('p', {}, '我是div中的p1标签'),
  h('p', {}, '我是div中的p2标签'),
  h('p', {}, '我是div中的p3标签'),
  h('p', {}, '我是div中的p4标签')
])
console.log('oldVal', oldVal.sel)