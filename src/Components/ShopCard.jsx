import React from 'react'

function ShopCard({product}) {
    return (
      <div className="shop-card" style={{backgroundImage: `url(${product.img})`}}>
        <div className="shop-card-header">
          <div className="shop-card-name">{product.name}</div>
          <div className="shop-card-color">{product.color}</div>
        </div>
        <div className="shop-card-footer">
          <div className="shop-card-price">${product.price}</div>
          <button className="shop-card-add-button">ADD TO CART</button>
        </div>
      </div>
    )
}

export default ShopCard
