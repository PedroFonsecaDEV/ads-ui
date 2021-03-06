import {
  AppBar,
  Card,
  CardContent,
  CardHeader,
  Icon,
  IconButton,
  Toolbar,
  Typography,
  withStyles,
} from "@material-ui/core";
import _ from "lodash";
import React from "react";
import { connect } from "react-redux";

import { UpdateCreatives } from "../../../actions";
import CreativeForm from "../../../components/Creatives/CreativeForm/CreativeForm";

import { styles } from "./CreativesView.style";

class CreativesView extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  public getActionButtons() {
    return (
      <div>
        <IconButton color="primary">
          <Icon>pause</Icon>
        </IconButton>
        <IconButton color="primary">
          <Icon>play_arrow</Icon>
        </IconButton>
      </div>
    );
  }

  public render() {
    const { classes, match, creatives, update, auth } = this.props;
    const { unlock } = this.state;
    const id = match.params.creativeId;
    const creative = _.find(creatives, (item) => {
      return item.id === id;
    });
    const switchLock = () => {
      this.setState({
        unlock: !unlock,
      });
    };
    const handleSubmit = async (value: any, e: Event) => {
      await update(value, auth);
    };
    const getLockButton = () => {
      if (!unlock) {
        return (
          <IconButton onClick={switchLock} color="primary">
            <Icon>lock</Icon>
          </IconButton>
        );
      } else {
        return (
          <IconButton onClick={switchLock} color="primary">
            <Icon>lock_open</Icon>
          </IconButton>
        );
      }
    };
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h5">{creative.caption}</Typography>
          </Toolbar>
        </AppBar>
        <Card className={classes.infoCard}>
          <CardHeader title="Detail" action={getLockButton()}/>
          <CardContent className={classes.content}>
            <CreativeForm creative={creative} unlock={unlock} onSubmit={handleSubmit} />
          </CardContent>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state: any, ownProps: any) => ({
  auth: state.authReducer,
  creatives: state.creativeReducer.creatives,
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  update: (value: any, user: any) => dispatch(UpdateCreatives(value, user)),
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(CreativesView));
