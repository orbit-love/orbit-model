import { React } from "react";
import { Navigation } from "react-minimal-side-navigation";

import { useRouter } from "next/router";
import { items } from "./items";

export default function Sidebar() {
  const router = useRouter();
  const onSelect = ({ itemId }) => {
    if (itemId.startsWith("/")) router.push(itemId);
  };

  return (
    <div className="flex hidden fixed flex-col md:block">
      <div className="bg-opacity-80 shrink-0 px-16 text-slate-200 whitespace-nowrap bg-[#1E1449] rounded-sm rounded md:px-0 md:w-56">
        <div className="flex flex-col pt-4 pb-6 px-7">
          <Navigation
            activeItemId={router.pathname}
            onSelect={onSelect}
            items={items}
          ></Navigation>
        </div>
      </div>
    </div>
  );
}
