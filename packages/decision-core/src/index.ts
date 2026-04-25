export interface DecisionModelSummary {
  id: string
  name: string
  kind: 'dmn-table' | 'rule-set'
}

export const DECISION_ENGINE_TARGETS = ['drools-kie', 'dmn-compatible'] as const
