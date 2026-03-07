export const workflowEngine = async ({ doc, req }: any) => {

  if (!doc.workflow) return

  const workflow = await req.payload.findByID({
    collection: 'workflows',
    id: doc.workflow,
  })

  const step = workflow?.steps?.find(
    (s: any) => s.order === doc.currentStep
  )

  if (!step) return

  console.log(`Workflow Step Triggered: ${step.stepName}`)

  // create audit log
  await req.payload.create({
    collection: 'workflowLogs',
    data: {
      workflowId: workflow.id,
      documentId: doc.id,
      collectionName: 'blogs',
      stepName: step.stepName,
      action: 'triggered',
      user: req.user?.id,
    }
  })

  console.log(`Send email to role: ${step.assignedRole}`)
}