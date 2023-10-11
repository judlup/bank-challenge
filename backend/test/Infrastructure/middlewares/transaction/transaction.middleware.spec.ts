import { TransactionMiddleware } from '../../../../src/Infrastructure/middlewares/transaction/transaction.middleware';

describe('TransactionMiddleware', () => {
  it('should be defined', () => {
    expect(new TransactionMiddleware()).toBeDefined();
  });
});
