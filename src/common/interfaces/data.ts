export type Position = "admin" | "manager" | "user";

export interface MockDataTeamInterface {
	id: number;
	name: string;
	email: string;
	age: number;
	phone: string;
	access: Position;
}

export interface MockDataContacts
	extends Omit<MockDataTeamInterface, "access"> {
	city: string;
	zipCode: string;
	address: string;
	registrarId: number;
}

export interface MockDataInvoices
	extends Omit<MockDataTeamInterface, "age" | "access"> {
	cost: string;
	date: string;
}

export interface MockTransactions {
	txId: string;
	user: string;
	date: string;
	cost: string;
}

export interface MockBarData {
	country: string;
	"hot dog": number;
	"hot dogColor": string;
	burger: number;
	burgerColor: string;
	kebab: number;
	kebabColor: string;
	donut: number;
	donutColor: string;
}

export interface MockPieData {
	id: string;
	label: string;
	value: number;
	color: string;
}

export interface Coordinates {
	x: string;
	y: number;
}

export interface MockLineData {
	id: string;
	data: Coordinates[];
}

export interface MockGeographyData {
	id: string;
	value: number;
}
