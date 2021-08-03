import React from "react"
import PropTypes from "prop-types"
import Card from "../../card/Card"
import CardBody from "../../card/CardBody"
import CardTitle from "../../card/CardTitle"
import Title from "../../typography/Title"
import Subtitle from "../../typography/Subtitle"
import Input from "../../form/Input"
import Button from "../../Button"
import useSWR, { mutate } from "swr"
import useToken from "../../../utils/useToken"
import { useForm } from "react-hook-form"
import { ErrorMessage } from '@hookform/error-message'
import Form from "../../form/Form"

/*const Create = (props) => {
  const { postId, commentId } = props
  const defaultValues = {
    parent_id: commentId,
    body: ''
  }
  const { handleSubmit, control, reset, setError, formState: { isSubmitting, errors: formErrors } } = useForm({criteriaMode: 'all', defaultValues});
  const [open, setOpen] = React.useState(false)
  const token = useToken()
  const apiPath = `/api/posts/${postId}/comments`

  const toggleForm = (e) => {
    setOpen(!open)
  }
  const formSubmit = (formData) => {
    fetch(apiPath, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': token
      },
      body: JSON.stringify({comment: formData})
    }).then((response) => {return response.json()})
      .then((data) => {
        mutate(apiPath)
        if(data.errors) {
          Object.entries(data.errors).forEach(error => {
            const [attr, messages] = error
            setError(attr, { types: messages.reduce((acc, message, i) => { return { ...acc, [`${attr}_${i}`]: message }}, {}) })
          })
        }
      }).finally(() => reset(defaultValues));
  }
  
  return (
          <Card>
            <CardBody>
            <div className="w-full">
              <form onSubmit={handleSubmit(formSubmit)}>
                <fieldset disabled={isSubmitting}>
                  <Input control={control} type="hidden" noLabel name="parent_id" defaultValue={commentId} />
                  <Input control={control} noLabel required fullWidth name="body" type="textarea" />
                </fieldset>
                {isSubmitting ? (
                  <div>Creando...</div>
                ) : (
                  <Button type="submit" color="green-700">{commentId ? 'Responder' : 'Comentar'}</Button>
                )}
              </form>
            </div>
            </CardBody>
          </Card>
         )
}*/
const Create = (props) => {
  const { postId, commentId, onSuccess } = props
  const defaultValues = {
    comment: {
      parent_id: commentId || '',
      body: ''
    }
  }
  const apiPath = `/api/posts/${postId}/comments`

  const handleSuccess = () => {
    console.log('Comentado!!')
    onSuccess && onSuccess()
  }
  
  return (
    <Card>
      <CardBody>
        <div className="w-full">
          <Form
            defaultValues={defaultValues}
            action={{
              url: apiPath,
              buttonLabel: commentId ? 'Responder' : 'Comentar'
            }}
            onSuccess={handleSuccess}
          >
            <Input type="hidden" name="comment[parent_id]" noLabel />
            <Input type="textarea" name="comment[body]" noLabel required fullWidth />
          </Form>
        </div>
      </CardBody>
    </Card>
  )
}

export default Create
