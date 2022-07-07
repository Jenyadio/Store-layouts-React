import React from 'react'
import PropTypes from 'prop-types'

function IconSwitch({icon, onSwitch}) {

    return (
        <div className='icon_placement'>
          <span className="material-icons" onClick={() => {onSwitch()}}>
            {icon}
          </span>
        </div>
    )
}

IconSwitch.propTypes = {
    icon: PropTypes.string.isRequired,
    onSwitch: PropTypes.func.isRequired,
}

export default IconSwitch
