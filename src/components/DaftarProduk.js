import React, { Component } from 'react'
import API from '../axios/Api'

import CardProduk from './CardProduk'

class DaftarProduk extends Component {

    // state untuk menyiman data produk
    state={
        produk:[]
    }

    componentDidMount= async() =>{
        await API.get('get_data.php')
        .then(response=>this.setState({
            // update state nya
            produk:response.data
        }))

    }
    render() {

        const renderData = this.state.produk.map(produk=>{
            return(
                <CardProduk produk={produk} key={produk.id} refresh={this.componentDidMount} />
            )
        })
        return (
            <div className="container">
                <div className="row">
                    {renderData}
                </div>
            </div>
            
        )
    }
}

export default DaftarProduk
