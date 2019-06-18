import {
  Divider,
  Drawer,
  Hidden,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles
} from "@material-ui/core";
import classNames from "classnames";
import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { Link, Redirect, Route, Switch } from "react-router-dom";

import { CloseDrawer } from "../../../actions";
import AppBar from "../../../components/AppBar/AppBar";
import Campaigns from "../../Campaigns/Campaigns";
import Creatives from "../../Creatives/Creatives";
import Dashboard from "../../Dashboard/Advertiser/Dashboard";
import Invoices from "../../Invoices/Invoices";
import Performances from "../../Performances/Performances";
import Preferences from "../../Preferences/Preferences";

import { styles } from "./Main.style";

class Main extends React.Component<any, any> {
  public render(): any {
    const { advertisers, auth, classes, match } = this.props;
    const activeAdvertiser = _.find(advertisers, { state: "active" });
    if (
      !auth ||
      !auth.signedIn ||
      !auth.emailVerified ||
      (auth.role !== "user" && !activeAdvertiser)
    ) {
      return <Redirect to="/a" />;
    }
    const drawerItems = (
      <List>
        {/* <Link to={match.url + "/dashboard"} className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <Icon>dashboard</Icon>
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </Link>
        <Link to={match.url + "/creatives"} className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <Icon>apps</Icon>
            </ListItemIcon>
            <ListItemText primary="Creative Library" />
          </ListItem>
        </Link>
        <Link to={match.url + "/campaigns"} className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <Icon>next_week</Icon>
            </ListItemIcon>
            <ListItemText primary="Campaigns" />
          </ListItem>
        </Link> */}
        <Link to={match.url + "/performances"} className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <Icon>timeline</Icon>
            </ListItemIcon>
            <ListItemText primary="Performance" />
          </ListItem>
        </Link>
        {/* <Link to={match.url + "/invoices"} className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <Icon>receipt</Icon>
            </ListItemIcon>
            <ListItemText primary="Invoices" />
          </ListItem>
        </Link>
        <Link to={match.url + "/preferences"} className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <Icon>settings</Icon>
            </ListItemIcon>
            <ListItemText primary="Preferences" />
          </ListItem>
        </Link> */}
      </List>
    );
    return (
      <div className={classes.root}>
        <AppBar />
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open={false}
            classes={{
              docked: classNames(classes.docked),
              paper: classNames(
                classes.drawerPaper,
                !this.props.drawer.open && classes.drawerPaperClose
              )
            }}
          >
            <div className={classes.toolbar} />
            <Divider />
            {drawerItems}
          </Drawer>
        </Hidden>
        <Hidden mdUp>
          <Drawer
            variant="persistent"
            anchor="left"
            open={this.props.drawer.open}
          >
            <div className={classes.toolbar} />
            <Divider />
            {drawerItems}
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            {/* <Route path={match.url + "/dashboard"} component={Dashboard} />
            <Route path={match.url + "/creatives"} component={Creatives} />
            <Route path={match.url + "/campaigns"} component={Campaigns} /> */}
            <Route
              path={match.url + "/performances"}
              component={Performances}
            />
            {/* <Route path={match.url + "/invoices"} component={Invoices} /> */}
            {/* <Route path={match.url + "/preferences"} component={Preferences} /> */}
            <Redirect to={match.url + "/performances"} />
          </Switch>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state: any, ownProps: any) => ({
  advertisers: state.advertiserReducer.advertisers,
  auth: state.authReducer,
  drawer: state.drawerReducer
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  CloseDrawer: () => dispatch(CloseDrawer({})),
  Signout: () => dispatch(CloseDrawer({}))
});

export default withStyles(styles, { withTheme: true })(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
);
