import React from 'react'
import { Router, Switch, Route, Link } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { createGlobalStyle } from 'styled-components/macro'
import Styled from './Styled'

const GlobalStyle = createGlobalStyle`
  #shell {
    display: none;
  }
  article {
    padding: 20px;
    margin: 20px;
    border: 1px solid #ddd;
  }
  h3 {
    margin: 0 0 30px;
    width: 300px;
    height: 40px;
  }
`

const history = new createBrowserHistory()

const RouteWithLayout = ({ render: Render, ...props }) => {
    return (
        <Route
            {...props}
            render={() => (
                <>
                    <GlobalStyle />
                    <header>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="styled">Styled</Link>
                                </li>
                            </ul>
                        </nav>
                    </header>
                    <main>
                        <Render />
                    </main>
                </>
            )}
        />
    )
}

const R = () => (
    <Router history={history}>
        <Switch>
            <RouteWithLayout path="/styled" render={Styled} />
            <RouteWithLayout path="/" render={() => null} />
        </Switch>
    </Router>
)

export default R
