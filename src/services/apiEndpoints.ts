class Endpoints {
	public get = {
		sessionData: "/sessions"
	}

	public post = {
		createDriver: "/drivers",
		createUser: "/users"
	}

	public delete = {
		driverById: (driverId: string) => `/drivers/${driverId}`
	}
}

export const ApiEndpoints = new Endpoints();