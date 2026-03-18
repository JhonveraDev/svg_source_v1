import { useState } from "react";
import type { Logo } from "../index";

export const useLogoModal = () => {
  const [selectedLogo, setSelectedLogo] = useState<Logo | null>(null);

  const openModal = (logo: Logo) => setSelectedLogo(logo);
  const closeModal = () => setSelectedLogo(null);

  return { selectedLogo, openModal, closeModal };
};