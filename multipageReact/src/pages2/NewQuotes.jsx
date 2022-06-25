import React from 'react'
import QuoteForm from '../components/quotes/QuoteForm'

export default function NewQuotes() {
    const addQuoteHandler=(quoteData)=>{
        console.log(quoteData)
    }
  return (
    <QuoteForm  onAddQuote={addQuoteHandler}/>
  )
}
