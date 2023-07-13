import React from 'react';

const MenuCard = (props) => {
    const data = props.data;
    return (
        <>
            <div className="outer-frame">
                <div className="card-1">
                    <div className="first-row">

                        <span className="offer">{data.name}</span>
                    </div>
                    <div className="card">
                        <img src={data.img} alt="" />
                    </div>
                    <div className="amount-text">
                        <span className='span1'>
                            {data.dsc}
                        </span>
                        <span className='span2'>
                            <i className="fa fa-rupee"></i>
                            {data.price}
                        </span>

                    </div>
                </div>
                <div className="last-row">
                    <div className="border-line">
                        <button> <span>{data.rate} </span>
                             <i className="fa fa-star" aria-hidden="true"></i>
                             <span style={{"textTransform":"capitalize"}}> {data.category} </span>
                        </button>
                        <button>Order Now</button>

                    </div>
                </div>
            </div>
        </>
    )
}
export default MenuCard;