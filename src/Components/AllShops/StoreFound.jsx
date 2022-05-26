import React from 'react'

export default function StoreFound(props) {
   
        return (<div className='stores-filtered-container'>
            {props.array.map((store, id) => {
                return (
                    <div className={
                    props.categorie === store.categorie  || 
                    props.categorie === store.categorie2 || 
                    props.categorie === store.categorie3 || 
                    props.categorie === store.categorie4 ||
                    props.categorie === store.categorie5 ||
                    props.show === store.show ? "shop active" : "shop inactive"} key={id}>
                        <div className='image-container-store'>
                            <img src={store.src} alt="store" className='image-logo' />
                        </div>
                        <a href={store.path} className="store-path"><p className='store-name'>{store.name}</p></a>
                        <a href={store.path} className="store-path">
                            <button className='website-button'>Deals </button>

                        </a>
                        <p> or</p>
                        <a href={store.site} className="website-store">
                            <button className='website-button'>WEBSITE</button>

                        </a>
                    </div>
                )
            })}
        </div>
        )
}
