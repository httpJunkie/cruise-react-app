import React from 'react';
import { Card } from 'semantic-ui-react';

const Post = ({ url, title, author }) => (
  <Card href={url} style={{ width: '100%' }}>
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>posted by: {author}</Card.Meta>
    </Card.Content>
  </Card>
)

export default Post