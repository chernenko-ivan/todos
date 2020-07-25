// generateId
export const generateId = (type: string) => (): string =>
	`${type}_${Date.now()}${Math.floor(Math.random() * 100)}`;
