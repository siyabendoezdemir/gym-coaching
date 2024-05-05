import Image from 'next/image'
import WidgetNewsletter from '@/components/widget-newsletter'
import WidgetSponsor from '@/components/widget-sponsor'
import AboutImg from '@/public/images/about.png'
import Experience from '@/components/experience'

export const metadata = {
  title: 'About - Niclas Martin',
  description: 'Alles über mich und meinen Weg zum personal Trainer. Hier erfährst du mehr über meine Erfahrungen und meine Arbeit.',
}

export default function About() {
  return (
    <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">

      { /* Middle area */}
      <div className="grow">
        <div className="max-w-[700px]">

          <section>
            { /* Page title */}
            <h1 className="h1 font-aspekta mb-5">Hi. Ich bin <span className="inline-flex relative text-sky-500 before:absolute before:inset-0 before:bg-sky-200 dark:before:bg-sky-500 before:opacity-30 before:-z-10 before:-rotate-2 before:translate-y-1/4">Niclas</span> Martin 🤟</h1>
            <Image className="w-full" src={AboutImg} width={692} height={390} alt="About" />
            { /* Page content */}
            <div className="text-slate-500 dark:text-slate-400 space-y-8">
              <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Über mich</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas tincidunt nec nec libero et. Sed ut purus eget sapien egestas tincidunt nec nec libero et. Sed ut purus eget sapien egestas tincidunt nec nec libero et.
                </p>
                <p>
                  Sed ut purus eget sapien egestas tincidunt nec nec libero et. Sed ut purus eget sapien egestas tincidunt nec nec libero et. Sed ut purus eget sapien egestas tincidunt nec nec libero et. Sed ut purus eget sapien egestas tincidunt nec nec libero et.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Motivation</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas tincidunt nec nec libero et. Sed ut purus eget sapien egestas tincidunt nec nec libero et. Sed ut purus eget sapien egestas tincidunt nec nec libero et.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas tincidunt nec nec libero et. Sed ut purus eget sapien egestas tincidunt nec nec libero et. Sed ut purus eget sapien egestas tincidunt nec nec libero et.
                </p>
              </div>

              <Experience />

              <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Lust gecoached zu werden? </h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas tincidunt nec nec libero et. Sed ut purus eget sapien egestas tincidunt nec nec libero et. Sed ut purus eget sapien egestas tincidunt nec nec libero et.

                </p>
              </div>
            </div>
          </section>

        </div>
      </div>

      { /* Right sidebar */}
      <aside className="md:w-[240px] lg:w-[300px] shrink-0">
        <div className="space-y-6">

          <WidgetNewsletter />

        </div>
      </aside>

    </div>
  )
}
