import { AppBar, Card, CardContent, Toolbar, Typography, withStyles } from "material-ui";
import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { CreateCreatives } from "../../../actions";
import CreativeForm from "../CreativeForm/CreativeForm";

import { style } from "./CreativesNew.style";

class CreativesNew extends React.Component<any, any> {
  public render() {
    const { classes, create, user, history } = this.props;
    const handleSubmit = async (value: any, e: Event) => {
      const result = await create(value, user);
      history.push(`/main/creatives/${result.id}`);
    };

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title">New Creative</Typography>
          </Toolbar>
        </AppBar>
        <Card className={classes.card}>
          <CardContent>
            <CreativeForm unlock={true} onSubmit={handleSubmit} />
          </CardContent>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state: any, ownProps: any) => ({
  user: state.userReducer,
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  create: (value: any, user: any) => dispatch(CreateCreatives(value, user)),
});

export default withRouter(withStyles(style)(connect(mapStateToProps, mapDispatchToProps)(CreativesNew)));
