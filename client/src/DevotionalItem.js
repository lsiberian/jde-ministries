import React from 'react'
const DevotionalItem = ({ title, verse, teaching }) => (
    <li>
        <p>Title: {title}</p>
        <p>Verse: {verse}</p>
        <p>Teaching: {teaching}</p>
    </li>
)


export default DevotionalItem