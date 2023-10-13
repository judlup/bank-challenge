import { useRouter } from "next/router"
import { ChangeEvent, useState } from "react"
import { TransactionService } from "../../services/transaction/transaction.service"
import useAuthStore from "../../stores/auth/auth.store"
import DepositView from "./deposit.view"

const DepositContainer = () => {
  const router = useRouter()
  const { user, balance, getBalaceByAccountNumber } = useAuthStore()
  const [amount, setAmount] = useState(0)

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setAmount(Number(e.target.value))
  }

  const transactionService = new TransactionService()

  const handleDeposit = async (): Promise<void> => {
    if (!user) {
      alert("User not found")
    }
    if (!balance) {
      alert("Balance not found")
    }
    if (amount <= 0) {
      alert("Amount must be greater than 0")
    }

    const transactionResponse = await transactionService.deposit(
      user?.phone!,
      user?.id!,
      amount
    )
    if (transactionResponse) {
      alert("Deposit successfully")
      getBalaceByAccountNumber(Number(user?.phone))
      setAmount(0)
      router.push("/")
    } else {
      alert("Deposit failed")
    }
  }

  return (
    <>
      <DepositView
        user={user}
        balance={balance}
        amount={amount}
        handleAmountChange={handleAmountChange}
        handleDeposit={handleDeposit}
      />
    </>
  )
}

export default DepositContainer
