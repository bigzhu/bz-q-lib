// 弄 quasar 的 route, 少写一点东西而已
 export default function(name) {
   return {
     path: '/' + name,
     name: name,
     component: () =>
       import('pages/' + name)
   }
 }
