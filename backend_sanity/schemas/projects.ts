export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {name: 'title', title: 'name', description: 'Title of the project', type: 'string'},
    {name: 'image', title: 'Image', type: 'image', options: {hotspot: 'true'}},
    {
      name: 'summary',
      title: 'Summary',
      type: 'string',
    },
    {
      name: 'tech',
      title: 'Tecnologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skills'}}],
    },
    {name: 'link', title: 'Link', type: 'url'},
  ],
}
