import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import HomeIcon from '@material-ui/icons/Home';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ListSubheader from '@material-ui/core/ListSubheader';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import FolderIcon from '@material-ui/icons/Folder';
import SearchIcon from '@material-ui/icons/Search';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  cardImage: {
    height: 40,
    width: 150
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);

function Navbar() {
	const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  /* const handleDrawerOpen = () => {
    setOpen(true);
  }; */

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          { open ? 
            <NavLink to="/">
              <CardMedia
                className={classes.cardImage}
                image="assets/company-logo.png"
                title="Manage Artworks"
              /> 
            </NavLink>
            : 
            null
          }
          
          <IconButton onClick={handleDrawerToggle}>
            <MenuOpenIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <NavLink to="/">
            {
              open ? 
              <ListItem button>
                <ListItemIcon><HomeIcon /></ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem> : 
              <LightTooltip title="Dashboard" placement="top">
                <ListItem button>
                  <ListItemIcon><HomeIcon /></ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItem>
              </LightTooltip>
            }
          </NavLink>
          <NavLink to="/newProject">
            {
              open ? 
              <ListItem button>
                <ListItemIcon><CheckCircleIcon /></ListItemIcon>
                <ListItemText primary="Start a new Project" />
              </ListItem> : 
              <LightTooltip title="Start a new Project" placement="top">
                <ListItem button>
                  <ListItemIcon><CheckCircleIcon /></ListItemIcon>
                  <ListItemText primary="Start a new Project" />
                </ListItem>
              </LightTooltip>
            }
          </NavLink>
        </List>
        <Divider />
        <List>
          <ListSubheader>
            {open ? 'Workflow' : <LightTooltip title="Workflow" placement="top">
              <strong>W</strong>
            </LightTooltip>}
          </ListSubheader>
          <NavLink to="/inbox">
            {
              open ? 
              <ListItem button>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItem> : 
              <LightTooltip title="Inbox" placement="top">
                <ListItem button>
                  <ListItemIcon><InboxIcon /></ListItemIcon>
                  <ListItemText primary="Inbox" />
                </ListItem>
              </LightTooltip>
            }
          </NavLink>
          <NavLink to="/myProjects">
            {
              open ? 
              <ListItem button>
                <ListItemIcon><FolderSpecialIcon /></ListItemIcon>
                <ListItemText primary="My Projects" />
              </ListItem> : 
              <LightTooltip title="My Projects" placement="top">
                <ListItem button>
                <ListItemIcon><FolderSpecialIcon /></ListItemIcon>
                <ListItemText primary="My Projects" />
              </ListItem>
              </LightTooltip>
            }
          </NavLink>
          <NavLink to="/allProjects">
            {
              open ? 
              <ListItem button>
                <ListItemIcon><FolderIcon /></ListItemIcon>
                <ListItemText primary="All Projects" />
              </ListItem> : 
              <LightTooltip title="All Projects" placement="top">
                <ListItem button>
                  <ListItemIcon><FolderIcon /></ListItemIcon>
                  <ListItemText primary="All Projects" />
                </ListItem>
              </LightTooltip>
            }
          </NavLink>
        </List>
        <Divider />
        <List>
          <ListSubheader>
            {open ? 'Asset Library' : <LightTooltip title="Asset Library" placement="top">
              <strong>AL</strong>
            </LightTooltip>}
          </ListSubheader>
          <NavLink to="/search">
            {
              open ? 
              <ListItem button>
                <ListItemIcon><LocationSearchingIcon /></ListItemIcon>
                <ListItemText primary="Search" />
              </ListItem> : 
              <LightTooltip title="Search" placement="top">
                <ListItem button>
                  <ListItemIcon><LocationSearchingIcon /></ListItemIcon>
                  <ListItemText primary="Search" />
                </ListItem>
              </LightTooltip>
            }
          </NavLink>
          <NavLink to="/browse">
            {
              open ? 
              <ListItem button>
                <ListItemIcon><SearchIcon /></ListItemIcon>
                <ListItemText primary="Browse" />
              </ListItem> : 
              <LightTooltip title="Browse" placement="top">
                <ListItem button>
                  <ListItemIcon><SearchIcon /></ListItemIcon>
                  <ListItemText primary="Browse" />
                </ListItem>
              </LightTooltip>
            }
          </NavLink>
        </List>
      <Divider />
      <List>
        <ListSubheader>
          {open ? 'Reports' : <LightTooltip title="Reports" placement="top">
              <strong>R</strong>
            </LightTooltip>}
        </ListSubheader>
      </List>
      <Divider />
      </Drawer>

      {/* TODO: Add necessary components here */}
    </div>
  );
}

export default Navbar
