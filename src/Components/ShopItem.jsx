import React from 'react'

const ShopItem = ({product}) => {
    return (
        <div className="shop-item">
          <div className="shop-item-img" style={{backgroundImage: `url(${product.img})`}}></div>
          <div className="shop-item-name">{product.name}</div>
          <div className="shop-item-color">{product.color}</div>
          <div className="shop-item-price">${product.price}</div>
          <button className="shop-item-add-button">ADD TO CART</button>
        </div>
    )
}

export default ShopItem
