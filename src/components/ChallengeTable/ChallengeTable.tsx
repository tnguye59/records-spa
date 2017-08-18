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

type ChallengeTableProps = {
  challenges: [{
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
  We should make the "Add Challenge" button "Edit Challenges",
  then show a "+" button at the top to add more Challenges,
  and show the trashcan button at the end of each Challenges'
  row to delete that Challenge. (Trashcans to remain hidden otherwise?)
*/}

class ChallengeTable extends React.PureComponent<ChallengeTableProps> {
  render() {
    return (
      <div className={this.props.classes.sectionContainer}>
        <Paper className={this.props.classes.paper}>
          <Table className={this.props.classes.tableWidthFix}>
            <TableHead>
              <TableRow>
                <TableCell className={this.props.classes.table2Cell}>
                  Challenges
                </TableCell>
                <TableCell numeric={true} className={this.props.classes.table2Cell}>
                  <Button>ADD CHALLENGE</Button>
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </Paper>
        <Paper className={this.props.classes.paper}>
          <Table>
            <TableBody>
              {this.props.challenges.map(challenge => {
                return (
                  <TableRow key={challenge.id}>
                    <TableCell className={this.props.classes.table2Cell}>
                      {challenge.name}
                    </TableCell>
                    <TableCell numeric={true}>
                      {challenge.points}
                    </TableCell>
                    <TableCell>
                      <Button>EDIT</Button>
                    </TableCell>
                    <TableCell>
                      ACCOMPLISHMENTS
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

export default withStyles(styleSheet)(ChallengeTable);
