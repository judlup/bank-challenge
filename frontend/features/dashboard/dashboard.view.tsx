import { FC } from "react"
import { UserInterface } from "../../models/user/user.interface"
import { currencyFormatter } from "../../utils/currency/currentu.util"

interface Props {
  user?: UserInterface | null
  balance: number | null
}

const DashboardView: FC<Props> = ({ user, balance }) => {
  return (
    <div className="bg-gray-50 p-4 mt-4 rounded-md">
      <div className="mb-2">
        <span className="text-blue-900 font-semibold text-lg">
          Hola {user?.name}
        </span>
        <span className="text-gray-400 text-sm"> ({user?.phone})</span>
        <hr className="mb-2" />
        <span className="text-gray-500 font-semibold text-lg rounded-md bg-slate-200 py-1 px-2">
          {currencyFormatter(Number(balance))}
        </span>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-gray-200 rounded-md text-center">Mi Cuenta</div>
        <div className="p-4 bg-gray-200 rounded-md text-center">Depositar</div>
        <div className="p-4 bg-gray-200 rounded-md text-center">Retirar</div>
        <div className="p-4 bg-gray-200 rounded-md text-center">
          Movimientos
        </div>
        <div className="p-4 bg-gray-200 rounded-md text-center text-gray-400">
          Reportes
        </div>
        <div className="p-4 bg-gray-200 rounded-md text-center text-gray-400">
          Configuración
        </div>
      </div>
    </div>
  )
}

export default DashboardView
