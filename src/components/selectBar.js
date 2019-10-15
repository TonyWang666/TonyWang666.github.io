import React from "react";
import { withRouter } from "react-router-dom";
import clsx from "clsx";
import {
    AppBar,
    Divider,
    IconButton,
    CssBaseline,
    Drawer,
    List,
    Toolbar,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@material-ui/core";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import BuildIcon from "@material-ui/icons/Build";
import DescriptionIcon from "@material-ui/icons/Description";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
      display: "flex"
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginRight: 36
    },
    hide: {
      display: "none"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap"
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(8) + 1
      }
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "0 8px",
      ...theme.mixins.toolbar
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    }
  }));

const CustomAppBar = props => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    function handleDrawerOpen() {
        setOpen(true);
    }
    
    function handleDrawerClose() {
        setOpen(false);
    }

    return (
        <div className = {classes.root}>
          <CssBaseline />
          <AppBar
              position="fixed"
              className={clsx(classes.appBar, {
              [classes.appBarShift]: open
              })}
          >
              <Toolbar>
                  <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      onClick = {handleDrawerOpen}  
                      className={clsx(classes.menuButton, {
                          [classes.hide]: open
                      })}                  
                  >
                      <MenuIcon />
                  </IconButton>
              </Toolbar>
          </AppBar>
          <Drawer
              variant="permanent"
              className={clsx(classes.drawer, {
                  [classes.drawerOpen]: open,
                  [classes.drawerClose]: !open
              })}
              classes={{
                  paper: clsx({
                  [classes.drawerOpen]: open,
                  [classes.drawerClose]: !open
                  })
              }}
              open = {open}
          >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
              <Divider />
              <List>
                  {[
                      { text: "Home", icon: <HomeIcon />, redirectTo: "/" },
                      { text: "Resume", icon: <DescriptionIcon />, redirectTo: "/Resume" },
                      { text: "Projects", icon: <BuildIcon />, redirectTo: "/Projects" },
                  ].map(({ text, icon, redirectTo}) => (
                      <ListItem
                          button
                          key = {text}
                          onClick = {() => {
                              props.history.push(redirectTo);
                          }}
                      >
                          <ListItemIcon>{icon}</ListItemIcon>
                          <ListItemText primary = {text} />
                      </ListItem>
                  ))}
              </List>
              <Divider />
          </Drawer>
          {props.children}
        </div>
    );
};

export default withRouter(CustomAppBar);
