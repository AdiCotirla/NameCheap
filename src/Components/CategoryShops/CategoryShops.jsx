
import React, { Component } from 'react'
import { StoresData } from '../../Data/StoresData'
import "../../Styling/allstores.css"
import StoreFound from '../AllShops/StoreFound'


export default class CategoryShops extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: this.props.filter,
            show: this.props.show,
            category: this.props.categorie,
            filteredStore: [...StoresData],
            stores: [...StoresData]
        }
    }
    render() {
            return (
                <div className='stores-container' >
                    <h1 className='stores-header'>All Shops</h1>
                    <StoreFound array={this.state.filteredStore} categorie={this.state.category} show={this.state.show} filter={this.state.filter}></StoreFound>
                </div>
            )}
      
}