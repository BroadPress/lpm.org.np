import React from 'react'
import { Metadata } from 'next';
import AboutClient from './client';
export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Life Positive Mission's mission to build a positive, conscious, and spiritually awakened world.",
  keywords: ["About LPM", "NGO Nepal", "Mission", "Vision"],
  openGraph: {
    title: "About Life Positive Mission",
    description: "Transform Yourself, Transform the World",
  },
};
export default function AboutPage() {
  return  <AboutClient />;
}
