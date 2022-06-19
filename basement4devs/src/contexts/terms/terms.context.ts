import { createContext } from 'react';

import { Term } from '@/models/term';

export interface ITermsContextData {
  loading: boolean;
  terms: Term[];
  getTerms: (term?: string) => Promise<void>;
}

export const TermsContext = createContext<ITermsContextData>({} as ITermsContextData);
