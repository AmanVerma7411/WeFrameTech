import { CollectionConfig } from 'payload'
import { workflowEngine } from '../hooks/workflowEngine'

export const Blogs: CollectionConfig = {
  slug: 'blogs',

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
      name: 'content',
      type: 'textarea',
    },

    {
      name: 'workflow',
      type: 'relationship',
      relationTo: 'workflows',
    },

    {
      name: 'workflowStatus',
      type: 'select',
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'In Progress',
          value: 'progress',
        },
        {
          label: 'Approved',
          value: 'approved',
        },
        {
          label: 'Rejected',
          value: 'rejected',
        },
      ],
      defaultValue: 'draft',
    },

    {
      name: 'currentStep',
      type: 'number',
      defaultValue: 1,
    },

    {
      name: 'approvedBy',
      type: 'relationship',
      relationTo: 'users',
    },

    {
      name: 'approvedAt',
      type: 'date',
    },
  ],
}