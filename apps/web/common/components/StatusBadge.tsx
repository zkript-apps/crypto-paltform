import React from "react"

function StatusBadge({
  status,
}: {
  status: "Pending" | "Accepted" | "Rejected"
}) {
  if (status === "Pending") {
    return (
      <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
        Ausstehend
      </span>
    )
  } else if (status === "Accepted") {
    return (
      <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
        Akzeptiert
      </span>
    )
  } else if (status === "Rejected") {
    return (
      <span className="inline-flex items-center rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700">
        Abgelehnt
      </span>
    )
  }
}

export default StatusBadge
