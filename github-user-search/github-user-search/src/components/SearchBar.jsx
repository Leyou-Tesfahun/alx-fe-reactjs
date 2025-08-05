const SearchBar = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const query = formData.get('search');
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="search" 
        placeholder="Search GitHub users..." 
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
