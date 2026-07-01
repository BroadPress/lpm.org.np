import type { Metadata } from 'next';
import TermsAndTerminologiesClient from './client';

export const metadata: Metadata = {
  title: 'Terms and Terminologies',
  description:
    'Read the website terms and terminology guide for Life Positive Mission, including usage rules, definitions, and visitor guidance.',
  keywords: ['Terms and Conditions', 'Terminologies', 'Website Terms', 'Life Positive Mission'],
  openGraph: {
    title: 'Terms and Terminologies | Life Positive Mission',
    description:
      'A professional guide to the terms of use and core terminology used across the Life Positive Mission website.',
  },
};

export default function TermsAndTerminologiesPage() {
  return <TermsAndTerminologiesClient />;
}
