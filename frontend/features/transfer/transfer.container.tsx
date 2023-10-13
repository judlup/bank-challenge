import { useRouter } from "next/router"
import { ChangeEvent, useState } from "react"
import { TransactionService } from "../../services/transaction/transaction.service"
import useAuthStore from "../../stores/auth/auth.store"
import DepositView from "./transfer.view"

const TransferContainer = () => {
  const router = useRouter()
  const { user, balance, getBalaceByAccountNumber } = useAuthStore()
  const [amount, setAmount] = useState(0)
  const [description, setDescription] = useState<string>("")
  const [destinationAccountNumber, setDestinationAccountNumber] =
    useState<number>(0)

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault()
    setAmount(Number(e.target.value))
  }

  const transactionService = new TransactionService()

  const handleTransfer = async (): Promise<void> => {
    if (!user) {
      alert("User not found")
    }
    if (!balance) {
      alert("Balance not found")
    }
    if (!description) {
      alert("Description is required")
    }
    if (!destinationAccountNumber) {
      alert("Destination account number is required")
    }

    if (amount <= 0) {
      alert("Amount must be greater than 0")
    }

    if (destinationAccountNumber === Number(user?.phone)) {
      alert("Destination account number must be different from yours")
    }

    if ((balance ? balance : 0) < amount) {
      alert("Amount must be less than balance")
      return
    }

    const transactionResponse = await transactionService.transfer(
      user?.phone!,
      String(destinationAccountNumber),
      user?.id!,
      amount,
      description
    )
    if (transactionResponse) {
      alert("Transfer successfully")
      getBalaceByAccountNumber(Number(user?.phone))
      setAmount(0)
      router.push("/")
    } else {
      alert("Transfer failed")
    }
  }

  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault()
    setDescription(e.target.value)
  }

  const handleDestinationAccountNumberChange = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    e.preventDefault()
    setDestinationAccountNumber(Number(e.target.value))
  }

  return (
    <>
      <DepositView
        user={user}
        balance={balance}
        amount={amount}
        description={description}
        destinationAccountNumber={destinationAccountNumber}
        handleAmountChange={handleAmountChange}
        handleDescriptionChange={handleDescriptionChange}
        handleDestinationAccountNumberChange={
          handleDestinationAccountNumberChange
        }
        handleTransfer={handleTransfer}
      />
    </>
  )
}

export default TransferContainer
