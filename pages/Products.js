import React from 'react'
import Product from './Product'

const Products = ({products}) => {
  return (<>
    <h1 className='text-center text-2xl '>List of Product</h1>
    <section className="text-gray-600 body-font shadow-lg">
      {console.log("props are : ",products)}
    <div className="container  py-24 mx-auto overflow-hidden">
      <div className="flex flex-wrap  text-center ">
  
{products.data.map((val) => {
  return(
    <Product key={val.id}  image={val.attributes.image.data.attributes.name} title={val.attributes.title} category={val.attributes.category} price={val.attributes.price} redirect={`/products/${val.attributes.slug}`}/>
    )
  })}

      </div>
    </div>
  </section>
  </>
  )
}


export async function getServerSideProps(context) {

   
    let a = await fetch('http://localhost:1337/api/products?populate=*',{Authorization:"55f45db602ad3d44ddd1bf185551e83041b40620f60a4bdea6439150ad78845016022e2bd858586d87ec5fef5012ac0cd32bab29047fb72e844e9e31635acf5ed235b8c6fbd98ce6e53c47a3a96f2aa9905f0e61669a00263826e3cbbc343c2ecba3fa4b20c89d72b02fb20e7105e8a1ee93c588a4c01f42cdcf6c9e99553623"})

    let products = await a.json()
    console.log(products)
    return {
      props: {products:products}, 
    }
  }
export default Products


// {
//   "data": [
//       {
//           "id": 7,
//           "attributes": {
//               "createdAt": "2022-10-31T14:14:39.722Z",
//               "updatedAt": "2022-10-31T14:38:50.758Z",
//               "publishedAt": "2022-10-31T14:14:40.509Z",
//               "title": "hoodie",
//               "slug": "hoodie",
//               "description": "INDISSH Printed Full-Sleeves Unisex All-Weather Hoodies  Material - Cotton, Pattern - Printed, Sleeves - Full Sleeves, Closure Type: Pull-On,   Made from high-quality 100% cotton, this classic fit hoodie features a round neckline & full sleeves. ",
//               "category": "shirt",
//               "size": "xl",
//               "color": "green",
//               "price": 344,
//               "availableqty": 6767,
//               "image": {
//                   "data": {
//                       "id": 15,
//                       "attributes": {
//                           "name": "https://m.media-amazon.com/images/I/51VueYVR+UL._UX569_.jpg",
//                           "alternativeText": "https://m.media-amazon.com/images/I/51VueYVR+UL._UX569_.jpg",
//                           "caption": "https://m.media-amazon.com/images/I/51VueYVR+UL._UX569_.jpg",
//                           "width": 569,
//                           "height": 711,
//                           "formats": {
//                               "small": {
//                                   "ext": ".jpg",
//                                   "url": "/uploads/small_51_Vue_YVR_UL_UX_569_0bcb0fbfcb.jpg",
//                                   "hash": "small_51_Vue_YVR_UL_UX_569_0bcb0fbfcb",
//                                   "mime": "image/jpeg",
//                                   "name": "small_https://m.media-amazon.com/images/I/51VueYVR+UL._UX569_.jpg",
//                                   "path": null,
//                                   "size": 19.69,
//                                   "width": 400,
//                                   "height": 500
//                               },
//                               "thumbnail": {
//                                   "ext": ".jpg",
//                                   "url": "/uploads/thumbnail_51_Vue_YVR_UL_UX_569_0bcb0fbfcb.jpg",
//                                   "hash": "thumbnail_51_Vue_YVR_UL_UX_569_0bcb0fbfcb",
//                                   "mime": "image/jpeg",
//                                   "name": "thumbnail_https://m.media-amazon.com/images/I/51VueYVR+UL._UX569_.jpg",
//                                   "path": null,
//                                   "size": 4,
//                                   "width": 125,
//                                   "height": 156
//                               }
//                           },
//                           "hash": "51_Vue_YVR_UL_UX_569_0bcb0fbfcb",
//                           "ext": ".jpg",
//                           "mime": "image/jpeg",
//                           "size": 24.29,
//                           "url": "/uploads/51_Vue_YVR_UL_UX_569_0bcb0fbfcb.jpg",
//                           "previewUrl": null,
//                           "provider": "local",
//                           "provider_metadata": null,
//                           "createdAt": "2022-10-31T14:37:47.272Z",
//                           "updatedAt": "2022-10-31T14:37:47.272Z"
//                       }
//                   }
//               }
//           }
//       },
//       {
//           "id": 8,
//           "attributes": {
//               "createdAt": "2022-10-31T14:40:42.358Z",
//               "updatedAt": "2022-10-31T14:41:14.414Z",
//               "publishedAt": "2022-10-31T14:41:14.410Z",
//               "title": "t-shirt",
//               "slug": "t-shirt",
//               "description": "Item Weight ‏ : ‎ 200 Grams Date First Available ‏ : ‎ 10 September 2022 Manufacturer ‏ : ‎ OX LIFESTYLE CORPORATION, LUDHIANA, PUNJAB ASIN ‏ : ‎ B0BDVBCB59 Item part number ‏ : ‎ OX-T6(WP)-BLWT",
//               "category": "tshirt",
//               "size": null,
//               "color": "green",
//               "price": 475,
//               "availableqty": 33,
//               "image": {
//                   "data": {
//                       "id": 16,
//                       "attributes": {
//                           "name": "https://m.media-amazon.com/images/I/41TnYHw8DiL.jpg",
//                           "alternativeText": "https://m.media-amazon.com/images/I/41TnYHw8DiL.jpg",
//                           "caption": "https://m.media-amazon.com/images/I/41TnYHw8DiL.jpg",
//                           "width": 447,
//                           "height": 558,
//                           "formats": {
//                               "small": {
//                                   "ext": ".jpg",
//                                   "url": "/uploads/small_41_Tn_Y_Hw8_Di_L_ec8facc607.jpg",
//                                   "hash": "small_41_Tn_Y_Hw8_Di_L_ec8facc607",
//                                   "mime": "image/jpeg",
//                                   "name": "small_https://m.media-amazon.com/images/I/41TnYHw8DiL.jpg",
//                                   "path": null,
//                                   "size": 22.47,
//                                   "width": 401,
//                                   "height": 500
//                               },
//                               "thumbnail": {
//                                   "ext": ".jpg",
//                                   "url": "/uploads/thumbnail_41_Tn_Y_Hw8_Di_L_ec8facc607.jpg",
//                                   "hash": "thumbnail_41_Tn_Y_Hw8_Di_L_ec8facc607",
//                                   "mime": "image/jpeg",
//                                   "name": "thumbnail_https://m.media-amazon.com/images/I/41TnYHw8DiL.jpg",
//                                   "path": null,
//                                   "size": 4.28,
//                                   "width": 125,
//                                   "height": 156
//                               }
//                           },
//                           "hash": "41_Tn_Y_Hw8_Di_L_ec8facc607",
//                           "ext": ".jpg",
//                           "mime": "image/jpeg",
//                           "size": 20.65,
//                           "url": "/uploads/41_Tn_Y_Hw8_Di_L_ec8facc607.jpg",
//                           "previewUrl": null,
//                           "provider": "local",
//                           "provider_metadata": null,
//                           "createdAt": "2022-10-31T14:40:21.175Z",
//                           "updatedAt": "2022-10-31T14:40:21.175Z"
//                       }
//                   }
//               }
//           }
//       }
//   ],
//   "meta": {
//       "pagination": {
//           "page": 1,
//           "pageSize": 25,
//           "pageCount": 1,
//           "total": 2
//       }
//   }
// }