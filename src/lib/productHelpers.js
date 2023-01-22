const productHelpers = () => {
  // hash products (keys = product name); each size is it's own product
  //   {
  //     "Bucket Hat": {
  //         "Universal": {
  //             "id": {product_id},
  //             "name": "Bucket Hat",
  //             "size": "Universal",
  //             "price": 15,
  //             "image_url": {url}
  //         }
  //     },
  //     "T-Shirt": {
  //         "XL": {
  //             "id": {product_id},
  //             "name": "T-Shirt",
  //             "size": "XL",
  //             "price": 20,
  //             "image_url": {url}
  //         },
  //         "L": {
  //             "id": {product_id},
  //             "name": "T-Shirt",
  //             "size": "L",
  //             "price": 20,
  //             "image_url": {url}
  //         },
  //         "M": {
  //             "id": {product_id},
  //             "name": "T-Shirt",
  //             "size": "M",
  //             "price": 20,
  //             "image_url": {url}
  //         },
  //         "S": {
  //             "id": {product_id},
  //             "name": "T-Shirt",
  //             "size": "S",
  //             "price": 20,
  //             "image_url": {url}
  //         }
  //     }
  // }
  const hashProducts = (data) => {
    let products = {};
    data.forEach((p) => {
      p.price = p.price / 100;
      let product = {};
      let productInfo = {
        id: p.id,
        name: p.name,
        size: p.size,
        price: p.price,
        image_url: p.image_url,
      };
      if (p.name in products) {
        product = productInfo;
        products[p.name][p.size] = productInfo;
      } else {
        product[p.size] = productInfo;
        products[p.name] = product;
      }
    });
    return products;
  };

  // single entity (s,m,l t-shirts are a single product)
//   [
//     {
//         "name": "Bucket Hat",
//         "price": 15,
//         "sizes": [
//             "Universal"
//         ],
//         "size": "Universal",
//         "image_url": {url},
//         "images": [
//             {url},
//             {url}
//         ]
//     },
//     {
//         "name": "T-Shirt",
//         "price": 20,
//         "sizes": [
//             "S",
//             "M",
//             "L",
//             "XL"
//         ],
//         "size": "",
//         "image_url": {url},
//         "images": [
//             {url},
//             {url}
//         ]
//     }
// ]
  const createProductMapping = (data, productImages) => {
    let productMapping = [];
    for (const [, value] of Object.entries(data)) {
      let flag = false;
      if (productMapping.length > 0) {
        productMapping.forEach((p) => {
          if (p.name === value.name) {
            p.sizes.push(value.size);
            flag = true;
          }
        });
      }
      if (flag) continue;
      let size = value.size === "Universal" ? "Universal" : "";

      // set images from contentful
      let images = [];
      productImages.forEach((p) => {
        if (p.productName === value.name) {
          p.productImages.forEach((e) => {
            images.push("https://" + e.fields.file.url);
          });
        }
      });
      productMapping.push({
        name: value.name,
        price: value.price,
        sizes: [value.size],
        size: size,
        image_url: value.image_url,
        images: images,
      });
    }
    return productMapping;
  };

  return { hashProducts, createProductMapping };
};

export default productHelpers;
