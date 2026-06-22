import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';
import Image from 'next/image';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2.5">
          <Image 
            src="/logo.svg" 
            alt={`${appName} Logo`} 
            width={24} 
            height={24} 
            priority
          />
          <span className="font-bold text-lg">{appName}</span>
        </div>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
