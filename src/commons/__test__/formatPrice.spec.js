import formatPrice from './../formatPrice';

describe("format price", () => {
    it("should return format number", () => {
        const num = '1000';
        expect(formatPrice(num)).toEqual('1.000');
    });
    it("should return zero", () => {
      const num = "";
      expect(formatPrice(num)).toEqual(0);
    });
    it("should return self", () => {
      const num = 'a';
      expect(formatPrice(num)).toEqual('a');
    });
});
