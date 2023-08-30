import React from 'react'
import './GiftCards.css'
import { Container } from '@mui/material';



const giftCards = [
  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_24102023031014_480x295.jpg",
    category:"festival",
  },
  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_24052023030554_480x295.jpg",
    category:"festival",
  },
  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_02402022094010_480x295.jpg",
  },
  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_02282022102856_480x295.jpg",
  },
  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_02302022103011_480x295.jpg",
  },
  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_02302022123034_480x295.jpg",
  },
  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_02412022124146_480x295.jpg",
  },
  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_02432022124329_480x295.jpg",
  },
  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_02442022124437_480x295.jpg",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_02452022124540_480x295.jpg",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_02122022101208_480x295.jpg",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_25412019034153_480x295.jpg",
  },
  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_27542019095448_480x295.jpg",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_27572019095730_480x295.jpg",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_18532019025324_480x295.jpg",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_18552019025553_480x295.jpg",
  },
  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_18082019040833_480x295.jpg",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_18312019023126_480x295.jpg",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_18432019024353_480x295.jpg",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_18462019024648_480x295.jpg",
  },
  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_18482019024856_480x295.jpg",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_18512019025105_480x295.jpg",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_18572019025701_480x295.jpg",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_05542019115440_480x295.jpg",
  },
  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_30332019123339_480x295.jpg",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_30222019022237_480x295.jpg",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_30192019031956_480x295.jpg",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_30482019034817_480x295.jpg",
  },
  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_05572019115712_480x295.jpg",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_16092019040918_480x295.jpg",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_06532019115311_480x295.jpg",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_22202019042033_480x295.jpg",
  },
  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_30162019031622_480x295.jpg",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_06572019115735_480x295.jpg",
  },

  {
    gift: "https://in-aps.bmscdn.com/gv/gift_my_show_04402020084029_480x295.jpg",
  },

  {
    gift: "https://in.bmscdn.com/vouchagram/combo/bms_and_the_beer_cafe_combo_20302018053047.jpg",
  },
  {
    gift: "https://in.bmscdn.com/vouchagram/combo/bms_and_tgi_fridays_combo_20042018040430.jpg",
  },
  {
    gift: "https://in.bmscdn.com/vouchagram/combo/bms_and_speciality_restaurants_combo_20342018043406.jpg",
  },
  {
    gift: "https://in.bmscdn.com/vouchagram/combo/bms_and_vero_moda_combo_08352018123514.jpg",
  },
  {
    gift: "https://in.bmscdn.com/vouchagram/combo/bms_and_levis_combo_07132022031353.jpg",
  },
];

const GiftCards = () => {
  return (
    <Container>
    <div className='GiftCards'>
    <div className="f-picture">
      <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1692874595339_fdf.jpg" alt="" style={{width:"95%",margin:"25px"}} />
      <p className='gift-p1'>Pick a card from  one of our themes</p>
        <ul className="selectGift_list">
          <li>All</li>
          <li>Generic</li>
          <li>Occasion</li>
          <li>Festival</li>
          <li>Combo</li>
        </ul>
    </div>
    {/* <div> 
        {
          giftCards.filter(name => name.includes('festival')).map(mycard => (
          <li>
            {mycard}
          </li>
        ))
        }
     </div> */}
    <div className="gift_card">
      {
        giftCards.map((x, index)=>{
          return(<img src={x.gift} alt='' className='gift_image'/>
          )
        })
      }
      </div>
      
  </div>
  </Container>
  )
}

export default GiftCards
