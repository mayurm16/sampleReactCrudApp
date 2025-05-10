import React from "react";



const inputCollection = [
  {id:"bookName", name:"bookName", text:"Book Name", placeHolder:"Book name.." },
  {id:"ISBN", name:"ISBN", text:"ISBN", placeHolder:"ISBN" },
  {id:"Author", name:"Author", text:"Author", placeHolder:"Author" },
]

export const Create = () => {
  return (
    <div className="container">
      <form action="/"> 
        {/* since all of these  */}
        {/* <div className="row">
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
        </div> */}

        {/* 
         since majority of inputs are same this way is better to minize jsx 
         plus in future if any new inputs are to be added like country then this you don't have to write different jsx again all you'd need is to update the array to include an other collection
        */}
        {
          inputCollection.map(input => (
          <>
            <div className="row">
              <div className="col-25">
                <label htmlFor={input.id}>{input.text}</label>
              </div>
              <div className="col-75">
                <input
                type="text"
                id={input.id}
                name={input.name}
                placeholder={input.placeHolder}
              />
              </div>
            </div>
          </>))
        }

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
