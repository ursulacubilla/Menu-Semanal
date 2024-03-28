import React from 'react';
import { LunchList } from './LunchList';

export const Lunch = () => {

  return (
    <>
        {LunchList.map(({ food }, index) => {
            console.log(NewList);
            return(
                <div key={index}>
                <p>{food}</p>
                </div>
            )
        })}
    </>
  )
}