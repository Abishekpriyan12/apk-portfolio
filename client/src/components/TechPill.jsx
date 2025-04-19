import React from "react";

export default function TechPill({ name, Icon }) {
  return (
    <span className="inline-flex items-center gap-1 px-3 py-1 border border-gray-700 text-sm font-medium text-gray-200 rounded-full hover:bg-gray-800 transition">
      {Icon && <Icon className="w-4 h-4" />}
      {name}
    </span>
  );
}
