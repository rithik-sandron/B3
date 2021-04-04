import React from 'react'

export default function Grid(props) {
    const style = {backgroundColor: '#000', display: 'grid', columnGap: '1%', width: '85%',textAlign: 'center', margin: 'auto', gridTemplateColumns: props.size}
    return (
        <div style = {style}>
            {props.children}
        </div>
    )
}
