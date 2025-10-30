export default function Conférence({ title, month }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4 flex items-center justify-between w-90 h-20 mb-4">
      <div className="flex items-center gap-4">
        <div className="bg-yellow-400 text-white text-center rounded-xl w-16 h-16 flex flex-col justify-center">
          <div className="text-2xl text-bold">{title}</div>
          <div className="text-xs text-bold">{month}</div>
        </div>
        <div>
          <h2 className="text-lg text-bold text-gray-800">
            Conférence sur l’orientation
          </h2>
          <p className="text-sm text-bold text-gray-500">
            {title} {month} 2024
          </p>
        </div>
      </div>
    </div>
  );
}
