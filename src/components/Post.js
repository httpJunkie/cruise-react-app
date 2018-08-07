import React from 'react';
import { Card } from 'semantic-ui-react';

const Post = ({ permalink, title, author }) => (
  <Card href={'https://www.reddit.com/' + permalink} style={{ width: '100%' }}>
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>posted by: {author}</Card.Meta>
    </Card.Content>
  </Card>
)

export default Post