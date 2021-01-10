import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
		flexGrow: 1,
		'& .MuiCardContent-root:last-child': {
			'paddingBottom': 0
		}
	},
	cardHeader: {
		backgroundColor: '#ccc',
		padding: '10px',
		'& span': {
			fontWeight: 700,
			fontSize: '1.25rem'
		}
	},
	cardContent: {
		padding: 0,
		'& ul': {
			maxWidth: 'inherit'
		},
		'& .dashBoardListItem': {
			alignItems: 'center',
			'& .MuiListItemText-root span': {
				fontSize: '0.9rem',
				fontWeight: 500
			}
		},
		'& .dashBoardListItem:not(:last-child)': {
			borderBottom: '1px solid #ccc',
		}
	},
	listItems: {
    backgroundColor: theme.palette.background.paper,
	},
	inline: {
    display: 'inline',
	},
	cardStatsContainer: {
		display: 'flex',
		alignItems: 'center',
		'& .cardStatBtn': {
			backgroundColor: '#00ACC1',
			padding: 0,
			borderRadius: 10,
			'& .MuiButton-label': {
				fontSize: '1.6rem'
			}
		},
		'& .cardStats': {
			marginLeft: 10,
			'& .cardStat': {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				minWidth: 100,
				'& > p' : {
					margin: 0,
					fontWeight: 700
				},
				'& span': {
					fontWeight: 700
				},
				'& .delayed': {
					color: 'red'
				},
				'& .onTime': {
					color: 'green'
				}
			},
			'& .cardStat:first-child': {
				marginBottom: 5
			}
		}
	}
}));

function DashboardTile({ dashboardData }) {
	const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
				className={classes.cardHeader}
        title={ dashboardData.title }
      />
      <CardContent
				className={classes.cardContent}
			>
			<List className={classes.listItems}>
				{
					dashboardData.processes.map((process, index) => {
						return (
							<ListItem alignItems="flex-start" className="dashBoardListItem" key={ index }>
								<ListItemText
									primary={ process.name }
								/>
								<div className={classes.cardStatsContainer}>
									<Button className="cardStatBtn" variant="contained" color="primary">
										{ process.totalProjects }
									</Button>
									<div className='cardStats'>
										<div className='cardStat'>
											<p>OnTime</p>
											<span className="onTime">{ process.onTimeProjects }</span>
										</div>
										<div className='cardStat'>
											<p>Delayed</p>
											<span className="delayed">{ process.delayedProjects }</span>
										</div>
									</div>
								</div>
							</ListItem>
						)
					})
				}
			</List>
      </CardContent>
    </Card>
  );
}

export default DashboardTile
