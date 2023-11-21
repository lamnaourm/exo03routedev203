import React from 'react'
import { useParams } from 'react-router-dom'

export default function DetailsArticle() {

    const {id} = useParams()
  return (
    <div>
        <h1>Page details article : {id}</h1>

    </div>
  )
}
