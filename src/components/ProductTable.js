import jsonData from './../data.json';
import { useState } from 'react';

function ProductTable (props) {
    const {products} = props

    return(


        <div>
            <table>
                <tr>
                    <td>ProductRow</td>
                    <td>Name</td>
                    <td>Price</td>
                </tr>

                <tr>
                     {products.map(product => {
                        return <td>{products.category}</td>
                    })} 

                     {products.map(product => {
                        return <td>{products.name}</td>
                    })} 

                    <td> {products.map(product => {
                        return <p>{products.price}</p>
                    })} </td>
                </tr>

                
                
            </table>
        </div>
    )
}
export default ProductTable