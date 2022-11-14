import { PlanningType } from "./planningTypes";

// ========================================================================================================

export const pageFilter = (payload: string) => {
	return {
		type: PlanningType.PAGE_FILTER,
		payload,
	};
};

// ========================================================================================================

export const sortByFilter = (payload: string) => {
	return {
		type: PlanningType.SORT_BY_FILTER,
		payload,
	};
};
