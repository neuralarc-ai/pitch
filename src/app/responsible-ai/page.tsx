'use client'

import { motion } from "framer-motion";

export default function ResponsibleAI() {
  return (
    <main className="flex max-w-[1920px] mx-auto flex-col items-center justify-between px-4 pb-12">
      <section className="w-full flex flex-col justify-center gap-8 items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight"
        >
          Responsible AI at NeuralArc
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
          className="text-lg text-gray-700 max-w-2xl leading-relaxed"
        >
          At NeuralArc, we are committed to developing and deploying AI technologies responsibly and ethically. 
          Our approach prioritizes fairness, transparency, accountability, and privacy to ensure our AI solutions 
          benefit humanity while mitigating potential risks.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.4 }}
          className="text-left w-full max-w-2xl mt-4"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Our Principles:</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong className="text-gray-800">Fairness & Inclusivity:</strong> Ensuring our AI systems treat all individuals equitably, without bias.</li>
            <li><strong className="text-gray-800">Transparency & Explainability:</strong> Designing AI models that are understandable and their decisions can be traced.</li>
            <li><strong className="text-gray-800">Accountability:</strong> Establishing clear lines of responsibility for AI system outcomes.</li>
            <li><strong className="text-gray-800">Privacy & Security:</strong> Protecting user data and ensuring the security of our AI infrastructure.</li>
            <li><strong className="text-gray-800">Robustness & Reliability:</strong> Building AI systems that are resilient, accurate, and perform consistently.</li>
          </ul>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.6 }}
          className="text-lg text-gray-700 max-w-2xl leading-relaxed mt-4"
        >
          We continuously review and update our practices to align with the latest advancements in AI ethics and regulations. 
          Our goal is to build trust and ensure that our AI solutions contribute positively to society.
        </motion.p>
      </section>
    </main>
  );
} 