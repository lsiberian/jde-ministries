import React from 'react'
const DevotionalItem = ({item}) => (
    <div key={item.id} className="flex-item">
    {item.verse}<em><br/>{item.title}</em><br/>
    </div>
)


export default DevotionalItem