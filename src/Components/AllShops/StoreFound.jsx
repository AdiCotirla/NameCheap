import React from 'react'

export default function StoreFound(props) {
    if(props.array.length === 0)
    {
        return(
            <div className='store'>
                <h1>No stores available</h1>
            </div>
        )
    }
    else
    {
    return (<>
        {props.array.map((store, id) => {
            return (
                <div className='store' key={id}>
                    <a href= {store.path}><p>{store.name}</p></a>
                </div>
            )
        })}
        </> 
    )}
}
