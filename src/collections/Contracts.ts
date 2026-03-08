import { CollectionConfig } from 'payload'
import { workflowEngine } from '../hooks/workflowEngine'

export const Contracts: CollectionConfig = {
  slug: 'contracts',

  admin: {
    useAsTitle: 'title',
  },

  hooks: {
    afterChange: [workflowEngine],
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },

    {
      name: 'description',
      type: 'textarea',
    },

    {
      name: 'workflow',
      type: 'relationship',
      relationTo: 'workflows',
    },

    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'In Progress', value: 'progress' },
        { label: 'Approved', value: 'approved' },
        { label: 'Rejected', value: 'rejected' },
      ],
      defaultValue: 'draft',
    },

    {
      name: 'currentStep',
      type: 'number',
      defaultValue: 1,
    },
  ],
}