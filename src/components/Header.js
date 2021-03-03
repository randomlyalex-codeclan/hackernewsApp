import React from 'react';


const Header = ({onSelectChange}) => {

  

  return (
    <>
    
      <h1>Hacker News</h1>
     <div className="nav">
       <ul>
         <li>
          <h4  onClick={() => onSelectChange("topstories")}>Top Stories</h4>   {/*/v0/topstories*/}
         </li>
         <li>
           <h4  onClick={() => onSelectChange("newstories")}>New Stories</h4>    {/*/v0/newstories*/}
         </li>
         <li>
           <h4  onClick={() => onSelectChange("jobstories")}>Jobs</h4>   {/*/v0/jobstories*/}
         </li>
         <li>
            <h4 onClick={() => onSelectChange("beststories")}>Best</h4>  {/*/v0/beststories */}
         </li>
       </ul>
     </div>
    </>
  )
}

export default Header;
