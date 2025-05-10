import React from "react";

export const Create = () => {
  return (
    <div className="container">
      <form action="/">
        <div className="row">
          <div className="col-25">
            <label htmlFor="bookName">Book Name</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="bookName"
              name="bookName"
              placeholder="Book name.."
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="ISBN">ISBN</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="ISBN"
              name="ISBN"
              placeholder="ISBN"
            />
          </div>
        </div>
        
        <div className="row">
          <div className="col-25">
            <label htmlFor="Author">Author</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="Author"
              name="Author"
              placeholder="Author"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label htmlFor="Author">Author</label>
          </div>
          <div className="col-75">
            <select id="Published" name="Published">
              <option value="Published">Published</option>
              <option value="UnPublished">UnPublished</option>
            </select>
          </div>
        </div>
        <br />
        <div className="row">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Create;
