'use client' //Error components must be client side components

import { useEffect } from "react";

const Error = ({error,reset})=>{
    useEffect(()=>{
        console.log(error);
    }, [error]);

    return (
        <div>
            <h3>Something went wrong!!!</h3>
            <button 
                onClick={()=>reset()}>
                    Try Again
                </button>
        </div>
    );
}

// This error file handles all the errors in 
// all URLs containing /post.