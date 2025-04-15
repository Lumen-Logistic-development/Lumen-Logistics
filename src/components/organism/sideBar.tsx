"use client"

import { FC, useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconType } from 'react-icons';
import {
  MdDashboard,
  MdInventory,
  MdProductionQuantityLimits,
  MdLocalShipping,
  MdSettings,
  MdAnalytics,
  MdPeople,
  MdDescription,
  MdMenu,
  MdClose,
  MdChevronLeft,
  MdKeyboardArrowRight,
  MdArrowRight
} from 'react-icons/md';
import { FaBox } from 'react-icons/fa';
import { SiBlockchaindotcom } from 'react-icons/si';

interface NavItemProps {
  href: string;
  icon: IconType;
  title: string;
  isActive: boolean;
  collapsed: boolean;
  onClick?: () => void;
}

const NavItem: FC<NavItemProps> = ({ href, icon: Icon, title, isActive, collapsed, onClick }) => {
  return (
    <Link 
      href={href}
      onClick={onClick}
      className={`flex items-center ${collapsed ? 'justify-center' : 'space-x-3'} px-4 py-3 rounded-lg transition-colors ${
        isActive 
          ? 'bg-blue-600 text-white' 
          : 'text-gray-300 hover:bg-gray-800'
      }`}
      aria-current={isActive ? 'page' : undefined}
      title={collapsed ? title : undefined}
    >
      <Icon className={`text-xl flex-shrink-0 ${collapsed ? 'mx-auto' : ''}`} />
      {!collapsed && <span className="text-sm font-medium">{title}</span>}
    </Link>
  );
};

const Sidebar: FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  // Save collapsed state to localStorage
  useEffect(() => {
    const savedCollapsed = localStorage.getItem('sidebarCollapsed');
    if (savedCollapsed) {
      setCollapsed(savedCollapsed === 'true');
    }
  }, []);

  const toggleCollapse = () => {
    const newCollapsedState = !collapsed;
    setCollapsed(newCollapsedState);
    localStorage.setItem('sidebarCollapsed', String(newCollapsedState));
  };

  const navItems = [
    { href: '/dashboard', icon: MdDashboard, title: 'Dashboard' },
    { href: '/inventory', icon: MdInventory, title: 'Inventory' },
    { href: '/production', icon: MdProductionQuantityLimits, title: 'Production' },
    { href: '/logistics', icon: MdLocalShipping, title: 'Logistics' },
    { href: '/blockchain', icon: SiBlockchaindotcom, title: 'Blockchain' },
    { href: '/analytics', icon: MdAnalytics, title: 'Analytics' },
    { href: '/suppliers', icon: MdPeople, title: 'Suppliers' },
    { href: '/reports', icon: MdDescription, title: 'Reports' },
    { href: '/settings', icon: MdSettings, title: 'Settings' }
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Close mobile sidebar when clicking on Dashboard
  const handleDashboardClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        type="button"
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-40 p-2 rounded-md bg-gray-900 text-white"
        aria-expanded={isOpen}
        aria-controls="sidebar"
      >
        {isOpen ? <MdClose className="text-xl" /> : <MdMenu className="text-xl" />}
        <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
      </button>

      {/* Sidebar */}
      <aside
        id="sidebar"
        className={`fixed top-0 left-0 z-30 h-full ${collapsed ? 'w-16' : 'w-64'} bg-gray-900 transform transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
        aria-label="Sidebar navigation"
      >
        {/* Logo */}
        <div className={`flex items-center ${collapsed ? 'justify-center' : 'space-x-2'} px-4 py-5 border-b border-gray-800`}>
          <FaBox className="text-xl text-blue-500" />
          {!collapsed && <h1 className="text-white text-lg font-bold">Lumen Logistics</h1>}
        </div>

        {/* Toggle collapse button */}
        <button
          type="button"
          onClick={toggleCollapse}
          className={`absolute  top-5 ml-3 transform translate-x-1/2  text-white p-1 rounded-full shadow-lg border  hover:bg-gray-700 transition-colors ${collapsed ? "bg-none right-2 border-none" : "bg-gray-800 right-6 border-gray-700"}`}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <MdKeyboardArrowRight className="text-sm " /> : <MdChevronLeft className="text-sm" />}
        </button>

        {/* Navigation */}
        <nav className="mt-2 px-2 py-2">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavItem
                  href={item.href}
                  icon={item.icon}
                  title={item.title}
                  isActive={pathname === item.href}
                  collapsed={collapsed}
                  onClick={
                    item.href === "/dashboard"
                      ? handleDashboardClick
                      : undefined
                  }
                />
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}

      {/* Main content area - positioned to the right of sidebar */}
      <main
        className={`min-h-screen transition-all duration-300 ${
          collapsed ? "md:ml-16" : "md:ml-64"
        }`}
      >
        {/* Your page content will go here */}
      </main>
    </>
  );
};

export default Sidebar;