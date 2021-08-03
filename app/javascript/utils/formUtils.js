function isHash(obj) {
  if(obj === null || obj instanceof Array) return false
  return typeof obj === 'object'
}

export function setApiErrors(errorData, setError) {
  const errors = objectFlatten(errorData)
  Object.entries(errors).forEach(([attr, messages]) => {
    setError(attr, { types: messages.reduce((acc, message, i) => { return { ...acc, [`${attr}_${i}`]: message }}, {}) })
  })
}

export function objectFlatten(object, parentKey = '') {
  return Object.entries(object).reduce(
    (acc, [key, val], i) => {
      const newKey = parentKey ? `${parentKey}[${key}]` : key
      if(isHash(val)) {
        return {
          ...acc,
          ...objectFlatten(val, newKey)
        }
      }
      return {
        ...acc,
        [newKey]: val
      }
    }, {}
  )
}