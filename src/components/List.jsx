import React from 'react'
import './List.css'

const points = ['Tomatoes', 'Cucumbers', 'Potatoes', 'Bread', 'Water', 'Salt']

export class List extends React.Component {
    render() {
        return (
            <ul className="List">
                {points.map((point, id) => (
                    <li key={id}>{point}</li>)
                )}
            </ul>
        )
    }
}
