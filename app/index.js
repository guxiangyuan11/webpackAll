import component from './component';
import style1 from  './common.css';
import style2 from  './common2.css';
// import Library from './library';
document.body.appendChild(component('HELLO WORLD',style1.class1,style2.class1));
// 热更新监视library组件发生更新就回调函数，只对更新组件更新，不会刷新页面
// if (module.hot) {
//     module.hot.accept('./library', function() {
//         console.log('Accepting the updated library module!');
//         Library.log();
//     });
// }