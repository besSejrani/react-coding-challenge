import { PlanningType } from "./planningTypes";

// ========================================================================================================

interface UiState {
	pageFilter: string;
	sortByFilter: string;
}

interface Action {
	type: string;
	payload?: any;
}

const initialState = {
	pageFilter: "25",
	sortByFilter: "No Sorting",
};

// ========================================================================================================

export default (state: UiState = initialState, action: Action): UiState => {
	const { type, payload } = action;

	switch (type) {
		case PlanningType.PAGE_FILTER:
			return { ...state, pageFilter: payload };

		case PlanningType.SORT_BY_FILTER:
			return { ...state, sortByFilter: payload };

		default:
			return state;
	}
};
