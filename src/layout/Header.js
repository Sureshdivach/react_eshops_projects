import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='w-100 d-flex justify-content-between border bg-primary text-white ps-3 pe-3'>
        <h3>eShop</h3>
        <h3>  <Link to="/SignInPage"/> Login<Link/></h3>
    </div>
  )
}
