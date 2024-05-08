import { isItWednesday } from '$lib/helper';
import { describe, it, expect } from 'vitest';

describe('wednesday test', () => {
	it('sees if the given timestamp is on a wednesday', () => {
		expect(isItWednesday(1714628724000)).toBe(true);
	});
});

describe('not wednesday test', () => {
	it('sees if the given timestamp is not on a wednesday', () => {
		expect(isItWednesday(1714715124000)).toBe(false);
	});
});
