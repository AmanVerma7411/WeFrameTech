import { Plugin } from 'payload'

export const workflowPlugin: Plugin = config => {

  console.log('Workflow Plugin Loaded')

  return config
}