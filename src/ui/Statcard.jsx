/* StatCard.jsx */
export default function StatCard({ title, value, change }) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-bold mt-1">{value}</p>
      <p className="text-xs text-green-600 mt-1">{change} this week</p>
    </div>
  );
}
