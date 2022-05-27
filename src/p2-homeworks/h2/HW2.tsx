import React, {useState} from 'react'
import Affairs from './Affairs'
import s from './HW2.module.css'

// types
export type AffairPriorityType = 'high' | 'low' | 'middle' // need to fix any
export type AffairType = {
    id: number,
    name: string,
    priority: AffairPriorityType
}// need to fix any
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    {id: 1, name: 'React', priority: 'high'},
    {id: 2, name: 'anime', priority: 'low'},
    {id: 3, name: 'games', priority: 'low'},
    {id: 4, name: 'work', priority: 'high'},
    {id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: string): Array<AffairType> => { // need to fix any
    if (filter === 'all') return affairs
    if (filter === 'high') {
        return affairs.filter((af) => af.priority === 'high')
    }
    if (filter === 'low') {
        return affairs.filter((af) => af.priority === 'low')

    } else {
        return affairs.filter((af) => af.priority === 'middle')
    }// need to fix
}


export const deleteAffair = (affairs: Array<AffairType>, id: number): Array<AffairType> => { // need to fix any
    return affairs.filter(aff => aff.id !== id)

}

const HW2 = () => {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (id: number) => setAffairs(deleteAffair(affairs, id)) // need to fix any

    return (
        <div>
            <hr/>
            <h3>homeworks 2</h3>
            <div className={s.body}>

                {/*should work (должно работать)*/}
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                />
            </div>

        </div>
    )
}
export default HW2

