export default {
  name: 'experiences',
  title: 'Experiences',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'companyPic',
      title: 'Company´s Pic',
      type: 'image',
      options: {
        hotspot: 'true',
      },
    },
    {
      name: 'dateStart',
      title: 'Start Date',
      type: 'date',
    },

    {
      name: 'dateEnded',
      title: 'End Date',
      type: 'date',
    },
    {
      name: 'isCurrentlyWorkingHere',
      title: 'Is Currently Working Here?',
      type: 'boolean',
    },
    {
      name: 'technology',
      title: 'Technology',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skills'}}],
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}
