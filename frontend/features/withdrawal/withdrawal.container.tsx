import { useRouter } from "next/router"
import { ChangeEvent, useState } from "react"
import { TransactionService } from "../../services/transaction/transaction.service"
import useAuthStore from "../../stores/auth/auth.store"
import WithdrawalView from "./withdrawal.view"

const WithdrawalContainer = () => {
  const router = useRouter()
  const { user, balance, getBalaceByAccountNumber } = useAuthStore()
  const [amount, setAmount] = useState(0)

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setAmount(Number(e.target.value))
  }

  const transactionService = new TransactionService()

  const handleWithdrawal = async (): Promise<void> => {
    if (!user) {
      alert("User not found")
      return
    }
    if (!balance) {
      alert("Balance not found")
      return
    }
    if (amount <= 0) {
      alert("Amount must be greater than 0")
      return
    }
    if (balance < amount) {
      alert("Amount must be less than balance")
      return
    }

    const transactionResponse = await transactionService.withdrawal(
      user?.phone!,
      user?.id!,
      amount
    )
    if (transactionResponse) {
      alert("Withdraw successfully")
      getBalaceByAccountNumber(Number(user?.phone))
      setAmount(0)
      router.push("/")
    } else {
      alert("Withdraw failed")
    }
  }
  return (
    <>
      <WithdrawalView
        user={user}
        balance={balance}
        amount={amount}
        handleAmountChange={handleAmountChange}
        handleWithdrawal={handleWithdrawal}
      />
    </>
  )
}

export default WithdrawalContainer
