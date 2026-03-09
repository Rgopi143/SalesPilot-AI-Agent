
import React from 'react';

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
}

export interface Domain {
  id: string;
  name: string;
  description: string;
  topics: string[];
  projects: Project[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface PricingPlan {
  title: string;
  price: string;
  tagline: string;
  features: string[];
  recommended: boolean;
}