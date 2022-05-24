import React from 'react'

export default function StoreFound(props) {
    if (props.array.length === 0) {
        return (
            <div className='store'>
                <h1>No stores available</h1>
            </div>
        )
    }
    else {
        return (<div className='stores-filtered-container'>
            {props.array.map((store, id) => {
                return (
                    <div className='shop' key={id}>
                        <div className='image-container-store'>
                            <img src={store.src} alt="store" className='image-logo'/>
                        </div>
                        <a href={store.path} className="store-path"><p className='store-name'>{store.name}</p></a>
                            <a href={store.path} className="store-path">
                                <p className='deals'>Check deals & offers or  </p>
                               </a>
                                <a href={store.site} className="website-store">
                                    <button className='website-button'>WEBSITE</button>
                           
                        </a>
                    </div>
                )
            })}
        </div>
        )
    }
}
