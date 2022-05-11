import React from 'react'
import Counter from './components/Counter'
import Auth from './components/Auth'
import Header from './components/Header'

export default function Main() {
  return (
    <div>
      <Header />
      <Auth />
      <Counter />
    </div>
  )
}
