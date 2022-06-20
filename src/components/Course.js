import React from 'react'
import { Header } from './Header'
import { Part } from './Part'
import { Total } from './Total'

const Course = ({ course: { parts, name, } }) => {

    return (
        <>
            <Header header={name}></Header>
            <Part parts={parts}></Part>
            <Total exercises={parts}></Total>
        </>
    )
}

export default Course