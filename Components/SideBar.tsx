import { links } from "@/types/sideBar";
import {
  Bookmark,
  CalendarCheck,
  CarFront,
  LayoutDashboard,
  LogOut,
  MessageCircleMore,
  Settings,
  Users,
} from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

const SideBar = () => {
  const pathname = usePathname();
  const links: links = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard width={16} />,
      url: "/dashboard",
    },
    {
      name: "Car listings",
      icon: <CarFront width={16} />,
      url: "/dashboard/car-listing",
    },
    {
      name: "Bookings",
      icon: <CalendarCheck width={16} />,
      url: "/dashboard/bookings",
    },
    {
      name: "Drafts",
      icon: <Bookmark width={16} />,
      url: "/dashboard/drafts",
    },
    {
      name: "Chats",
      icon: <MessageCircleMore width={16} />,
      url: "/dashboard/chats",
    },
    {
      name: "Customers",
      icon: <Users width={16} />,
      url: "/dashboard/customers",
    },
  ];

  const linksTwo:links = [
    {
      name: "Settings",
      icon: <Settings width={16} />,
      url: "/dashboard/settings",
    },
    {
      name: "Log out",
      icon: <LogOut width={16} color="#FFAC98" />,
      url: "/dashboard/logout",
    },
  ]
  return (
    <div className={`max-w-[185px] w-full bg-[#222B2E] h-screen`}>
      <h1
        className={`py-[12px] px-[20px] text-[#FFFFFF] text-[24px] font-[700] font-square`}
      >
        MOBR
      </h1>
      <ul>
        {links.map((link) => (
          <li
            key={link.name}
            className={`text-[#FFFFFF] ${
              pathname ===link.url && "bg-[#DDE4E6] text-[#222B2E]"
            }`}
          >
            <a
              href={link.url ? link.url : ""}
              className="flex gap-3 py-[16px] px-[20px]"
            >
              {link.icon}
              <p className={`font-[400] text-[16px] font-square`}>
                {link.name}
              </p>
            </a>
          </li>
        ))}
      </ul>
      <ul className={`mt-24`}>
        {linksTwo.map((link) => (
          <li
            key={link.name}
            className={`text-[#FFFFFF] ${
              pathname.includes(link.url) && "bg-[#DDE4E6] text-[#222B2E]"
            }`}
          >
            <a
              href={link.url ? link.url : ""}
              className="flex gap-3 py-[16px] px-[20px]"
            >
              {link.icon}
              <p className={`font-[400] text-[16px] font-square ${link.name === 'Log out' && 'text-[#FFAC98]'}`}>
                {link.name}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
