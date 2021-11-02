import React from "react"
import { WelcomeWindow } from "./WelcomeWindow"
import { Switch, Route, useHistory } from "react-router"
import { Repositories } from "./Repositories"

export const App = () => {
    const history = useHistory()
  
    return (
      <blessed-box
        style={{
          bg: "#0000ff"
        }}
      >
        <blessed-listbar
          height={1}
          items={{
            Quit: {
              keys: "q"
            },
            Repositories: {
              keys: "r",
              callback: () => history.push("/repositories")
            }
          }}
          style={{
            bg: "grey",
            height: 1
          }}
        />
        <Switch>
          <Route exact path="/" component={WelcomeWindow} />
          <Route path="/repositories" component={Repositories} />
        </Switch>
      </blessed-box>
    )
  }