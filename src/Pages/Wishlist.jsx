import { faCartShopping, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Card from 'react-bootstrap/Card';
 



function Wishlist() {
  return (
    <div className='container my-5'>
      <h1 className='pt-5 text-primary fw-bold'>Wishlist</h1>
        <div className="row pt-5">
        {/* Duplicate column according to products */}
        <div className="col-3">

            {/*cards */}
      <Card className='shadow p-2' >
      <Card.Img style={{height:"250px"}} variant="top" src="https://pagpackaging.com/wp-content/uploads/2024/11/Dior-24.png" />
      <Card.Body className='text-center'>
        <Card.Title>Perfume</Card.Title>
        <div className='d-flex justify-content-evenly'>
          <button className='btn text-danger fs-4'><FontAwesomeIcon icon={faHeartCircleXmark} /></button>
          <button className='btn text-success fs-4'><FontAwesomeIcon icon={faCartShopping} /></button>

        </div>
      
       </Card.Body>
      </Card>

        </div>
      </div>
     
    </div>
  )
}

export default Wishlist
