export declare type Skills = {
	name: string;
	category: string;
	_id: string;
};

export declare type DataResult = {
	bookingGrade: string;
	clientId: string;
	clientName: string;
	createdAt: string;
	endDate: string;
	industry: string;
	isUnassigned: boolean;
	jobManagerId: string;
	jobManagerName: string;
	officeCity: string;
	officePostalCode: string;
	operatingUnit: string;
	optionalSkills: Skills[];
	originalId: string;
	requiredSkills: Skills[];
	startDate: string;
	talentGrade: string;
	talentId: string;
	talentName: string;
	totalHours: number;
	updatedAt: string;
	__v: number;
	_id: string;
};
