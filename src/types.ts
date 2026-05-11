export interface TechItem {
  name: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: TechItem[];
  category: string;
  link: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}
