import React from "react"
import classNames from "classnames"
import { useController, useFormState, useFormContext } from "react-hook-form"
import { ErrorMessage } from '@hookform/error-message'

const Input = (props) => {
  const { control: contextControl = null } = useFormContext() || {}
  const { name, attribute_name = name, label, type, fullWidth, control = contextControl, rules, noLabel, defaultValue, required = false, ...rest } = props
  let field
  let formErrors
  if(control) {
    const {
      field: controlField
    } = useController({
      name,
      control,
      rules: { required: required, ...rules },
      defaultValue: defaultValue
    });
    const { errors } = useFormState({ control })
    formErrors = errors
    field = controlField
  }

  const inputClasses = classNames({
    'w-full': fullWidth,
  },
  'border-0',
  'border-b-2',
  'border-green-700',
  'focus:ring-white',
  'focus:bg-gray-100')

  const labelClasses = classNames({
    hidden: type === 'hidden'
  })
  const labelTextClasses = classNames({
    hidden: noLabel,
    'mt-2': true
  })

  return (
    <div>
      <label className={labelClasses}>
        <p className={labelTextClasses}>{label || name} { required && <span className="text-red-600"> *</span> }</p>
        {type == 'textarea' ? (
          <textarea className={inputClasses} name={name} required={required} {...field} {...rest}></textarea>
        ) : (
          <input className={inputClasses} name={name} required={required} type={type || 'text'} {...field} {...rest}/>
        )}
      </label>
      {control && (
        <div>
          <ErrorMessage
            errors={formErrors}
            name={attribute_name}
            render={({ messages }) => 
              messages &&
              Object.entries(messages).map(([type, message]) => {
                return <p className="text-red-600" key={type}>{message}</p>
              })
            }
          />
        </div>
      )}
    </div>
  )
}

export default Input