'use client'

import Image from "next/image";
import { motion } from "framer-motion";

export default function Investment() {
  return (
    <main className="flex max-w-[1920px] mx-auto flex-col items-center justify-between px-4 py-12">
      <section className="w-full flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(16px)', y: 64 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <Image
            src="/images/06.png"
            alt="Investment visual"
            width={2560}
            height={1440}
            priority
            className="object-contain w-full h-full"
          />
        </motion.div>
      </section>
    </main>
  );
} 