import React, { useState, useEffect } from 'react';
import ProjectTile from './ProjectTile';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import ViewListIcon from '@material-ui/icons/ViewList';
import AppsIcon from '@material-ui/icons/Apps';
import BorderAllIcon from '@material-ui/icons/BorderAll';
import { connect } from 'react-redux';
import { fetchAllProjects } from '../../Actions/Action';

const useStyles = makeStyles((theme) => ({
  root: {
		flexGrow: 1,
		'& header': {
			backgroundColor: '#ccc',
			color: 'black',
			'& .MuiToolbar-regular': {
				[theme.breakpoints.up('sm')]: {
					minHeight: 50,
				}
			}
		}
  },
  menuButton: {
		borderRadius: 0,
		marginRight: 5,
		'& .MuiIconButton-label': {
			'& .MuiSvgIcon-root': {
				color: '#424242'
			}
    },
    '&.active': {
      backgroundColor: '#424242',
      '& .MuiIconButton-label .MuiSvgIcon-root': {
        color: '#fff'
      }
    }
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
		width: '100%',
		marginRight: 30,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
		justifyContent: 'center',
		color: '#888',
		zIndex: 1
  },
  inputRoot: {
		color: 'inherit',
		backgroundColor: '#fff',
		borderRadius: '5px',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
	},
	projects: (props) => ({
		padding: '1rem',
		border: '1px solid #ccc',
		borderRadius: 5,
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
    ...props.projects,
    maxHeight: '60vh',
    overflow: 'auto'
	})
}));

const constructStyleProps = (viewType) => {
  let props = {};
  switch (viewType) {
    case 'listView':
      props = {
        projects: {
          '& .MuiCard-root': {
            flexDirection: 'row',
            '& .MuiCardContent-root': {
              '& .compDescription': {
                justifyContent: 'space-around',
                flexWrap: 'inherit',
              },
              '& .compStatus': {
                flexDirection: 'row'
              }
            }
          }
        }
      }
      break;
    case 'menuView': 
      props = {
        projects: {
          display: 'flex',
          gap: '2%',
          flexWrap: 'wrap',
          '& .MuiCard-root': {
            flexBasis: '49%',
            flexDirection: 'row',
            '& .MuiCardContent-root': {
              '& .compDescription': {
                justifyContent: 'end',
                flexWrap: 'wrap',
                paddingBottom: 0,
                '& .compLabel': {
                  maxWidth: '30%',
                  flexBasis: '30%',
                  marginBottom: '0.75rem'
                }
              },
              '& .compStatus': {
                flexDirection: 'row'
              }
            }
          }
        }
      }
      break;
    case 'gridView':
      props = {
        projects: {
          display: 'flex',
          gap: '2%',
          flexWrap: 'wrap',
          '& .MuiCard-root': {
            flexBasis: '32%',
            flexDirection: 'column',
            '& .MuiCardContent-root': {
              '& .compDescription': {
                justifyContent: 'end',
                flexWrap: 'wrap',
                paddingBottom: 0,
                marginLeft: '1rem',
                '& .compLabel': {
                  maxWidth: '30%',
                  flexBasis: '30%',
                  marginBottom: '0.75rem'
                }
              },
              '& .compStatus': {
                flexDirection: 'column'
              }
            }
          }
        }
      }
  }
  return props;
};

function ProjectContainer(props) {
  let initialProjectDetails = props.allProjects;
  let projectDetails = [ ...initialProjectDetails ];
  let [ selectedViewType, setSeletedViewType ] = useState('listView');
  let styleProps = constructStyleProps(selectedViewType);
  let classes = useStyles(styleProps);

  useEffect(() => {
    props.dispatch(fetchAllProjects());
  }, []);

  let onChangeOfViewType = (viewType) => {
    setSeletedViewType(viewType);
  };

  let onChangeOfSearch = (e) => {
    let searchTerm = e.target.value.toLowerCase();
    if (!searchTerm) {
      projectDetails = [ ...initialProjectDetails ]
    } else {
      projectDetails = initialProjectDetails.filter((project, index) => {
        let concatenatedString = project.projectDescription.reduce((fullStr, desc, index) => fullStr += desc.value, '');
        return concatenatedString.toLowerCase().includes(searchTerm);
      });
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            My Inbox (Artwork Approval Process)
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Filter items..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={onChangeOfSearch}
            />
          </div>
					
          <IconButton
            edge="start"
            className={`${classes.menuButton} ${selectedViewType === 'listView' ? 'active': ''}`}
            color="inherit"
            onClick={() => { onChangeOfViewType('listView') }}
          >
            <ViewListIcon/>
          </IconButton>
          <IconButton
            edge="start"
            className={`${classes.menuButton} ${selectedViewType === 'menuView' ? 'active': ''}`}
            color="inherit"
            onClick={() => { onChangeOfViewType('menuView') }}
          >
						<BorderAllIcon />
          </IconButton>
          <IconButton
            edge="start"
            className={`${classes.menuButton} ${selectedViewType === 'gridView' ? 'active': ''}`}
            color="inherit"
            onClick={() => { onChangeOfViewType('gridView') }}
          >
						<AppsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
			<div className={classes.projects}>
				{
          projectDetails.map((projectDetail, index) => {
            return <ProjectTile projectData={projectDetail} key={index} showReorderIcon={selectedViewType === 'listView' ? true : false}/>
          })
        }
			</div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  allProjects: state.allProjects
});

export default connect(mapStateToProps)(ProjectContainer)
