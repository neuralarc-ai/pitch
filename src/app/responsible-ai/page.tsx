'use client'

import Image from "next/image";
import { motion } from "framer-motion";

export default function ResponsibleAI() {
  return (
    <main className="flex max-w-[1920px] mx-auto flex-col items-center justify-between px-4 pb-12">
      <section className="w-full flex flex-col justify-center gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(16px)', y: 64 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.1 }}
          className="overflow-hidden"
        >
          <Image
            src="/images/16.png"
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
            src="/images/17.png"
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
            src="/images/18.png"
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