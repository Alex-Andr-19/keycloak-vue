export type ToPrimitive<T> = T extends string
	? string
	: T extends number
	? number
	: T extends boolean
	? boolean
	: T extends bigint
	? bigint
	: T extends symbol
	? symbol
	: T extends null
	? null
	: T extends undefined
	? undefined
	: T;
