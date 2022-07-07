import React from 'react'
import PropTypes from 'prop-types'
import ShopCard from './ShopCard'

function CardsView({products}) {
    return (
        <div className="cards_view">
            {products.map((product, index) => {
                return <ShopCard key={index} product={product} />
            })}
        </div>
    )
}

CardsView.propTypes = {
    products: PropTypes.array.isRequired
}

export default CardsView
