import React from 'react'
import { useForm } from 'react-hook-form'
import useToken from '../../utils/useToken'
import Input from '../form/Input'
import Button from '../Button'
import { useHistory } from 'react-router-dom'
import { mutate } from 'swr'
import Form from '../form/Form'
import { apiLogin } from '../../utils/api'

const defaultValues = {
  user: {
    email: '',
    name: '',
    last_name: '',
    password: '',
    password_confirmation: ''
  }
}

const Signup = () => {
  const history = useHistory()
  const token = useToken()

  const afterSignup = (formData) => {
    const { user: { email, password } } = formData
    const loginData = { email, password }
    apiLogin(loginData, token).finally(() => {
      history.push('/')
    })
  }

  return (
    <div>
      <Form onSuccess={afterSignup} defaultValues={defaultValues} action={{ url: '/api/users', buttonLabel: 'Registrarse' }}>
        <Input fullWidth required name="user[email]" label="Email" />
        <Input fullWidth required name="user[name]" label="Nombre" />
        <Input fullWidth required name="user[last_name]" label="Apellido" />
        <Input fullWidth required name="user[password]" label="Contraseña" type="password" />
        <Input fullWidth required name="user[password_confirmation]" label="Confirmar contraseña" type="password" />
      </Form>
    </div>
  )
}

export default Signup
