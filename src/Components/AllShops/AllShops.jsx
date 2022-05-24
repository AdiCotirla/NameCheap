import React, {Component, useState} from 'react'
import { StoresData } from '../../Data/StoresData'
import StoreFound from './StoreFound'
import "../../Styling/allstores.css"


export default class AllShops extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
            filteredStore : [...StoresData],
            stores : [...StoresData]
        }
        this.data = [
            { letter: "A" },
            { letter: "B" },
            { letter: "C" },
            { letter: "D" },
            { letter: "E" },
            { letter: "F" },
            { letter: "H" },
            { letter: "K" },
            { letter: "N" },
            { letter: "O" },
            { letter: "P" },
            { letter: "R" },
            { letter: "S" },
            { letter: "T" },
            { letter: "V" },
            { letter: "All" }
        ]
      
    }
  
   
    FindStore(letter) {
        if (letter === "All" || letter === null) {
            this.setState({filteredStore : StoresData})
        }
        else {
            const startsWithN = this.state.stores.filter((country) => country.name.startsWith(letter));
            this.setState({filteredStore : startsWithN})
        }
    }

    render(){
    return (
        <div className='stores-container' >
            <h1 className='stores-header'>All Shops</h1>
            <div className='filter-container'>
            {this.data.map((store, id) => {
                return (
                        <button className='letter-button' key={id} onClick={() => {
                            this.FindStore(store.letter)
                        }}>{store.letter}</button>
                )
            })}</div>
            <StoreFound array={this.state.filteredStore}></StoreFound>
        </div>
    )
}
}