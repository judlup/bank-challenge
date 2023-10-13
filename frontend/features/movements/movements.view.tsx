import { Button } from "flowbite-react"
import { FC } from "react"
import { currencyFormatter } from "../../utils/currency/currentu.util"

interface Props {
  movements: any[]
  total: number
  page: number
  limit: number
  totalPages: number
  hasNextPage: boolean
  hasPreviousPage: boolean
  handlePrevious: () => void
  handleNext: () => void
}

const MovementsView: FC<Props> = ({
  movements,
  total,
  page,
  limit,
  totalPages,
  hasNextPage,
  hasPreviousPage,
  handlePrevious,
  handleNext,
}) => {
  return (
    <>
      <div className="bg-gray-50 min-h-screen flex items-start justify-center">
        <div className="bg-white p-8 shadow-md rounded-md w-full max-w-7xl mt-8">
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">
            Movements
          </h1>
          <hr className="mb-4" />

          <div className="mb-4 flex justify-between items-center">
            <div>
              <span className="font-semibold">Page:</span> {page}/{totalPages} (
              {total} records) limit: {limit}
            </div>
            <div>
              {hasPreviousPage && (
                <Button onClick={handlePrevious} className="mr-2">
                  Previous
                </Button>
              )}
              {hasNextPage && <Button onClick={handleNext}>Next</Button>}
            </div>
          </div>

          <div className="mb-4 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ref
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    From
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    To
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {movements &&
                  movements.map((movement, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-100 transition ease-in-out duration-150"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        {movement.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {movement.type}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        {currencyFormatter(movement.amount)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {movement.originAccount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {movement.destinationAccount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {`${new Date(movement.created_at).getDate()}/${
                          new Date(movement.created_at).getMonth() + 1
                        }/${new Date(movement.created_at).getFullYear()}`}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovementsView
