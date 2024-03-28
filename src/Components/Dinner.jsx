import React from 'react';
import { DinnerList } from './DinnerList';

export const Dinner = () => {

  return (
    <>
        {DinnerList.map(({ dinner }, index) => {
            
            return(
                <div key={index}>
                <p>{dinner}</p>
                </div>
            )
        })}
    </>
  )
}