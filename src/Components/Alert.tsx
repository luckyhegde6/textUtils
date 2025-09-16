import React from 'react'

interface AlertProps {
  alert?: { message: string; type: string } | null
}

export default function Alert({ alert }: AlertProps) {
  return (
    <div style={{ height: '50px' }}>
      {alert && (
        <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
          <strong style={{ display: 'block', textAlign: 'center' }}>{alert.message}</strong>
        </div>
      )}
    </div>
  )
}
