import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import Button from '../Button'
import useToken from '../../utils/useToken'
import useSWR, { mutate } from 'swr'
import { objectFlatten, setApiErrors } from '../../utils/formUtils'
import _ from 'lodash'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const Form = (props) => {
  const { children, defaultValues, onSuccess, action: { url, buttonLabel, mutateUrl = url } } = props
  const formHook = useForm({ criteriaMode: 'all', defaultValues })
  const { handleSubmit, reset, setError, formState, getValues } = formHook
  const token = useToken()

  const formSubmit = async (formData) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': token
      },
      body: JSON.stringify(formData)
    })
    const data = await response.json()
    mutate(mutateUrl)
    if (data.errors) {
      setApiErrors(data.errors, setError)
    }
  }

  React.useEffect(() => {
    if (formState.isSubmitted && formState.isSubmitSuccessful && _.isEmpty(formState.errors)) {
      onSuccess && onSuccess(getValues(), token)
      console.log(defaultValues)
      reset(defaultValues)
    }
  }, [formState, reset])

  return (
    <FormProvider {...formHook}>
      <form onSubmit={handleSubmit(formSubmit)}>
        <fieldset disabled={formState.isSubmitting}>
          {children}
        </fieldset>
        {formState.isSubmitting
          ? (
          <div>Cargando...</div>
            )
          : (
          <Button type="submit" color="green-700">{buttonLabel}</Button>
            )}
      </form>
    </FormProvider>
  )
}

export default Form
