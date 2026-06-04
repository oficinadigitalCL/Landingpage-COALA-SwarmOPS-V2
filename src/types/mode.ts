export type ModeTier = 'T0' | 'T0.5' | 'T1' | 'T2' | 'T3';

export type ModeCategory =
  | 'executor'
  | 'checker'
  | 'scout'
  | 'coder'
  | 'thinker'
  | 'engineer'
  | 'validator'
  | 'reviewer'
  | 'auditor'
  | 'planner'
  | 'orchestrator'
  | 'guardian'
  | 'inspector'
  | 'knowledge'
  | 'enrich'
  | 'architect'
  | 'writer';

export interface ModeCapability {
  name: string;
  description: string;
}

export interface Mode {
  id: string;
  name: string;
  slug: string;
  tier: ModeTier;
  category: ModeCategory;
  description: string;
  capabilities: ModeCapability[];
  icon: string;
  costPerMTok: number;
  model: string;
  emoji: string;
}
