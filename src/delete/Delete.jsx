import React from "react";

export const Delete = () => {
  return (
    <div className="container">
      <form action="/">
        <div className="row">
          <div className="col-25">
            <label htmlFor="ISBN">ISBN</label>
          </div>
          <div className="col-75">
            <input type="text" id="ISBN" name="ISBN" placeholder="ISBN" />
          </div>
        </div>
        <div className="row">
          <input type="FetchForDelete" value="FetchForDelete" />
        </div>
      </form>
    </div>
  );
};

export default Delete;
