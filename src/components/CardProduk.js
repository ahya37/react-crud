import React from 'react'
import {Link} from 'react-router-dom'
import API from '../axios/Api'

import {confirmAlert} from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

function CardProduk({produk, refresh}) {

    async function deleteProduk(){
        await API.delete('delete_produk.php?id=' + produk.id)

        return refresh();
    }

    function deteleConfirm(){
        confirmAlert({
            title:'Imperial',
            message:'Apakah Anda ingin menghapus produk' + produk.nama_produk + '?',
            buttons:[
                {
                    label:'OKE DELETE',
                    onClick:()=>deleteProduk()
                },
                {
                    label:'NO',
                    onClick:()=>{}
                }
            ]
        })
    }
    return (
        <div className="col-md-3 card" style={{ margin:5 }}>
            <h3>{produk.nama_produk}</h3>
            <small>{produk.deskripsi}</small>
            <p>Harga : {produk.harga}</p>
            <p>Stok : {produk.stok}</p>
            <hr />
            <Link to={"/edit/" + produk.id}>
                <i className="fa fa-pencil-square-o" aria-hidden="ture"></i>
            </Link>
            <li className="fa fa-trash" aria-hidden="ture" onClick={deteleConfirm}></li>
            <br/>
        </div>
    )
}

export default CardProduk
