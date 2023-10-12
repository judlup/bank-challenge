export class TransactionDto {
  readonly destinationAccount: string;
  readonly originAccount: string;
  readonly userId: string;
  readonly type?: string;
  readonly amount: number;
  readonly description: string;
}
