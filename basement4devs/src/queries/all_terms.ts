import { gql } from '@apollo/client';

const all_terms = gql`
  query ($term: String) {
    allTerms(page: 0, perPage: 50, filter: { q: $term }) {
      id
      term
      descriptions
      tag
    }
  }
`;

export default all_terms;
