import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons"

import { User } from "models/User"

import { WelcomeDashboard } from "./WelcomeDashboard"

interface MainNavProps {
  user: User;
}

export const MainNav = ({ user }: MainNavProps): JSX.Element => {
  return (
    <Router>
      <div className="bg-gray-lightest">
        <nav className="fixed inset-x-0 bottom-0 mx-auto border-t-1 border-gray-light shadow-md">
          <ul className="flex flex-row justify-around pt-4 pb-3 px-5 bg-white">
            <li>
              <Link to="/">
                <div className="flex flex-col items-center text-gray-dark">
                  <FontAwesomeIcon
                      style={{ fontSize: "1.65em" }}
                      icon={faHome}
                  />
                  <small className="pt-1">Home</small>
                </div>
              </Link>
            </li>
            <li>
              <div className="flex flex-col items-center text-gray-dark">
                <FontAwesomeIcon
                    style={{ fontSize: "1.65em" }}
                    icon={faUser}
                />
                <small className="pt-1">Account</small>
              </div>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/">
            <WelcomeDashboard
                user={user}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}