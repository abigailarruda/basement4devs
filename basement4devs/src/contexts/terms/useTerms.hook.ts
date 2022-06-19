import { useContext } from 'react';

import { ITermsContextData, TermsContext } from './terms.context';

function useTerms(): ITermsContextData {
  const context = useContext(TermsContext);

  if (!context) throw new Error('useTerms must be within a TermsProvider');

  return context;
}

export default useTerms;
