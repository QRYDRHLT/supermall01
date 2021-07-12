import { goods } from './request'

export function getCategory(maitKey){
  return goods({
    url: '/category',
    params: {
      maitKey
    }
  })
}

// export function getCategoryInfo(maitKey) {
//   return goods({
//     url: "/category/info",
//     params: {
//       maitKey
//     }
//   });
// }