import React, { useState, useEffect } from "react";
import logo from './assets/download.png';
import logo2 from './assets/react.svg';

// a type definition
/* type Props = { 
    type?: string; 
    heading: string; 
    children: React.ReactNode; 
    closable?: boolean; 
    onClose?: () => void; 
}; */
  
// the type gets used in the method
export function Alert( {type, heading, children, closable, onClose} ){
   let search : number = 1;
   const [visible, setVisible] = useState<Boolean>(true)
   
   function someEffect() {
     console.log(`doing a search of ${search}`)
     // search = search + 'a';
   }

   useEffect(someEffect, [search]);

   function handleCloseClick() {
    // setVisible(false);
    //if(onClose) {
    //    onClose();
    //}
    search++;
   }

   if (!visible) {
      return null;
   }

    return (
       <div>
        <div>
            <span role="img" aria-label={
                type === "warning"
                   ? "Warning"
                   : "Information"
                }
                >
                {type === "warning" ? (
                     <img src={logo} alt="Logo" />

                ) : (
                    <img src={logo2} alt="Logo" />
                )}
                <button aria-label="Close" onClick={handleCloseClick} />
                <button aria-label="Search" onClick={someEffect} />
            </span>
            <span>{heading}</span>
        </div>
        <div>{children}</div>
       </div>
    );
}