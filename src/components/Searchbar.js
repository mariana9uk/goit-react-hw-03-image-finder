
export const Searchbar = ({onSubmit})=>{

    return(
        <header className="searchbar">
        <form className="form" onSubmit ={ (evt)=>{
        evt.preventDefault();
        onSubmit(evt.target.elements.query.value);
   
        evt.target.reset();
    }}>
          <button type="submit" className="button" >
            <span className="button-label">Search</span>
          </button>
          <input
          name="query"
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
      
    )
}