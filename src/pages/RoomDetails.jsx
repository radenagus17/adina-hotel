import React, {useContext} from "react";
import {RoomContext} from "../context/RoomContext"
import {useParams} from "react-router-dom"
// components
import AdultsDropdown from '../components/AdultsDropdown'
import CheckIn from '../components/CheckIn'
import CheckOut from '../components/CheckOut'
import KidsDropdown from '../components/KidsDropdown'
// icons
import {FaCheck} from 'react-icons/fa'



const RoomDetails = () => {
  const {rooms} = useContext(RoomContext)
  const {id} = useParams()
  // get room
  const room = rooms.find((room)=>room.id === +id)
  // destructure room
  const {name, description, facilities, imageLg, price} = room
  return <section className="bg-pink-200">
    <img src={imageLg} alt="" />
  </section>;
};

export default RoomDetails;
