'use client'

import React from 'react'

export const WorkflowPanel = ({ data }: any) => {

  return (
    <div style={{ border: '1px solid #ddd', padding: 20, marginTop: 20 }}>
      
      <h3>Workflow Progress</h3>

      <p>Current Step: {data?.currentStep}</p>
      <p>Status: {data?.workflowStatus}</p>

      <div style={{ marginTop: 10 }}>
        <button>Approve</button>
        <button style={{ marginLeft: 10 }}>Reject</button>
        <button style={{ marginLeft: 10 }}>Comment</button>
      </div>

    </div>
  )
}