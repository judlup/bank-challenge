import { AuthGuard } from '../../../src/Infrastructure/guards/auth/auth.guard';

describe('AuthGuard', () => {
  it('should be defined', () => {
    expect(new AuthGuard()).toBeDefined();
  });
});
