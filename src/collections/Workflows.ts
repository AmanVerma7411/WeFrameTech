import { CollectionConfig } from 'payload'

export const Workflows: CollectionConfig = {
  slug: 'workflows',

  admin: {
    useAsTitle: 'name',
  },

  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },

    {
      name: 'targetCollection',
      type: 'text',
      required: true,
    },

    {
      name: 'steps',
      type: 'array',
      fields: [
        {
          name: 'stepName',
          type: 'text',
          required: true,
        },

        {
          name: 'stepType',
          type: 'select',
          options: [
            { label: 'Approval', value: 'approval' },
            { label: 'Review', value: 'review' },
            { label: 'Signoff', value: 'signoff' },
            { label: 'Comment', value: 'comment' },
          ],
        },

        {
          name: 'assignedRole',
          type: 'text',
        },

        {
          name: 'assignedUser',
          type: 'relationship',
          relationTo: 'users',
        },

        {
          name: 'order',
          type: 'number',
        },

        {
          name: 'conditionField',
          type: 'text',
        },

        {
          name: 'conditionOperator',
          type: 'select',
          options: ['>', '<', '=', '>=', '<='],
        },

        {
          name: 'conditionValue',
          type: 'number',
        },
      ],
    },
  ],
}