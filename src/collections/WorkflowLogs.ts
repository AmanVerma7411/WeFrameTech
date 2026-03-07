import { CollectionConfig } from 'payload'

export const WorkflowLogs: CollectionConfig = {
  slug: 'workflowLogs',

  admin: {
    useAsTitle: 'action',
  },

  access: {
    create: () => true,   // workflow engine log create kar sake
    update: () => false,  // logs edit nahi ho sakte
    delete: () => false,  // logs delete nahi ho sakte
  },

  fields: [
    {
      name: 'workflowId',
      type: 'relationship',
      relationTo: 'workflows',
      required: true,
    },

    {
      name: 'documentId',
      type: 'text',
      required: true,
    },

    {
      name: 'collectionName',
      type: 'text',
      required: true,
    },

    {
      name: 'stepName',
      type: 'text',
    },

    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
    },

    {
      name: 'action',
      type: 'text',
      required: true,
    },

    {
      name: 'comment',
      type: 'textarea',
    },

    {
      name: 'timestamp',
      type: 'date',
      defaultValue: () => new Date(),
    },
  ],
}