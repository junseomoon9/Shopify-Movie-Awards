import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext'
import NominatedMovie from './NominatedMovie'


const Nominations = () => {

    const {nominations} = useContext(GlobalContext);

    return (
        <div className="nominations"> 
            <h3>Nominations</h3>
            <div className="nominations-container">
                {nominations.map( movie => (
                    <NominatedMovie id={movie.id} title={movie.title} year={movie.year} poster={movie.poster}/>
                ))}
            </div>
        </div>
    )
}

export default Nominations
