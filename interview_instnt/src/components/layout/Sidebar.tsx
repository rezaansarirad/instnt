import React from "react";
import { NavLink } from "react-router-dom";
import {
  Users,
  Calendar,
  Briefcase,
  BarChart3,
  Settings,
  HelpCircle,
  ChevronDown,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

import logo from "@/assets/icons/violo_logo.png";

export const Sidebar: React.FC<SidebarProps> = ({ isOpen = true, onClose }) => {
  const [expandedSections, setExpandedSections] = React.useState<string[]>([
    "candidates",
    "interviews",
    "jobs",
  ]);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section],
    );
  };

  const navItems = [
    {
      id: "candidates",
      label: "Candidates",
      icon: Users,
      path: "/candidates",
      subItems: [
        { label: "All Candidates", path: "/candidates" },
        { label: "Candidate Profile", path: "/candidates/profile" },
      ],
    },
    {
      id: "interviews",
      label: "Interviews",
      icon: Calendar,
      path: "/interviews",
      subItems: [
        { label: "All Interviews", path: "/interviews" },
        { label: "Schedule Interview", path: "/interviews/schedule" },
      ],
    },
    {
      id: "jobs",
      label: "Jobs",
      icon: Briefcase,
      path: "/dashboard",
      subItems: [
        { label: "All Jobs", path: "/dashboard" },
        { label: "Create Job", path: "/create-job" },
      ],
    },
    {
      id: "reports",
      label: "Reports",
      icon: BarChart3,
      path: "/reports",
      subItems: [
        {
          label: "Interview Performance",
          path: "/reports/interview-performance",
        },
        { label: "Candidate Success", path: "/reports/candidate-success" },
      ],
    },
    {
      id: "settings",
      label: "Settings",
      icon: Settings,
      path: "/settings",
      subItems: [],
    },
    {
      id: "help",
      label: "Help",
      icon: HelpCircle,
      path: "/help",
      subItems: [
        { label: "FAQ", path: "/help/faq" },
        { label: "Guides & Support", path: "/help/guides" },
      ],
    },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-white border-r border-border z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static
        `}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-border">
            <img src={logo} alt="Violo" className="h-8" />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={onClose}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  {item.subItems.length > 0 ? (
                    <>
                      <button
                        onClick={() => toggleSection(item.id)}
                        className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className="h-5 w-5" />
                          <span className="font-medium">{item.label}</span>
                        </div>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            expandedSections.includes(item.id)
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>
                      {expandedSections.includes(item.id) && (
                        <ul className="mt-1 ml-8 space-y-1">
                          {item.subItems.map((subItem) => (
                            <li key={subItem.path}>
                              <NavLink
                                to={subItem.path}
                                className={({ isActive }) =>
                                  `block px-3 py-2 rounded-lg text-sm transition-colors ${
                                    isActive
                                      ? "bg-primary text-primary-foreground"
                                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                                  }`
                                }
                                onClick={onClose}
                              >
                                {subItem.label}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        }`
                      }
                      onClick={onClose}
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.label}</span>
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-4 border-t border-border">
            <div className="flex items-center gap-3 px-3 py-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
                D
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  Developer
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  dev@violo.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
