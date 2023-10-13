const DashboardView = () => {
  return (
    <div className="bg-gray-50 p-4 mt-4 rounded-md">
      <div className="mb-2">
        <span className="text-blue-900 font-semibold text-lg">
          Hola Usuario
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
