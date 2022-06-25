import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
    const prams=useParams()
  return (
      <section>
        <h1>
            Product details
        </h1>
        <h3>{prams.productId}</h3>
      </section>
  )
}
