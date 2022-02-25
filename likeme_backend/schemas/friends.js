export default {
    name: 'friends',
    title: 'Friends',
    type: 'document',
    fields: [
      {
        name: 'friend',
        title: 'Friend',
        type: 'array',
        of: [{ type: 'userDetail' }],
      },
      {
        name: 'userId',
        title: 'UserId',
        type: 'string',
      },
    ],
  };