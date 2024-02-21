import React from 'react'

type Props = {

    children: React.ReactNode
}

const AuthLayout = ({children}:Props) => {
  return (
    <div className=''>{children}</div>
  )
}

export default AuthLayout;