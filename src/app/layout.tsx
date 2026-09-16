import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Smart Physio | Advanced Robotic Rehab & Physiotherapy Center, Balewadi Pune",
    template: "%s | Smart Physio, Balewadi Pune",
  },
  description:
    "Smart Physio, Balewadi, Pune. Advanced robotic rehab and physiotherapy center led by Dr. Nileema Chaudhary. Book your appointment today.",
  keywords: [
    "physiotherapy",
    "physiotherapy in Balewadi",
    "physiotherapy in Baner",
    "physiotherapy in Pune",
    "robotic rehabilitation",
    "robotic rehab Pune",
    "Dr. Nileema Chaudhary",
    "sports injury rehab Pune",
    "post surgery rehabilitation",
    "neurological rehabilitation",
    "physiotherapy Aundh",
    "physiotherapy Pashan",
    "physiotherapy Wakad",
    "physiotherapy Bavdhan",
    "pain management Pune",
  ],
  openGraph: {
    title: "Smart Physio | Advanced Robotic Rehab & Physiotherapy, Balewadi Pune",
    description:
      "Advanced robotic rehab and physiotherapy center in Balewadi, Pune. Led by Dr. Nileema Chaudhary (PT).",
    type: "website",
    locale: "en_IN",
    siteName: "Smart Physio",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Smart Physio - Advanced Robotic Rehab & Physiotherapy Center",
  description:
    "Advanced robotic rehabilitation and physiotherapy center in Balewadi, Pune.",
  url: "https://smartphysio.in",
  telephone: "+918669922351",
  address: {
    "@type": "PostalAddress",
    streetAddress: "402, Archway, Sopan Baug Society, Balewadi",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "411045",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 18.5676,
    longitude: 73.7796,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "20:30",
  },
  medicalSpecialty: "PhysicalTherapy",
  availableService: [
    "Orthopedic Physiotherapy",
    "Neurological Rehabilitation",
    "Robotic Rehab Therapy",
    "Sports Injury Rehabilitation",
    "Post-Surgery Rehabilitation",
    "Pain Management",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geist.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-bg text-text">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
