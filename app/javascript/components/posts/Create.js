import React from "react"
import PropTypes from "prop-types"
import Card from "../card/Card"
import CardBody from "../card/CardBody"
import CardTitle from "../card/CardTitle"
import Title from "../typography/Title"
import Subtitle from "../typography/Subtitle"
import Input from "../form/Input"
import Button from "../Button"
import useSWR, { mutate } from "swr"
import useToken from "../../utils/useToken"
import { useForm } from "react-hook-form"
import { ErrorMessage } from '@hookform/error-message'
import { IoClose } from "react-icons/io5"
import Form from "../form/Form"

const defaultValues = {
  post: {
    title: '',
    body: ''
  }
}

const Create = (props) => {
  const [open, setOpen] = React.useState(false)

  const toggleForm = (e) => {
    setOpen(!open)
  }
  
  return open ? (
          <Card>
            <CardTitle>
              <div>
                <Title>Crear nuevo post</Title>
              </div>
              <div onClick={toggleForm}>
                <Button color="transparent" textColor="gray-500"><IoClose /></Button>
              </div>
            </CardTitle>
            <CardBody>
            <div className="w-full">
              <Form onSuccess={toggleForm} defaultValues={defaultValues} action={{url: '/api/posts', buttonLabel: 'Publicar'}}>
                <Input fullWidth required name="post[title]" label="Título" />
                <Input rules={{required: false}} fullWidth name="post[body]" type="textarea" label="Contenido"/>
              </Form>
            </div>
            </CardBody>
          </Card>
        ) : (
          <Card>
            <CardBody>
              <div onClick={toggleForm}>Agregar post</div>
            </CardBody>
          </Card>
        )
}

export default Create
