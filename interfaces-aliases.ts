// Interfaces & Aliases

// type aliases
type VehicleYear = number;
type VehicleMaker = string;
type VehicleModel = string;
type Vehicle = {
	year: VehicleYear;
	maker: VehicleMaker;
	model: VehicleModel;
};

const vehicleYear: VehicleYear = 2008;
const vehicleMaker: VehicleMaker = 'Honda';
const vehicleModel: VehicleModel = 'Civic';
const vehicle: Vehicle = {
	year: vehicleYear,
	maker: vehicleMaker,
	model: vehicleModel,
};

// interfaces
interface Rectangle {
	height: number;
	width: number;
}

const rectangle: Rectangle = {
	height: 22,
	width: 11,
};

// extending interfaces
interface Rectangle {
	height: number;
	width: number;
}

interface ColorRectangle extends Rectangle {
	color: string;
}

const colorRectangle: ColorRectangle = {
	height: 22,
	width: 11,
	color: 'green',
};
