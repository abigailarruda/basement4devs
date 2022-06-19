import { useLazyQuery } from '@apollo/client';
import { useCallback, useEffect } from 'react';

import { Term } from '@/models/term';

import all_terms from '@/queries/all_terms';

import { TermsContext } from './terms.context';

export interface AllTermsResponse {
  allTerms: Term[];
}

interface Props {
  children: React.ReactNode;
}

const TermsProvider = ({ children }: Props) => {
  const [getAllTerms, { loading, data }] = useLazyQuery<AllTermsResponse>(all_terms);

  const getTerms = useCallback(async (term?: string) => {
    try {
      await getAllTerms({ variables: { term: term } });
    } catch (error) {
      console.error(error);
    }
  }, [getAllTerms]);

  useEffect(() => {
    if (!data && !loading) getTerms();
  }, [data, getTerms, loading]);

  return (
    <TermsContext.Provider value={{ terms: data?.allTerms, loading, getTerms }}>
      {children}
    </TermsContext.Provider>
  );
};

export default TermsProvider;
