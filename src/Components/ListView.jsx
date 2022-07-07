import React from 'react'
import PropTypes from 'prop-types'
import ShopItem from './ShopItem'

function ListView({products}) {
    return (
        <div className="list_view">
            {products.map((product, index) => {
                return <ShopItem key={index} product={product} />
            })}
        </div>
    )
}

ListView.propTypes = {
    products: PropTypes.array.isRequired,
}

export default ListView

