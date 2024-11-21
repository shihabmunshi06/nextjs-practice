import React from 'react'
import Note from './Note'
import { useSelector } from 'react-redux'
export default function Show() {
    const { completedTask } = useSelector(state => state)
    return (
        <div>{completedTask.map((each, index) => <Note key={index} data={each} index={index} />)}</div>
    )
}
