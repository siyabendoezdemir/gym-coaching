import Image from 'next/image'
import HeroImage from '@/public/images/me.jpg'

export default function Hero() {
  return (
    <section>
      <div className="max-w-[700px]">
        <div className="pt-8 pb-10">
          <Image className="rounded-full mb-5" src={HeroImage} width={56} height={56} priority alt="Me" />
          <h1 className="h1 font-aspekta mb-5">
            Ich helfe dir deine{' '}
            <span className="inline-flex relative text-sky-500 before:absolute before:inset-0 before:bg-sky-200 dark:before:bg-sky-500 before:opacity-30 before:-z-10 before:-rotate-2 before:translate-y-1/4">
            Fitnessziele
            </span>{' '}
            zu erreichen
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            Ob du abnehmen, Muskeln aufbauen oder einfach nur fitter werden möchtest, ich helfe dir dabei. Mit individuellen Trainingsplänen und Ernährungstipps erreichst du deine Ziele schneller.
          </p>
        </div>
      </div>
    </section>
  )
}