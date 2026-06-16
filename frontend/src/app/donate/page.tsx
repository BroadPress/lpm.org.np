import DonateClient from './client'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate Now",
  description: "Support our mission with a donation. Every contribution makes a difference.",
  keywords: ["Donate Nepal", "NGO Donation", "Support LPM"],
};
export default function DonatePage() {
  return <DonateClient />;
}
