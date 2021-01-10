import { 
	FETCH_DASHBOARD_METRICS_BEGIN,
	FETCH_DASHBOARD_METRICS_SUCCESS,
	FETCH_ALLPROJECTS_BEGIN,
	FETCH_ALLPROJECTS_SUCCESS 
} from '../Actions/Action';

const initState = {
	dashboardMetrics: [],
	allProjects: []
};

function rootReducer (state = initState, action) {

	switch (action.type) {
		case FETCH_DASHBOARD_METRICS_BEGIN:
			return {
				...state
			};
		case FETCH_ALLPROJECTS_BEGIN:
			return {
				...state
			};
		case FETCH_DASHBOARD_METRICS_SUCCESS:
			return {
				...state,
				dashboardMetrics: action.payload.dashboardData
			};
		case FETCH_ALLPROJECTS_SUCCESS:
			return {
				...state,
				allProjects: action.payload.projectData
			};
		default:
			return state;
	}
	
}

export default rootReducer;
