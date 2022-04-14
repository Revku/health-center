import React from 'react'
import { routes } from 'config/routes'

const ViewsList = () => {
  return (
    <div>
        { routes.map(route => {
          if (route.icon) {
            return (
              <div>
                <div>
                  <img src={route.icon} />
                </div>
                <div>
                  <a href={route.path}>{route.name}</a>
                </div>
              </div>
            )
          }
        })}
    </div>
  )
}

export default ViewsList