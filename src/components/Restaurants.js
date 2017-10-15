import React, { Component } from 'react';
import { Button, Checkbox, Header, Table, Search, Grid } from 'semantic-ui-react';


class Restaurants extends Component {
  componentWillMount() {
    this.resetComponent();
  }

  resetComponent() {
    this.setState({
      isLoading: false,
      results: [],
      value: '',
    });
  }

  handleSearchChange(e) {
    this.setState({ isLoading: true, value: e.target.value });

    this.setState({
      isLoading: false,
      // results: ['test'],
    });
  }

  render() {
    const { isLoading, value, results } = this.state;
    return (
      <div>
        <Header as="h1" textAlign="center">Restaurants this month</Header>
        <Grid>
          <Grid.Column width={10}>
            <Search
              loading={isLoading}
              onSearchChange={e => this.handleSearchChange(e)}
              results={results}
              value={value}
            />
          </Grid.Column>
        </Grid>
        <Table compact celled definition>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Location</Table.HeaderCell>
              <Table.HeaderCell>Cuisine</Table.HeaderCell>
              <Table.HeaderCell>Website</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell collapsing>
                <Checkbox slider />
              </Table.Cell>
              <Table.Cell>John Lilki</Table.Cell>
              <Table.Cell>September 14, 2013</Table.Cell>
              <Table.Cell>American</Table.Cell>
              <Table.Cell>www.google.com</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell collapsing>
                <Checkbox slider />
              </Table.Cell>
              <Table.Cell>Jamie Harington</Table.Cell>
              <Table.Cell>September 14, 2013</Table.Cell>
              <Table.Cell>Greek</Table.Cell>
              <Table.Cell>www.google.com</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell collapsing>
                <Checkbox slider />
              </Table.Cell>
              <Table.Cell>Jill Lewis</Table.Cell>
              <Table.Cell>September 14, 2013</Table.Cell>
              <Table.Cell>French</Table.Cell>
              <Table.Cell>www.google.com</Table.Cell>
            </Table.Row>
          </Table.Body>

          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell colSpan="4">
                <Button size="small" color="blue">Select</Button>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>

      </div>
    );
  }
}

export default Restaurants;
