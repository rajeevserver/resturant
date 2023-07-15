import React from 'react';

const MenuCard = (props) => {
    const { name, img, dsc, price, rate, category } = props.data;
    return (
        <>
            <div className="outer-frame">
                <div className="card-1">
                    <div className="first-row">

                        <span className="offer">{name}</span>
                    </div>
                    <div className="card">
                        <img src={img} alt="" />
                    </div>
                    <div className="amount-text">
                        <span className='span1'>
                            {dsc}
                        </span>
                        <span className='span2'>
                            <i className="fa fa-rupee"></i>
                            {price}
                        </span>

                    </div>
                </div>
                <div className="last-row">
                    <div className="border-line">
                        <button> <span>{rate} </span>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <span style={{ "textTransform": "capitalize" }}> {category} </span>
                        </button>
                        <button>Order Now</button>

                    </div>
                </div>
            </div>
        </>
    )
}
export default MenuCard;