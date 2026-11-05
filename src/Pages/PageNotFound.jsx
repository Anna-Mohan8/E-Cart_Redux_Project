import React from 'react'
import { Link } from 'react-router-dom'


function PageNotFound() {
  return (
    <div style={{height:'95vh'}} className='d-flex justify-content-center align-items-center flex-column'>
      <img  className='w-25' src="https://img.freepik.com/premium-vector/404-error-illustration-page-found-flat-vector-problem-warning-lost-connection-web-failure_505956-299.jpg" alt="page not found"/>
      <h1 className='my-5'>WE ARE SORRY, IT LOOKS LIKE YOU'RE LOST</h1>
      <Link to={'/'} className='btn btn-dark'>BACK TO HOME</Link>
    </div>
  )
}

export default PageNotFound
