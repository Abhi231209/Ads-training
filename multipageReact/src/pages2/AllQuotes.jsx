import React from 'react'
import QuoteList from '../components/quotes/QuoteList'

const DummyData=[
    {id:'q1',author:"Abhishek",text:"Learning React is Fun!"},
    {id:'q2',author:"Jangra",text:"Learning React is Great!"}
]

export default function AllQuotes() {
  return (
  <QuoteList quotes={DummyData}/>
  )
}
