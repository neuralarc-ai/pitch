'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion, useAnimation } from 'framer-motion';
import { RotateCcw } from 'lucide-react';

function generateCaptcha() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [pin, setPin] = useState(['', '', '', '']);
  const [captcha, setCaptcha] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const pinRefs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];
  const controls = useAnimation();

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  const handlePinChange = (idx: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newPin = [...pin];
    newPin[idx] = value;
    setPin(newPin);
    if (value && idx < 3) {
      pinRefs[idx + 1].current?.focus();
    }
    if (!value && idx > 0) {
      pinRefs[idx - 1].current?.focus();
    }
  };

  const handlePinPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const paste = e.clipboardData.getData('text').replace(/[^0-9]/g, '').slice(0, 4);
    if (paste.length === 4) {
      setPin(paste.split(''));
      pinRefs[3].current?.focus();
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (captchaInput !== captcha) {
      setError('Captcha does not match.');
      setCaptcha(generateCaptcha());
      setCaptchaInput('');
      await controls.start({
        x: [0, -16, 16, -12, 12, -8, 8, -4, 4, 0],
        transition: { type: 'keyframes', duration: 0.6 }
      });
      return;
    }
    if (!email || pin.some(d => d === '')) {
      setError('Email and 4-digit PIN are required.');
      await controls.start({
        x: [0, -16, 16, -12, 12, -8, 8, -4, 4, 0],
        transition: { type: 'keyframes', duration: 0.6 }
      });
      return;
    }
    setLoading(true);
    const { error: supabaseError } = await supabase.auth.signInWithPassword({
      email,
      password: pin.join(''),
    });
    setLoading(false);
    if (supabaseError) {
      setError(supabaseError.message);
      await controls.start({
        x: [0, -16, 16, -12, 12, -8, 8, -4, 4, 0],
        transition: { type: 'keyframes', duration: 0.6 }
      });
    } else {
      router.replace('/');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#f9f8f4] to-[#e6e1d9]">
      <motion.form
        onSubmit={handleLogin}
        className="bg-white/90 md:p-10 p-6 rounded-2xl w-full max-w-[90vw] md:max-w-md flex flex-col gap-8 border border-gray-100 backdrop-blur-md"
        animate={controls}
      >
        <h1 className="text-4xl font-extrabold text-center mb-2 tracking-tight text-primary">Sign In</h1>
        <div className="flex flex-col gap-2">
          <label className="text-lg font-medium">Email</label>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="text-lg px-4 py-6 rounded-[4px] border-gray-200"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-lg font-medium">4-digit PIN</label>
          <div className="grid grid-cols-4 gap-3">
            {pin.map((digit, idx) => (
              <Input
                key={idx}
                ref={pinRefs[idx]}
                type="password"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={e => handlePinChange(idx, e.target.value)}
                onPaste={handlePinPaste}
                className="text-2xl text-center font-mono px-0 py-6 rounded-[4px] border-gray-200 focus:ring-2 focus:ring-primary"
                required
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-lg font-medium">Captcha</label>
          <div className="flex items-center gap-2">
            <span className="font-mono text-lg tracking-widest bg-gray-100 px-3 py-2 rounded select-none border border-gray-200">
              {captcha}
            </span>
            <Button type="button" variant="outline" size="icon" onClick={() => setCaptcha(generateCaptcha())} className="h-12 w-12 p-0 flex items-center justify-center rounded-[4px]">
              <RotateCcw className="w-6 h-6" />
            </Button>
          </div>
          <Input
            type="text"
            placeholder="Enter captcha"
            value={captchaInput}
            onChange={e => setCaptchaInput(e.target.value.toUpperCase())}
            required
            className="text-lg px-4 py-6 rounded-[4px] border-gray-200"
          />
        </div>
        {error && <div className="text-red-600 text-center font-medium">{error}</div>}
        <Button type="submit" className="text-lg py-6 bg-[#232323] rounded-[4px] mt-2" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </Button>
      </motion.form>
    </div>
  );
} 