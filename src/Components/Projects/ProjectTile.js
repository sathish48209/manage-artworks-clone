import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ReorderIcon from '@material-ui/icons/Reorder';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles({
  root: {
		display: 'flex',
		justifyContent: 'space-between',
		minHeight: 150,
		marginBottom: '1rem',
		boxShadow: '0 0 3px rgba(0, 0, 0, 0.3)',
	},
	componentMedia: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'center',
		padding: '1rem',
		'& .description': {
			fontWeight: 700
		}
	},
  media: {
		height: 70,
		width: 50
	},
	reOrderIcons: {
		alignItems: 'flex-start',
		'& .MuiIconButton-label': {
			'& .MuiSvgIcon-root': {
				color: '#424242'
			}
		}
	},
	compData: {
		flexGrow: 1,
		alignSelf: 'center',
		// TODO: Change it to 4 once layout is figured out
		// marginRight: '1rem',
		'& .compDescription': {
			display: 'flex',

			//TODO: remove flex wrap and PB after layout changes
			// padding: '0 1rem 1rem 1rem',
			paddingBottom: '1rem',
			borderBottom: '1px solid #ccc',
			justifyContent: 'end',
			gap: '2%',
			'& .compLabel': {
				flexBasis: '30%',
				marginBottom: '0.75rem',
				// remove this as well
				maxWidth: '30%',
				'& .compValue': {
					wordBreak: 'breakAll'
				}
			},
			'& .compHeader': {
				fontWeight: 600,
				// marginBottom: '0.5rem'
				marginBottom: 0,
				textOverflow:'ellipsis',
				overflow:'hidden',
				whiteSpace:'nowrap'
			}
		},
		'& .compStatus': {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'flex-end',
			padding: '0.5rem',
			alignItems: 'center',
			gap: '1rem',
			'& .statusChip': {
				backgroundColor: '#ef5350',
				color: '#fff',
				fontWeight: 700,
				fontSize: '1rem'
			},
			'& .dueDaysSection': {
				color: '#ef5350',
				fontWeight: 700
			}
		}
	}
});

function ProjectTile({ projectData, showReorderIcon }) {
	const classes = useStyles();
	const noWrap = true;

  return (
    <Card className={classes.root}>
			<div className={classes.componentMedia}>
				<CardMedia
					className={classes.media}
					image={projectData.imageUrl}
				/>
				<Typography className="description" gutterBottom component="p">
					Component
				</Typography>
			</div>
			<CardContent className={classes.compData}>
				<div className="compDescription">
					{projectData.projectDescription.map((description, index) => {
						return (
							<div className="compLabel" key={index}>
								<Tooltip title={description.title} placement="top-start">
									<Typography gutterBottom component="p" className="compHeader" noWrap={noWrap}>
										{description.title}
									</Typography>
								</Tooltip>
								<Typography component="p" className="compValue">
									{description.value}
								</Typography>
							</div>
						)
					})}
					<Divider />
				</div>
				<div className="compStatus">
					<Chip label={ projectData.status } className="statusChip"/>
					<Typography component="p" className="dueDaysSection">
						Task due { projectData.dueDays}+ day(s) ago		
					</Typography>
				</div>
			</CardContent>
			{
				showReorderIcon ?
					<CardActions className={classes.reOrderIcons}>
						<IconButton
							edge="start"
						>
							<ReorderIcon />
						</IconButton>
					</CardActions> :
					null
			}
    </Card>
  );
}

export default ProjectTile
