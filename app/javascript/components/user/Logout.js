import React from 'react'
import { useHistory } from 'react-router-dom'
import useToken from '../../utils/useToken'
import { mutate } from 'swr'

const Logout = () => {
  const [loggedOut, setLoggedOut] = React.useState(false)
  const token = useToken()
  const history = useHistory()
  React.useEffect(() => {
    if (token && token !== null) {
      fetch('/api/logout', { method: 'POST', headers: { 'X-CSRF-Token': token } })
        .then((response) => { return response.json() })
        .then((data) => {
          mutate('/api/session')
          history.push('/')
        })
    }
  }, [token])
  return <div>Logging out...</div>
}

export default Logout
