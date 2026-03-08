export const workflowEndpoints = [
  // Manual Workflow Trigger
  {
    path: '/workflows/trigger',
    method: 'post' as const,

    handler: async (req: any) => {
      try {
        const { collection, docId } = await req.json()

        if (!collection || !docId) {
          return Response.json({ message: 'collection and docId are required' }, { status: 400 })
        }

        const doc = await req.payload.findByID({
          collection,
          id: docId,
        })

        if (!doc) {
          return Response.json({ message: 'Document not found' }, { status: 404 })
        }

        console.log(`Manual workflow trigger for ${collection}: ${docId}`)

        return Response.json({
          success: true,
          document: doc,
        })
      } catch (error) {
        console.error(error)

        return Response.json({ message: 'Workflow trigger failed' }, { status: 500 })
      }
    },
  },

  // Workflow Status API
  {
    path: '/workflows/status/:docId',
    method: 'get' as const,

    handler: async (req: any) => {
      try {
        const { docId } = req.routeParams

        const logs = await req.payload.find({
          collection: 'workflowLogs',
          where: {
            documentId: {
              equals: docId,
            },
          },
        })

        return Response.json({
          workflowLogs: logs.docs,
        })
      } catch (error) {
        console.error(error)

        return Response.json({ message: 'Failed to fetch workflow status' }, { status: 500 })
      }
    },
  },
]
