import React from 'react'
import Counter from './components/Counter'
import Auth from './components/Auth'
import Header from './components/Header'
import UserProfile from './components/UserProfile'
import { useSelector} from 'react-redux';

export default function Main() {
  const auth =useSelector((state)=>state.auth.isAuth)
  console.log(auth)
  return (
    <div>
      <Header />
      {!auth &&<Auth />}
      {auth &&<UserProfile />}
      <Counter />
    </div>
  )
}
