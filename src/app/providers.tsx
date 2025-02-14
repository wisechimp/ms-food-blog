"use client";

import React from "react";

import { HeroUIProvider } from "@heroui/react";

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return <HeroUIProvider>{children}</HeroUIProvider>;
};

export default Providers;
