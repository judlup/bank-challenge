import { FC } from "react"
import { UserInterface } from "../../models/user/user.interface"
import { currencyFormatter } from "../../utils/currency/currentu.util"

interface Props {
  user?: UserInterface | null
  balance: number | null
  navigateTo: (path: string) => void
}

const DashboardView: FC<Props> = ({ user, balance, navigateTo }) => {
  return (
    <div className="bg-gray-50 p-6 mt-4 rounded-md h-[85vh] flex flex-col">
      <div className="mb-4 flex justify-between items-center">
        <div>
          <span className="text-blue-900 font-semibold text-lg">
            Hola {user?.name}
          </span>
          <span className="text-gray-400 text-sm ml-2">({user?.phone})</span>
        </div>
        <span className="text-gray-500 font-semibold text-lg rounded-md bg-slate-200 py-1 px-2">
          {currencyFormatter(Number(balance))}
        </span>
      </div>

      <hr className="mb-4" />

      <div className="grid grid-cols-3 gap-4 flex-grow">
        {[
          { label: "My Account", path: "/myaccount" },
          { label: "Deposit", path: "/deposit" },
          { label: "Withdrawal", path: "/withdrawal" },
          { label: "Transfer", path: "/transfer" },
          { label: "Movements", path: "/movements" },
          { label: "Settings", path: null },
        ].map((item) => (
          <div
            key={item.label}
            className={`p-4 rounded-md text-center flex justify-center items-center ${
              item.path
                ? "bg-gray-200 cursor-pointer hover:bg-blue-900 hover:text-white transition ease-in-out duration-200"
                : "bg-gray-200 text-gray-400 cursor-no-drop"
            }`}
            onClick={() => item.path && navigateTo(item.path)}
          >
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DashboardView
