export const workflowEndpoints = [

  // Manual Workflow Trigger
  {
    path: '/workflows/trigger',
    method: 'post',

    handler: async (req: any, res: any) => {

      try {

        const { collection, docId } = req.body

        if (!collection || !docId) {
          return res.status(400).json({
            message: 'collection and docId are required'
          })
        }

        const doc = await req.payload.findByID({
          collection,
          id: docId
        })

        if (!doc) {
          return res.status(404).json({
            message: 'Document not found'
          })
        }

        console.log(`Manual workflow trigger for ${collection} : ${docId}`)

        return res.json({
          success: true,
          document: doc
        })

      } catch (error) {

        console.error(error)

        return res.status(500).json({
          message: 'Workflow trigger failed'
        })

      }
    }
  },

  // Workflow Status API
  {
    path: '/workflows/status/:docId',
    method: 'get',

    handler: async (req: any, res: any) => {

      try {

        const docId = req.params.docId

        const logs = await req.payload.find({
          collection: 'workflowLogs',
          where: {
            documentId: {
              equals: docId
            }
          }
        })

        return res.json({
          workflowLogs: logs.docs
        })

      } catch (error) {

        console.error(error)

        return res.status(500).json({
          message: 'Failed to fetch workflow status'
        })

      }
    }
  }

]