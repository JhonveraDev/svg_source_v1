import type { ComponentType } from "react";

export type SidebarLink = {
  to: string;
  label: string;
  icon: ComponentType<{ size?: number }>;
};