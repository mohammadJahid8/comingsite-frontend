import React from 'react';
import blog1 from '../../assets/blog1.png'

const Topcard = () => {
    return (
        <div className="card card-compact  shadow-xl">
        <figure><img src={blog1} className="w-[350px] h-[230px]" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default Topcard;