import React from "react"
import { useForm } from "react-hook-form"
import useToken from "../../utils/useToken"
import Input from "../form/Input"
import Button from "../Button"
import { useHistory } from "react-router-dom"
import { mutate } from "swr"
import Form from "../form/Form"

/*
const Login = () => {
  const { handleSubmit, control, reset } = useForm();
  const [formMessage, setFormMessage] = React.useState('')
  const [submitting, setSubmitting] = React.useState(false)
  const token = useToken()
  const history = useHistory()

  const formSubmit = (data) => {
    setSubmitting(true)
    const formData = data
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': token
      },
      body: JSON.stringify(formData)
    }).then((response) => {return response.json()})
      .then((data) => {
        setFormMessage(JSON.stringify(data))
        setSubmitting(false)
        if(!data.error) {
          mutate('/api/session')
          history.push('/')
        }
      });
  }
  return (
    <div>
      <div>{formMessage}</div>
      <form onSubmit={handleSubmit(formSubmit)}>
        <fieldset disabled={submitting}>
          <Input fullWidth name="email" control={control} />
          <Input fullWidth type="password" name="password" control={control} />
        </fieldset>
        {submitting ? (
          <div>Ingresando...</div>
        ) : (
          <Button type="submit" color="green-700">Ingresar</Button>
        )}
      </form>
    </div>
  )
}
*/

const defaultValues = {
  email: '',
  password: ''
}

const Login = () => {
  return (
    <div>
      <Form defaultValues={defaultValues} action={{url: '/api/login', buttonLabel: 'Ingresar', mutateUrl: '/api/session'}}>
        <Input fullWidth name="email" label="Email" required />
        <Input fullWidth name="password" label="Contraseña" required type="password" />
      </Form>
    </div>
  )
}

export default Login