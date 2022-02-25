export default {
    name: 'inbox',
    title: 'inbox',
    type: 'document',
    fields: [
      {
        name: 'userId',
        title: 'UserId',
        type: 'string',
      },
      {
        name: 'elements',
        title: 'Elements',
        type: 'array',
        of: [{ type: 'element' }],
      },
    ],
  };