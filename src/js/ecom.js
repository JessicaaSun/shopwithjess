"use strict";

let cardContainer = document.querySelector("#cards");

// let products = [
//   {
//     proName: "Crop top",
//     price: 7.66,
//     desc: "Short shirt with flower printed",
//     image:
//       "https://zandokh.com/image/cache/catalog/products/2025-04/22225031346/ZANDO01.04.202511292-cr-450x672.jpg",
//   },
//   {
//     proName: "Tartan Maxi Skirtp",
//     price: 18.59,
//     desc: "Short shirt with flower printed",
//     image:
//       "https://zandokh.com/image/cache/catalog/products/2025-04/22224121174/ZD__5329-cr-450x672.jpg",
//   },
//   {
//     proName: "Kniited Fitted Cardigan",
//     price: 20.95,
//     desc: "Short shirt with flower printed",
//     image:
//       "https://zandokh.com/image/cache/catalog/products/2025-03/22225011181/ZANDO9936-cr-450x672.jpg",
//   },
//   {
//     proName: "Gathering Midi Dress",
//     price: 20.95,
//     desc: "Short shirt with flower printed",
//     image:
//       "https://zandokh.com/image/cache/catalog/products/2025-01/22225011172/ZANDO270320259290-cr-450x672.jpg",
//   },
//   {
//     proName: "Midi Dress",
//     price: 20.95,
//     desc: "Short shirt with flower printed",
//     image:
//       "https://zandokh.com/image/cache/catalog/products/2025-01/22224111003/IMG_0124-cr-450x672.jpg",
//   },
//   {
//     proName: "Crop top",
//     price: 7.66,
//     desc: "Short shirt with flower printed",
//     image:
//       "https://zandokh.com/image/cache/catalog/products/2025-04/22225031346/ZANDO01.04.202511292-cr-450x672.jpg",
//   },
//   {
//     proName: "Tartan Maxi Skirtp",
//     price: 18.59,
//     desc: "Short shirt with flower printed",
//     image:
//       "https://zandokh.com/image/cache/catalog/products/2025-04/22224121174/ZD__5329-cr-450x672.jpg",
//   },
//   {
//     proName: "Kniited Fitted Cardigan",
//     price: 20.95,
//     desc: "Short shirt with flower printed",
//     image:
//       "https://zandokh.com/image/cache/catalog/products/2025-03/22225011181/ZANDO9936-cr-450x672.jpg",
//   },
//   {
//     proName: "Cropped Fit T-Shirt With Print",
//     price: 13.59,
//     desc: "Short shirt with flower printed",
//     image:
//       "https://zandokh.com/image/catalog/products/2025-04/22225031205/ZANDO2204202516902.jpg",
//   },
// ];

fetch("./src/data/product.json")
  .then((response) => response.json())
  .then(
    (data) =>
      (cardContainer.innerHTML = data
        .map(
          (product) => `
       <div
            class="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                class="p-8 aspect-[3/4] object-cover rounded-t-lg"
                src=${product.image}
                alt="product image"
              />
            </a>
            <div class="px-5 pb-5">
              <a href="#">
                <h5
                  class="text-xl line-clamp-1 font-semibold tracking-tight text-gray-900 dark:text-white"
                >
                ${product.proName}
                </h5>
              </a>
              <div class="flex items-center mt-2.5 mb-5">
                <div class="flex items-center space-x-1 rtl:space-x-reverse">
                  <svg
                    class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  </svg>
                  <svg
                    class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  </svg>
                  <svg
                    class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  </svg>
                  <svg
                    class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  </svg>
                  <svg
                    class="w-4 h-4 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  </svg>
                </div>
                <span
                  class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3"
                  >5.0</span
                >
              </div>
              <div class="flex items-center justify-between">
                <span class="lg:text-3xl md:text-xl text-lg font-bold text-gray-900 dark:text-white"
                  >$${product.price}</span
                >
                <a
                  href="#"
                  class="text-white bg-purple-prim hover:bg-purple-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >Add to cart</a
                >
              </div>
            </div>
          </div>
`
        )
        .join(""))
  )
  .catch((error) => console.log(error));
