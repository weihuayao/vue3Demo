interface RuleProp {
  type: 'required' | 'email' | 'range' | 'length';
  massage: string
}

export type RulesProp = RuleProp[]
