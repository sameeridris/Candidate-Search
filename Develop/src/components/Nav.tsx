// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }: {
  currentPage: String, handlePageChange: (currentPage: String) => void 
}) {
  return (
    <ul >
      <li >
        <a
          onClick={() => handlePageChange('/')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Search' ? 'nav-link active' : 'nav-link'}
        >
          Search Candidate
        </a>
      </li>
      <li >
        <a
          onClick={() => handlePageChange('SavedCandidates')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Saved' ? 'nav-link active' : 'nav-link'}
        >
          Saved Candidates
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;