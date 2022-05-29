import React, {Dispatch} from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'


type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: Dispatch<FilterType>
    deleteAffairCallback: (_affairs: AffairType[], _id: number) => void
}


function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = (butName: FilterType) => {
        props.setFilter(butName)
    }
    const setHigh = (butName: FilterType) => {
        props.setFilter(butName)
    }
    const setMiddle = (butName: FilterType) => {
        props.setFilter(butName)
    }
    const setLow = (butName: FilterType) => {
        props.setFilter(butName)
    }

    return (
        <div>
            {mappedAffairs}
            <button onClick={(e) => setAll('all')}>All</button>
            <button onClick={(e) => setHigh('high')}>High</button>
            <button onClick={(e) => setMiddle('middle')}>Middle</button>
            <button onClick={(e) => setLow('low')}>Low</button>
        </div>
    )
}

export default Affairs
