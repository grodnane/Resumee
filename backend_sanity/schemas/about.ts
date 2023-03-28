

export default {
    name: 'about',
    type: 'document',
      title: 'About',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        options:{
            hotspot:true,
        }
      },
      {
        name: 'text',
        type: 'string',
        title: 'Text'
      }
    ]
  }