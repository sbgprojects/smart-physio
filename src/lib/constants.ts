export const CLINIC = {
  name: "Smart Physio",
  tagline: "Healing Powered by Technology",
  fullName: "Smart Physio - Advanced Robotic Rehab & Physiotherapy Center",
  doctor: "Dr. Nileema Chaudhary",
  doctorTitle: "Physiotherapist (PT)",
  phone: "8669922351",
  whatsappNumber: "918669922351",
  address: "402, Archway, Sopan Baug Society, Balewadi, Pune - 411045",
  timings: "10:00 AM to 8:30 PM",
  days: "Monday to Saturday",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.1!2d73.7796!3d18.5676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM0JzAzLjQiTiA3M8KwNDYnNDYuNiJF!5e0!3m2!1sen!2sin!4v1",
  areas: ["Balewadi", "Baner", "Pashan", "Aundh", "Wakad", "Bavdhan"],
} as const;

export function getWhatsAppUrl(message?: string) {
  const text = message || `Hi, I would like to book an appointment at ${CLINIC.name}.`;
  return `https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function getCallUrl() {
  return `tel:+${CLINIC.whatsappNumber}`;
}
