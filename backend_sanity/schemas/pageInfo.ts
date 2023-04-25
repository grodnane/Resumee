export default {
  name: 'pageInfo',
  title: 'Page INFO',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'role',
      type: 'string',
      title: 'Role',
    },
    {
      name: 'heroImage',
      type: 'image',
      title: 'Hero Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'aobutInfo',
      type: 'string',
      title: 'About Desciption',
    },
    {
      name: 'aboutPic',
      type: 'image',
      title: 'About Pic',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'text',
      type: 'string',
      title: 'Text',
    },
    {
      name: 'toTopImg',
      type: 'image',
      title: 'To top image',
      options: {
        hotspot: true,
      },
    },
  ],
}
