import "./list.scss"
import { ArrowForwardIosOutlined, ArrowBackIosOutlined } from "@material-ui/icons"
import ListItem from "../listItem/ListItem"
import { useState, useRef } from "react"

export default function List() {
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef(); // used to reference the "container" div below, must add ref={listRef} to the target DOM element

    const handleClick = (direction) => { // handles the style of the "container" div
        // always reference the listRef's current
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50 // getBoundingClientRect is used to obtain the position and size information (bounding rectangle) of a specific DOM element
        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${distance + 230}px)`;
        }
        if (direction === "right" && slideNumber < 5) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${distance - 230}px)`;
        }
    }

  return (
    <div className="list">
        <span className="listTitle">Continue to watch</span>
        <div className="wrapper">
            <ArrowBackIosOutlined 
                className="sliderArrow left" 
                onClick={() => handleClick("left")}
                style={{display: !isMoved && "none"}}
            />
            <div className="container" ref={listRef}>
                <ListItem index={0}/>
                <ListItem index={1}/>
                <ListItem index={2}/>
                <ListItem index={3}/>
                <ListItem index={4}/>
                <ListItem index={5}/>
                <ListItem index={6}/>
                <ListItem index={7}/>
                <ListItem index={8}/>
                <ListItem index={9}/>
            </div>
            <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handleClick("right")}/>
        </div>
    </div>
  )
}
