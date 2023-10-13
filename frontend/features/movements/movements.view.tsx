const MovementsView = () => {
  return (
    <>
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 shadow-md rounded-md w-full max-w-4xl">
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">
            Movements
          </h1>
          <hr className="mb-6" />

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
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
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
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Ref</td>
                  <td className="px-6 py-4 whitespace-nowrap">Deposit</td>
                  <td className="px-6 py-4 whitespace-nowrap">10000</td>
                  <td className="px-6 py-4 whitespace-nowrap">573164907627</td>
                  <td className="px-6 py-4 whitespace-nowrap">573164907627</td>
                  <td className="px-6 py-4 whitespace-nowrap">2021-08-10</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Ref</td>
                  <td className="px-6 py-4 whitespace-nowrap">Deposit</td>
                  <td className="px-6 py-4 whitespace-nowrap">10000</td>
                  <td className="px-6 py-4 whitespace-nowrap">573164907627</td>
                  <td className="px-6 py-4 whitespace-nowrap">573164907627</td>
                  <td className="px-6 py-4 whitespace-nowrap">2021-08-10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovementsView
