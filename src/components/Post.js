import React from 'react';
import { Card } from 'semantic-ui-react';

const baseUrl = 'www.reddit.com';
const Post = ({ permalink, title, author, id }) => (
  <Card href={`https://${baseUrl}/${permalink}`} style={{ width: '100%' }}>
    <Card.Content>
      <Card.Header name='{title}'>{id} - {title}</Card.Header>
      <Card.Meta>posted by: {author}</Card.Meta>
    </Card.Content>
  </Card>
)

export default Post