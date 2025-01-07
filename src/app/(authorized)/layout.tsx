'use client';

import { Home, Settings } from 'lucide-react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ProtectedRoute } from '@/components/ProtectedRoute';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const links = [
    {
      href: '/dashboard',
      icon: Home,
      label: 'Головна',
    },
    {
      href: '/settings',
      icon: Settings,
      label: 'Налаштування',
    },
  ];

  return (
    <ProtectedRoute>
      {children}
      <div className="fixed bottom-0 left-0 right-0 border-t bg-background">
        <div className="mx-auto max-w-xl px-4">
          <div className="flex justify-evenly py-4">
            {links.map(({ href, icon: Icon, label }) => {
              const isActive = pathname === href;
              return (
                <Link key={href} href={href} className="flex items-center gap-2">
                  <Icon className={`h-6 w-6 ${isActive ? 'text-indigo-600' : 'text-gray-400'}`} />
                  <span className={`text-sm ${isActive ? 'text-indigo-600' : 'text-gray-400'}`}>
                    {label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
