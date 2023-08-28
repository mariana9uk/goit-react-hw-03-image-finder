export const Button = ({ onClick, images }) => {
  if (images.length !== 0) {
    return (
      <button
        type="button"
        className="Button"
        onClick ={(evt)=>{
            evt.preventDefault();   
          onClick()
        }}
      >
        Load more
      </button>
    );
  }
};
