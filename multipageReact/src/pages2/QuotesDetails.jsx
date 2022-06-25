import React from 'react'
import { useParams ,Route } from 'react-router-dom'
import Comments from "../components/comments/Comments"

export default function QuotesDetails() {
    const prams=useParams()
  return (
      <>
        <div>QuotesDetails</div>
         <h1>{prams.quoteid}</h1>
         <Route path={`/quotes/${prams.quoteid}/comment`}>
            <Comments/>
         </Route>
      </>
  )
}
