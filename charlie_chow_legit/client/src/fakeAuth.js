export const isAuthenticated = () => {
  return localStorage.isAuthenticated
}

export const login = () => {
  return localStorage.setItem('isAuthenticated', true)
}

export const logout = () => {
  return localStorage.removeItem('isAuthenticated')
}