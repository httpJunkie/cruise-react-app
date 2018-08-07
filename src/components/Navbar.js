import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'

const Navbar = ({ selectedSub, handleSubredditChange, handleRefreshSubreddit }) => (
  <div style={{ margin: '1rem' }}>
    <Menu pointing secondary>
      <Menu.Item name='cats' active={selectedSub === 'cats'} onClick={handleSubredditChange} />
      <Menu.Item name='technology' active={selectedSub === 'technology'} onClick={handleSubredditChange} />
      <Menu.Menu position='right'>
        <Menu.Item onClick={() => handleRefreshSubreddit()}><Icon name='refresh' /></Menu.Item>
      </Menu.Menu>
    </Menu>
  </div>
)

export default Navbar