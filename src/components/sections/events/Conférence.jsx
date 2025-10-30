export default function Conférence() {
  return (
    <div className="bg-white rounded-2xl shadow p-4 flex items-center justify-between mb-4 w-90 h-20 mb-4">
      <div className="flex items-center gap-4">
        <div className="bg-yellow-400 text-white text-center rounded-xl w-16 h-16 flex flex-col justify-center">
          <div className="text-2xl text-bold">20</div>
          <div className="text-xs text-bold">mai</div>
        </div>
        <div>
          <h2 className="text-lg text-bold text-gray-800">
            Conférence sur l’orientation
          </h2>
          <p className="text-sm text-bold text-gray-500">20 MAI 2024</p>
        </div>
      </div>
    </div>
  );
}
