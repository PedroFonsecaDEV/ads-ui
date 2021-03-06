import { withStyles } from "@material-ui/core";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import CreativesList from "../../components/Creatives/CreativesList/CreativesList";
import CreativesNew from "../../components/Creatives/CreativesNew/CreativesNew";
import CreativesView from "./CreativesView/CreativesView";

import { styles } from "./Creatives.style";

class Creatives extends React.Component<any, any> {
  public render() {
    const { match, classes } = this.props;
    return (
      <div className={classes.root}>
        <Switch>
          <Route exact path={match.url} component={CreativesList} />
          <Route exact path={match.url + "/new"} component={CreativesNew} />
          <Route exact path={match.url + "/:creativeId"} component={CreativesView} />
          <Redirect to={match.url} />
        </Switch>
      </div>
    );
  }
}

export default withStyles(styles)(Creatives);
