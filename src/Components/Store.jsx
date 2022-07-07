import React, {useState} from 'react'
import PropTypes from 'prop-types'
import CardsView from './CardsView';
import ListView from './ListView';
import IconSwitch from './IconSwitch';

function Store({products, view}) {

    const [state, setState] = useState(view);
    
    const switchHandler = () => {
        if (state === 'view_module') {
            setState('view_list');
        } else {
            setState('view_module');
        }
    }

    return (
        <div>
            <IconSwitch icon={state === 'view_module' ? 'view_list' : 'view_module'} onSwitch={switchHandler}/>
            <div>
                {state === 'view_module' 
                ? 
                <CardsView products={products}/> 
                :
                <ListView products={products}/>
                }
            </div>
        </div>
    )
}

Store.propTypes = {
    products: PropTypes.array.isRequired,
    view: PropTypes.string.isRequired,
}

export default Store
