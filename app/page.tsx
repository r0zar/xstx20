'use client'

import { getTransactionById } from '@/lib/stacks-api'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex" onClick={() => getTransactionById('0x63f2c0a09e76e058217363e6dc875720e0e4a6c2f2c9fd541bc33944894b7581')}>
        header
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className='flex space-x-2'>
          <Image
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAKlJREFUKJFjjM57+P/JxckMxAAZ/VwGRnv7kv8MDAwMHxX58Crmv/+JgYGBgYEJl+LZ1VUofJgaJmymza6uYrhwaTeD2c31DAwMDAzZvqZwORZsGlJb2xjMbq5n0JTlYjD1NWUw0HNlYNh8GrcNMMU84TUMBnquDCYqzHA5DA3YFBsmNmN3EkzxQi53iBOgzkAGTFgV4wFwDcQohmvgv/+JoGJYxDGSmjQAx/049k1/mtcAAAAASUVORK5CYII="
            alt="Vercel Logo"
            width={120}
            height={120}
            priority
            style={{ imageRendering: 'pixelated' }}
          />
          <div>inscription details</div>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        footer
      </div>
    </main>
  )
}
