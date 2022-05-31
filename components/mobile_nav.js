import { React } from "react";
import { Navigation } from "react-minimal-side-navigation";
import { items } from "./mobile_nav_items";

import { useRouter } from "next/router";

export default function MobileNav() {
  const router = useRouter();
  const onSelect = ({ itemId }) => {
    if (itemId.startsWith("/")) router.push(itemId);
  };

  return (
    <div
      id="mobile-nav"
      className="flex fixed left-0 top-20 z-10 flex-col h-screen bg-[#1E1449] md:hidden"
    >
      <div className="bg-opacity-80 shrink-0 px-10 ml-1 w-screen text-slate-200 whitespace-nowrap bg-[#1E1449] rounded-sm rounded md:block md:px-0 md:w-56 md:border md:border-slate-500">
        <div className="flex flex-col px-2 pt-4 pb-10">
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
