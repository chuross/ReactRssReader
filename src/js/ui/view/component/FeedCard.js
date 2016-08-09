import React, { Component, PropTypes } from 'react'
import { Card, CardHeader } from 'material-ui/Card'
import { List, ListItem } from 'material-ui/List'

// EntryCard.propTypes = {
//   entries: PropTypes.array.isRequired
// };

export default class FeedCard extends Component {
  // defaultProps = { feeds: [] };

  render() {
    const { feed } = this.props;
    const margin = {margin: '20px 60px'};
    return (
      <Card style={margin}>
          <CardHeader title={feed != null ? feed.title : '無題'} subtitle={feed.website} />
          <List>
            {feed.entries.map(entry => <ListItem key={entry.id} primaryText={entry.title} />)}
          </List>
      </Card>
    );
  }
}
