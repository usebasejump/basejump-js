import Image from 'next/image'

export function Logo(props) {
  return (
    <div className="flex items-center justify-center gap-x-1">
      <Image
        src={'/images/basejump-logo.png'}
        alt="Basejump Logo"
        width={40}
        height={40}
      />
      <h1 className="text-xl font-bold leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
        Basejump
      </h1>
    </div>
  )
}
