import React from 'react';
import { Header, Table, Rating } from 'semantic-ui-react';

const MyRestaurants = () => (
  <div>
    <Header as="h1">1st - 31st October</Header>
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Location</Table.HeaderCell>
          <Table.HeaderCell>Cuisine</Table.HeaderCell>
          <Table.HeaderCell>Promotion</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Creatine supplementation is the reference </Table.Cell>
          <Table.Cell>Creatine supplementation is the reference </Table.Cell>
          <Table.Cell>Creatine supplementation is the reference </Table.Cell>
          <Table.Cell>Creatine supplementation is the reference compound for increasing
            muscular creatine levels; there is
            variability in this increase, however, with some nonresponders.
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>We working</Table.Cell>
          <Table.Cell>Weight</Table.Cell>
          <Table.Cell>65 studies</Table.Cell>
          <Table.Cell>Creatine is the reference compound for power improvement, with numbers
            from one meta-analysis to assesspotency
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>

);

export default MyRestaurants;
