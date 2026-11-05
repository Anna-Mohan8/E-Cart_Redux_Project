import React from 'react'
import { Link } from 'react-router-dom'

function Cart() {
  return (
    <div style={{height:"50vh"}} className='container my-5'>
      <h1 className='pt-5 text-primary fw-bold'>Cart</h1>
      <div className='row'>
        <div className="col-lg-8 border shadow">
          <table className='table'>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>....</th>
               
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Dior Perfume</td>
                <td><img width={"50px"} height={"50px"} src="https://pagpackaging.com/wp-content/uploads/2024/11/Dior-24.png" alt="no image"></img></td>
                <td>
                  <div className='d-flex'>
                    <button className='btn fs-1'>-</button>
                    <input style={{width:"40px"}} value={10} type='text' className='form-control' readOnly />
                    <button className='btn fs-1'>+</button>

                  </div>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <div className='float-end'>
            <button className='btn btn-danger'>EMPTY CART</button>
            <Link to={"/"} className='btn btn-info ms-5'>SHOP MORE</Link>
          </div>
        </div>
        <div className="col-lg-4">
          <div className='border shadow rounded'>
            <h3>Total Amount : <span className='text-danger'> $ 300</span></h3>
            <hr />
            <button className='btn btn-success w-50'>CHECKOUT</button>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart
