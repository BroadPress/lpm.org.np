import { Metadata } from "next";
import GalleryClient from './client'
import React from "react";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore our photo gallery capturing moments of transformation.",
  keywords: ["Photo Gallery", "Events Photos", "Volunteer Photos"],
};

export default function GalleryPage() {
  return <GalleryClient />;
}
