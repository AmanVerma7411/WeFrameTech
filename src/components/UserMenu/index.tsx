'use client'

import React from 'react'

const UserMenu: React.FC = () => {
  const logout = async () => {
    await fetch('/api/users/logout', {
      method: 'POST',
      credentials: 'include',
    })

    window.location.href = '/admin/login'
  }

  return (
    <div style={{ padding: '10px' }}>
      <button
        onClick={logout}
        style={{
          background: '#ff4d4f',
          border: 'none',
          color: 'white',
          padding: '6px 12px',
          cursor: 'pointer',
        }}
      >
        Logout
      </button>
    </div>
  )
}

export default UserMenu
