"use client";
import { useState } from "react";
import * as LucideIcons from "lucide-react";
import LinkItem from "./LinkItem";

const LinkGroup = ({ title, icon, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const IconComponent = icon ? LucideIcons[icon] : null;

  return (
    <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-sm transition-all hover:shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex w-full items-center justify-between rounded-3xl bg-gray-50 p-4 font-medium text-gray-800 hover:bg-gray-100 transition-colors"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          {IconComponent && (
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-800">
              <IconComponent className="h-4 w-4" />
            </div>
          )}
          <span>{title}</span>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-3 p-4">
          {items.map((item, index) => (
            <LinkItem key={index} href={item.href} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinkGroup;
