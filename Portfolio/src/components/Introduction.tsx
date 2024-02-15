import { useState } from "react";
import Tutorial from "./Tutorial";
import NavKeys from "./NavKeys";

const Introduction = () => {
    const [isRead, setIsRead] = useState(false);

    onkeyup = (event) => {
        if(event.key === 'Enter') {
          setIsRead(true);
        }
      }
    return(
        <>
            {!isRead ? ( 
                <>
                <Tutorial />
                </>
            ) : (
                <>
                    <NavKeys />
                    <h1>Hello</h1>
                </>
              )} 
        </>
    )
}

export default Introduction;