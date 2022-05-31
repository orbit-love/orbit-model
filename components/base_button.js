import React from "react";

export default function BaseButton({ onClick, children }) {
  const colors =
    "border-slate-400 text-slate-200 hover:bg-slate-900 hover:text-white";
  return (
    <button
      onClick={onClick}
      className={`${colors} whitespace-nowrap py-3 px-6 text-sm font-semibold uppercase !no-underline rounded rounded-md border`}
    >
      {children}
    </button>
  );
}
