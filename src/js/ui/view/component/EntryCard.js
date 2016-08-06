import React, { Component, PropTypes } from 'react'
import { Card, CardHeader } from 'material-ui/Card'
import { List, ListItem } from 'material-ui/List'

// EntryCard.propTypes = {
//   entries: PropTypes.array.isRequired
// };

export default class EntryCard extends Component {
  render() {
    return (
      <Card>
          <CardHeader title='test' />
          <List>
            {this.props.entries.map(entry => <ListItem key={entry.id} primaryText={entry.title} href={entry.originId} />)}
          </List>
      </Card>
    );
  }
}
