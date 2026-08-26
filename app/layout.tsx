import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HealthConnect — Breaking barriers, healing lives",
  description: "HealthConnect connecte les communautés rurales avec des médecins qualifiés à travers des consultations médicales à distance.",
  keywords: "santé, médecine à distance, Afrique, Burundi, consultations, HealthConnect",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
