import React from "react";


  const companyCollection = [ {
    isbn:"Alfreds Futterkiste",
    contact:"Maria Anders",
    country:"Germany"
  },
  {
    isbn:"Berglunds snabbköp",
    contact:"Christina Berglunds",
    country:"Sweden"
  },
  {
    isbn:"Centro comercial Moctezum",
    contact:"Francisco Chang",
    country:"Mexico"
  },
  {
    isbn:"Ernst Handel",
    contact:"Roland Mendel",
    country:"Austria"
  },
      {
    isbn:"Island Trading",
    contact:"Helen Bennett",
    country:"UK"
  },
  {
    isbn:"Königlich Essen",
    contact:"Philip Cramer",
    country:"Germany"
  },
  {
    isbn:"Laughing Bacchus Winecellars",
    contact:"Yoshi Tannamuri",
    country:"Canada"
  },
    {
    isbn:"Laughing Bacchus Winecellars",
    contact:"Yoshi Tannamuri",
    country:"Canada"
  },
  {
    isbn:"Magazzini Alimentari Riuniti",
    contact:"Giovanni Rovelli", 
    country:"Italy"
  },
    {
    isbn:"North/South",
    contact:"Simon Crowther", 
    country:"UK"
  },
    {
    isbn:"Paris spécialités",
    contact:"Marie Bertrand", 
    country:"France"
  },
 ];
 const canRender = true;

// No need to write un-nessary static JSX here

//  function renderData() {  
//   if (canRender) { 
//     return (
//       <>
//         <tr>
//           <td>Alfreds Futterkiste</td>
//           <td>Maria Anders</td>
//           <td>Germany</td>
//         </tr>
//         <tr>
//           <td>Berglunds snabbköp</td>
//           <td>Christina Berglund</td>
//           <td>Sweden</td>
//         </tr>
//         <tr>
//           <td>Centro comercial Moctezuma</td>
//           <td>Francisco Chang</td>
//           <td>Mexico</td>
//         </tr>
//         <tr>
//           <td>Ernst Handel</td>
//           <td>Roland Mendel</td>
//           <td>Austria</td>
//         </tr>
//         <tr>
//           <td>Island Trading</td>
//           <td>Helen Bennett</td>
//           <td>UK</td>
//         </tr>
//         <tr>
//           <td>Königlich Essen</td>
//           <td>Philip Cramer</td>
//           <td>Germany</td>
//         </tr>
//         <tr>
//           <td>Laughing Bacchus Winecellars</td>
//           <td>Yoshi Tannamuri</td>
//           <td>Canada</td>
//         </tr>
//         <tr>
//           <td>Magazzini Alimentari Riuniti</td>
//           <td>Giovanni Rovelli</td>
//           <td>Italy</td>
//         </tr>
//         <tr>
//           <td>North/South</td>
//           <td>Simon Crowther</td>
//           <td>UK</td>
//         </tr>
//         <tr>
//           <td>Paris spécialités</td>
//           <td>Marie Bertrand</td>
//           <td>France</td>
//         </tr>
//       </>
//     );
//   }
// }


export const Fetch = () => {
  return (
    <table id="record">
    <tr>
      <th>ISBN</th>
      <th>Published</th>
      <th>Author</th>
    </tr>
    { canRender && ((  // will execute this code only when canRender variable is true
      <>
        {companyCollection.map( companyObj => (
          <tr key={companyObj?.isbn?.replaceAll(" ", "-") /* this key is to avoid un-nessary re-render of any the same items again and again */ }>
            <td>{companyObj.isbn}</td>
            <td>{companyObj.contact}</td>
            <td>{companyObj.country}</td>
          </tr>) 
      )}
      </>
    )) 
    }
  </table>
  );
};

export default Fetch;
