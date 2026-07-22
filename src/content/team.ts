import type { TeamMember } from '@/types/content';
import { siteConfig } from '@/config/site';
export const teamMembers: TeamMember[] = [{ name: siteConfig.physicianName, role: 'Fachärztliche Leitung', note: 'Weitere Qualifikationen werden vor Veröffentlichung geprüft.' }];
