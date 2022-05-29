import React, {useState} from 'react'
import Affairs from './Affairs'






export type AffairPriorityType = 'high' | 'low' | 'middle'

export type AffairType = {
    name: string,
    _id: number,
    priority: FilterType
}

export type FilterType = 'all' | AffairPriorityType

export const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

export const deleteAffair = (affairs: AffairType[], _id: number): any => {
    return affairs.filter((a: AffairType) => a._id !== _id)
}



export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): any => {
    if (filter === 'all') return affairs
    return affairs.filter((a: AffairType) => a.priority === filter)
}

function HW2() {

    const deleteAffairCallback = (_affairs: AffairType[], _id: number) => {
        setAffairs(_affairs.filter(() => !_id))
    }
    const [affairs, setAffairs] = useState <any>(defaultAffairs)




    const [filter, setFilter] = useState <FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)

    return (
        <div>
            <hr/>
            homeworks 2
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
