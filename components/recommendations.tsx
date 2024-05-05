import Image from 'next/image'

import Testimonial03 from '@/public/images/testimonial-03.jpg'
import Testimonial04 from '@/public/images/testimonial-04.jpg'

export default function Recommendations() {
  return (
    <div className="space-y-8">
      <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Empfehlungen</h2>
      <ul className="space-y-8">
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <Image className="rounded-full" src={Testimonial03} width={56} height={56} alt="Testimonial 03" />
            </div>
            <div className="pl-20 space-y-1">
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">Tom Platz</div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">50kg → 77kg</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">“Mit Niclas zu arbeiten ist  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas tincidunt nec nec libero et. ”</div>
            </div>
          </div>
        </li>
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <Image className="rounded-full" src={Testimonial04} width={56} height={56} alt="Testimonial 03" />
            </div>
            <div className="pl-20 space-y-1">
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">Tom Platz</div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">50kg → 77kg</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">“Mit Niclas zu arbeiten ist  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas tincidunt nec nec libero et. ”</div>
            </div>
          </div>
        </li>

      </ul>
    </div>
  )
}