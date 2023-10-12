import React, { useState } from "react";
import neone  from "../Images/newlogo2-removebg.png"
// const Section = ({ title, description }) => {
//     const [isVisible, setIsVisible] = useState(false);
//     {/* this component callled Accordion */}
//     return (
//         <div className="section">
//             <h1>{title}</h1>
//             {/* <button onClick={() => setIsVisible(true)}>Show</button>
//             {isVisible && <p>{description}</p>}
//             <button onClick={() => setIsVisible(false)}>Hide</button> */}

//            { /* in ternery */}

//            { isVisible ? (<button onClick={() => setIsVisible(false)}>Show</button>) :
//             (<button onClick={() => setIsVisible(true)} >Hide</button>)
//             }

//             {isVisible && <p>{description}</p>}
//         </div>
//     );
// };

// const Instamart = () => {
//     return (
//         <div className="">
//             <h1 >Instamart1</h1>
//             <Section title="instamart" description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" />
//             <h1 >Instamart1</h1>
//                         <Section title="instamart" description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" />

//         </div>
//     );
// };

// export default Instamart;

{
  /* Taking control of all section */
}
{
  /* and this is liftig the stat variable */
}
{
  /* simgle power is gone */
}

/* 
const Section = ({ title, description, isVisible, setIsvisible }) => {
  //   const [isVisible, setIsvisible] = useState(false);
  return (
    <div className="border-2  my-2 border-gray-900 rounded-sm  duration-200">
      <button
        onClick={() => setIsvisible(!isVisible)}
        className="w-full text-left text-2xl p-2 "
      >
        {title}{" "}
        <span className="text-lg">
          {isVisible ? (
            <FontAwesomeIcon icon={faArrowUp} />
          ) : (
            <FontAwesomeIcon icon={faArrowDown} />
          )}
        </span>
      </button>

      {isVisible && <p className="p-2 ">{description}</p>}
    </div>
  );
};
 */




const InstaMart = () => {
  
  return (
    <div className="main-insta">
      <div className="insta-container">
        <img src={neone} alt="logo" className="logo" />
        <h1 className="text">Coming Soon ...</h1>
      </div>
    </div>
  );
};

export default InstaMart;
