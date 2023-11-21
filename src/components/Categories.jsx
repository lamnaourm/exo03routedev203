import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Categories() {
  return (
    <div>
        <h1>Page des categories</h1>

        <ul>
            <li><Link to='/categories/voyage'>Voyage</Link> </li>
            <li><Link to='/categories/cuisine'>Cuisine</Link> </li>
            <li><Link to='/categories/technologie'>Technologie</Link> </li>
        </ul>
    </div>
  )
}
