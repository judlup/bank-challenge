export class TransactionModel {
  id: string;
  destinationAccount?: string;
  originAccount?: string;
  userId: string;
  type: string;
  amount: number;
  description?: string;
  status: string;
  created_at: Date;
  updated_at: Date;
}
