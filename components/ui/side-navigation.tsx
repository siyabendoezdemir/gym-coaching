'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import HeroImage from '@/public/images/me.jpg'

export default function SideNavigation() {

  const pathname = usePathname()

  return (
    <div className="sticky top-0 w-16 md:w-24 shrink-0 h-screen overflow-y-auto no-scrollbar border-r border-slate-200 dark:border-slate-800">
      <div className="h-full flex flex-col justify-between after:flex-1 after:mt-auto">
        <div className="flex-1">
          {pathname !== '/' && (
            <div className="flex justify-center my-4">
              <Link href="/">
                <Image className="rounded-full" src={HeroImage} width={32} height={32} priority alt="Me" />
              </Link>
            </div>
          )}
        </div>
        <div className="flex-1 grow flex items-center">
          <nav className="w-full">
            <ul className="space-y-4">
              <li className="py-2">
                <Link
                  href="/"
                  className={`w-full h-6 flex items-center justify-center relative after:absolute after:w-0.5 after:right-0 after:top-0 after:bottom-0 ${pathname !== '/about' && pathname !== '/subscribe' && pathname !== '/projects' && pathname !== '/resume'
                    ? 'text-sky-500 after:bg-sky-500'
                    : 'text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400'
                    }`}
                >
                  <span className="sr-only">Startseite</span>
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="21" height="19">
                    <path fillOpacity=".16" d="M4 7v11h13V7l-6.5-5z" />
                    <path d="m10.433 3.242-8.837 6.56L.404 8.198l10.02-7.44L20.59 8.194l-1.18 1.614-8.977-6.565ZM16 17V9h2v10H3V9h2v8h11Z" />
                  </svg>
                </Link>
              </li>
              <li className="py-2">
                <Link
                  href="/about"
                  className={`w-full h-6 flex items-center justify-center relative after:absolute after:w-0.5 after:right-0 after:top-0 after:bottom-0 ${pathname === '/about'
                    ? 'text-sky-500 after:bg-sky-500'
                    : 'text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400'
                    }`}
                >
                  <span className="sr-only">Über mich</span>
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                    <path fillOpacity=".16" d="M10 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" />
                    <path d="M9 5h2v2H9V5Zm0 4h2v6H9V9Zm1-9C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" />
                  </svg>
                </Link>
              </li>
              <li className="py-2">
                <Link
                  href="/resume"
                  className={`w-full h-6 flex items-center justify-center relative after:absolute after:w-0.5 after:right-0 after:top-0 after:bottom-0 ${pathname === '/resume'
                    ? 'text-sky-500 after:bg-sky-500'
                    : 'text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400'
                    }`}
                >
                  <span className="sr-only">Lebenslauf</span>
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="18" height="20">
                    <path fillOpacity=".16" fillRule="nonzero" d="M1 5h16v14H1z" />
                    <path fillRule="nonzero" d="M2 6v12h14V6H2Zm16-2v16H0V4h18ZM2 2V0h14v2H2Z" />
                  </svg>
                </Link>
              </li>
              <li className="py-2">
                <Link
                  href="/subscribe"
                  className={`w-full h-6 flex items-center justify-center relative after:absolute after:w-0.5 after:right-0 after:top-0 after:bottom-0 ${pathname === '/subscribe'
                    ? 'text-sky-500 after:bg-sky-500'
                    : 'text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400'
                    }`}
                >
                  <span className="sr-only">Kontakt</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-dumbbell"><path d="M14.4 14.4 9.6 9.6" /><path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z" /><path d="m21.5 21.5-1.4-1.4" /><path d="M3.9 3.9 2.5 2.5" /><path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z" /></svg>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
