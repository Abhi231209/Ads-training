import React from 'react'
import { Route } from 'react-router-dom'

export default function Welcome() {
  return (
    <div>
      <p>Welcome</p>
      <Route path="/welcome/new-user">
         <p>Welcome New user</p>
      </Route>
    </div>
  )
}
