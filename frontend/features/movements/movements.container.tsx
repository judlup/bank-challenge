import { useEffect } from "react"
import { TransactionService } from "../../services/transaction/transaction.service"
import useAuthStore from "../../stores/auth/auth.store"
import MovementsView from "./movements.view"

const MovementsContainer = () => {
  const {
    user,
    movements,
    movementTotal,
    movementCurrentPage,
    movementLimitPerPage,
    movementTotalPages,
    movementHasNextPage,
    movementHasPrevPage,
    setMovements,
    setMovementCurrentPage,
    setMovementTotalPages,
    setMovementTotal,
    setMovementHasNextPage,
    setMovementHasPrevPage,
  } = useAuthStore()

  const transactionService = new TransactionService()

  const getMovements = async () => {
    const movementsResponse = await transactionService.movements(
      user?.phone!,
      movementCurrentPage,
      movementLimitPerPage
    )
    if (movementsResponse) {
      setMovementTotalPages(movementsResponse.totalPages)
      setMovementHasNextPage(movementsResponse.hasNextPage)
      setMovementHasPrevPage(movementsResponse.hasPrevPage)
      setMovementCurrentPage(movementsResponse.page)
      setMovementTotal(movementsResponse.total)
      setMovements(movementsResponse.results)
    } else {
      alert("Movements not found")
    }
  }

  useEffect(() => {
    getMovements()
  }, [])

  const handlePrevious = () => {
    console.log("Previous")
  }

  const handleNext = () => {
    console.log("Next")
  }

  return (
    <>
      <MovementsView
        movements={movements}
        total={movementTotal}
        page={movementCurrentPage}
        limit={movementLimitPerPage}
        totalPages={movementTotalPages}
        hasNextPage={movementHasNextPage}
        hasPreviousPage={movementHasPrevPage}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />
    </>
  )
}

export default MovementsContainer
