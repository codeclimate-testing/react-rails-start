import React from 'react'
import readCookie from './readCookie'

/* const useToken = () => {
  const [token, setToken] = React.useState(null)

  React.useEffect(() => {
    const token = document.querySelector('meta[name="csrf-token"]').content;
    setToken(token)
  }, [])

  return token
} */

const useToken = () => {
  const [token, setToken] = React.useState(null)

  React.useEffect(() => {
    const cookie = decodeURIComponent(readCookie('X-CSRF-Token'))
    setToken(cookie)
  }, [])

  return token
}

export default useToken
