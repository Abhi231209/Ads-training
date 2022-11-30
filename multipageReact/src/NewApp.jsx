import React from 'react'
import { Switch,Route ,Redirect} from 'react-router-dom'
import AllQuotes from './pages2/AllQuotes'
import NewQuotes from './pages2/NewQuotes'
import QuotesDetails from './pages2/QuotesDetails'
import Layout from "./components/layout/Layout"
import NotFound from './pages2/NotFound'

export default function NewApp() {
  return (
    <Layout>
            <Switch>
                <Route path="/" exact>
                <Redirect to="/quotes"/>
                </Route>
                <Route path="/quotes" exact>
                <AllQuotes/>
                </Route>
                <Route path="/quotes/:quoteid">
                    <QuotesDetails/>
                </Route>
                <Route path="/new-quote">
                    <NewQuotes/>
                </Route>
                <Route path={'*'}>
                    <NotFound/>
                </Route>
            </Switch>
    </Layout>
  )
}
