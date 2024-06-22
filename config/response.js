// response.js

export const response = ({isSuccess, code, message, status, data}, result) => {
  return {
      isSuccess: isSuccess,
      code: code,
      message: message,
      result: result,
      status: status,
      data: data
  }
};