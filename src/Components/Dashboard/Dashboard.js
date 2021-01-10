import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import DashboardTile from './DashboardTile' ;
import { makeStyles } from '@material-ui/core/styles';
import ProjectContainer from '../Projects/ProjectContainer';
import { fetchDashboardMetrics } from "../../Actions/Action";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		gap: 20,
		marginBottom: '2rem'
	}
}))

function Dashboard(props) {
	const { dashboardMetrics } = props;
	const classes = useStyles();

	useEffect(() => {
    props.dispatch(fetchDashboardMetrics());
  }, []);

	console.log(props);

	return (
		<div>
			<h2>Dashboard</h2>
			<div className={classes.root}>
				{
					dashboardMetrics.map((value, index) => {
						return <DashboardTile dashboardData={value} key={index} />
					})
				}
			</div>
			<ProjectContainer />
		</div>
	)
}

const mapStateToProps = (state) => ({
  dashboardMetrics: state.dashboardMetrics
});

export default connect(mapStateToProps)(Dashboard);
