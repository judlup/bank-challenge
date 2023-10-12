import { TransactionMiddleware } from '../../../../src/Infrastructure/middlewares/transaction/largeDeposit.middleware';

describe('TransactionMiddleware', () => {
  it('should be defined', () => {
    expect(new TransactionMiddleware()).toBeDefined();
  });
});
