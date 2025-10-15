/* TaskRow.jsx */
const statusColor = {
  "in-progress": "bg-yellow-100 text-yellow-700",
  completed: "bg-green-100 text-green-700",
};

export default function TaskRow({ title, project, due, status }) {
  return (
    <div className="flex items-center justify-between border rounded-lg p-3 hover:bg-gray-50">
      <div>
        <p className="font-medium text-sm">{title}</p>
        <p className="text-xs text-gray-500">Project: {project}</p>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-xs text-gray-400">{due}</span>
        <span className={`text-xs px-2 py-1 rounded ${statusColor[status]}`}>
          {status}
        </span>
      </div>
    </div>
  );
}
