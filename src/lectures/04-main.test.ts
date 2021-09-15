import { isPositive } from './04-main'

describe('isPositive()', () => {
    it('Should return true when n > 0', () => {
        expect(isPositive(1)).toBe(true);
        expect(isPositive(5)).toBe(true);
        expect(isPositive(6)).toBe(true);
    });
    it('Should return false when n < 0', () => {
        expect(isPositive(-1)).toBe(false);
    });
    it('Should return false when n = 0', () => {
        expect(isPositive(0)).toBe(false);
    });
})
