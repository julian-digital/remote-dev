export type JobItem = {
  badgeLetters: string;
  company: string;
  daysAgo: number;
  id: number;
  relevanceScore: number;
  title: string;
};
export type JobItemExpanded = JobItem & {
  description?: string;
  duration?: string;
  salary?: string;
  location?: string;
  qualifications?: string[];
  reviews?: Array<string>;
  coverImgURL?: string;
  companyURL?: string;
};
