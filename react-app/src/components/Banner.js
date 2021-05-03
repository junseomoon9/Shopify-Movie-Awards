import React, {useCallback, useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext'


const Banner = () => {

    const {nominations} = useContext(GlobalContext);

    return (
        (nominations.length == 5) ? (
            <div className="banner">
                <h4>Maximum Capacity of 5 Nominations Filled!</h4>
            </div>
        ) : ""
    )
}

export default Banner
