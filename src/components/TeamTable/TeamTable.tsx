import * as React from 'react';

import { createStyleSheet, withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

import DeleteIconButton from '../DeleteButton/DeleteIconButton';

const styleSheet = createStyleSheet(theme => ({
  sectionContainer: {
    marginTop: '40px'
  },
  paper: {
    margin: theme.spacing.unit
  },
  tableWidthFix: {
    tableLayout: 'fixed'
  },
  table2Cell: {
    width: '50%'
  }
}));

type TeamTableProps = {
  team: {
    name: string
  },
  users: [{
    id: number,
    name: string,
    points: number
  }],
  classes: {
    sectionContainer: string,
    paper: string,
    tableWidthFix: string,
    table2Cell: string
  }
};

{/*
  We should make the "Add User" button "Edit Users",
  then show a "+" button at the top to add more users,
  and show the trashcan button at the end of each user
  row to delete that user. (Trashcans to remain hidden otherwise?)
*/}

class TeamTable extends React.PureComponent<TeamTableProps> {
  render() {
    return (
      <div className={this.props.classes.sectionContainer}>
        <Paper className={this.props.classes.paper}>
          <Table className={this.props.classes.tableWidthFix}>
            <TableHead>
              <TableRow>
                <TableCell className={this.props.classes.table2Cell}>
                  {this.props.team.name}
                </TableCell>
                <TableCell numeric={true} className={this.props.classes.table2Cell}>
                  <Button>ADD USER</Button>
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </Paper>
        <Paper className={this.props.classes.paper}>
          <Table>
            <TableBody>
              {this.props.users.map(user => {
                return (
                  <TableRow key={user.id}>
                    <TableCell className={this.props.classes.table2Cell}>
                      {user.name}
                    </TableCell>
                    <TableCell numeric={true}>
                      {user.points}
                    </TableCell>
                    <TableCell>
                      <Button>EDIT</Button>
                    </TableCell>
                    <TableCell numeric={true}>
                      <DeleteIconButton />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styleSheet)(TeamTable);
