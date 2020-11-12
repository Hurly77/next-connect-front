import { alertConstants } from '../_constants'

export const alertActins = {
  success,
  error,
  clear
}

const success = (message) => {
  return {type: alertConstants.SUCCESS, message}
}

const error = (message) => {
  return {type: alertConstants.ERROR, message}
}

const clear = (message) => {
  return {type: alertConstants.CLEAR, message}
}
