import React from 'react'
import ContactClient from './client'

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Life Positive Mission. We're here to help.",
  keywords: ["Contact Nepal", "NGO Contact", "Get Involved"],
};

export default function ContactPage() {
  return  <ContactClient />
  
}
