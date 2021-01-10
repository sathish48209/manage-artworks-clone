import axios from 'axios';

export const FETCH_DASHBOARD_METRICS_BEGIN = 'FETCH_DASHBOARD_METRICS_BEGIN';
export const FETCH_DASHBOARD_METRICS_SUCCESS = 'FETCH_DASHBOARD_METRICS_SUCCESS';
export const FETCH_ALLPROJECTS_BEGIN = 'FETCH_ALLPROJECTS_BEGIN';
export const FETCH_ALLPROJECTS_SUCCESS = 'FETCH_ALLPROJECTS_SUCCESS';

const fetchAllProjectsBegin = () => ({
	type: FETCH_ALLPROJECTS_BEGIN
});

const fetchDashboardMetricsBegin = () => ({
	type: FETCH_DASHBOARD_METRICS_BEGIN
});

export const fetchDashboardMetricsSuccess = (dashboardData) => ({
	type: FETCH_DASHBOARD_METRICS_SUCCESS,
	payload: { dashboardData }
});

export const fetchAllProjectsSuccess = (projectData) => ({
	type: FETCH_ALLPROJECTS_SUCCESS,
	payload: { projectData }
});

export function fetchDashboardMetrics () {
  return (dispatch) => {
    dispatch(fetchDashboardMetricsBegin());
    return axios.get('data/dashboardMetricsData.json')
      .then(({ data }) => {
        dispatch(fetchDashboardMetricsSuccess(data.dashboardMetrics));
        return data.dashboardMetrics;
      });
  };
}

export function fetchAllProjects () {
  return (dispatch) => {
    dispatch(fetchAllProjectsBegin());
    return axios.get('data/allProjectsData.json')
      .then(({ data }) => {
        dispatch(fetchAllProjectsSuccess(data.allProjects));
        return data.allProjects;
      });
  };
}

