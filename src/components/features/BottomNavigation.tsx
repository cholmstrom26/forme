import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { cn } from '@/lib/utils';
import { Home, BarChart3, Settings, User } from 'lucide-react';

interface NavItem {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { href: '/', label: 'Today', icon: Home },
  { href: '/progress', label: 'Progress', icon: BarChart3 },
  { href: '/settings', label: 'Settings', icon: Settings },
  { href: '/profile', label: 'Profile', icon: User },
];

export const BottomNavigation: React.FC = () => {
  const router = useRouter();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-sand-dark">
      <div className="max-w-md mx-auto">
        <div className="flex justify-around py-2">
          {navItems.map(({ href, label, icon: Icon }) => {
            const isActive = router.pathname === href;
            
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  'flex flex-col items-center py-2 px-3 rounded-lg transition-colors duration-200',
                  isActive 
                    ? 'text-lavender-dark bg-lavender-light' 
                    : 'text-gray-600 hover:text-lavender-dark hover:bg-sand-light'
                )}
              >
                <Icon className="w-5 h-5 mb-1" />
                <span className="text-xs font-medium">{label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
