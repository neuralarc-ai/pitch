'use client'

import Image from "next/image";
import { motion } from "framer-motion";

export default function Technology() {
  return (
    <main className="flex max-w-[1920px] mx-auto flex-col items-center justify-between pb-12">
      <section className="w-full hidden md:flex md:flex-col justify-center px-4 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(16px)', y: 64 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.1 }}
          className="overflow-hidden"
        >
          <Image
            src="/images/05.webp"
            alt="Investment visual"
            width={2560}
            height={1440}
            priority
            className="object-contain w-full h-full rounded-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, filter: 'blur(16px)', y: 64 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
          className="overflow-hidden"
        >
          <Image
            src="/images/14.webp"
            alt="Investment visual"
            width={2560}
            height={1440}
            priority
            className="object-contain w-full h-full rounded-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, filter: 'blur(16px)', y: 64 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.3 }}
          className="overflow-hidden"
        >
          <Image
            src="/images/15.webp"
            alt="Investment visual"
            width={2560}
            height={1440}
            priority
            className="object-contain w-full h-full rounded-2xl"
          />
        </motion.div>
      </section>

      <section className="w-full md:hidden pt-4 flex flex-col justify-center gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(16px)', y: 64 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.1 }}
          className="overflow-hidden"
        >
          <Image
            src="/images/mobile/05.png"
            alt="Investment visual"
            width={2560}
            height={1440}
            priority
            className="object-contain w-full h-full rounded-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, filter: 'blur(16px)', y: 64 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
          className="overflow-hidden"
        >
          <Image
            src="/images/mobile/14.png"
            alt="Investment visual"
            width={2560}
            height={1440}
            priority
            className="object-contain w-full h-full rounded-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, filter: 'blur(16px)', y: 64 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.3 }}
          className="overflow-hidden"
        >
          <Image
            src="/images/mobile/15.png"
            alt="Investment visual"
            width={2560}
            height={1440}
            priority
            className="object-contain w-full h-full rounded-2xl"
          />
        </motion.div>
      </section>
    </main>
  );
}