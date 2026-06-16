import { Metadata } from "next";
import EventsClient from './client'
import React from "react";

export const metadata: Metadata = {
  title: "Events",
  description: "Discover upcoming events and workshops by Life Positive Mission.",
  keywords: ["Events Nepal", "Workshops", "Leadership Training"],
};

export default function EventsPage() {
  return <EventsClient />;
}
