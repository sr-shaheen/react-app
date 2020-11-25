import React from 'react'
import Person from './Person'

function PersonList() {
    const person = [

        {
            id:1,
            name: 'Shaheens',
            age: 25,
            skill: 'Angular'
        },
        {
            id:2,
            name: 'Sumon',
            age: 25,
            skill: 'Dot Net'
        },
        {
            id:3,
            name: 'Palash',
            age: 25,
            skill: 'SQA'
        },
        {
            id:4,
            name: 'Mehedy',
            age: 25,
            skill: 'Network'
        }
    ]

    const personList = person.map(p => <Person key={p.id} person={p} />)
    return (
        <div>
            {personList}
        </div>
    )
}

export default PersonList
