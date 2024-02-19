
const AddBooks = () => {
    const handleAddBooks =event=>{
      event.preventDefault();
  
      const form =event.target;
  
      const image = form.Image.value;
      const bookName  = form.name.value;
      const quantityBook = form.quantity.value;
      const authorName = form.author.value;
      const category = form.category.value;
      const short = form.short.value;
      const rating = form.rating.value;
  
      const newAddProduct ={
        image,bookName,quantityBook,authorName,category,short,rating
      }
      console.log(newAddProduct);
  
      // send data to server side
  
  
    }
      return (
          <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Add Books</h1>
        <p className="py-6">Choice Your Best Product</p>
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleAddBooks} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input type="text" name="Image" placeholder="Image URL" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Book Name</span>
            </label>
            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input type="number" name="quantity" placeholder="quantity" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Author Name</span>
            </label>
            <input type="text" name="author" placeholder="author name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input type="text" name="category" placeholder="price" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <input type="text" name="short" placeholder="short description" className="input input-bordered" required />
            
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input type="text" name="rating" placeholder="rating" className="input input-bordered" required />
            
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add Book</button>
          </div>
        </form>
      </div>
    </div>
  </div>
      );
  };
  
  export default AddBooks;