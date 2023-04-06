import React from 'react'
import {FaStar} from 'react-icons/fa';

const colors = {
  orange: "#ffba5a",
  grey: "#a9a9a9"
}

const StarRating = () => {

  const stars =Array(5).fill(0);
  const [currentVal, setCurrentVal]=React.useState(0);
  const [hoverVal,setHoverVal]=React.useState(undefined);

  const handleClick = value =>{
    setCurrentVal(value)
  };

  const handleMouseOver = value =>{
    setHoverVal(value)
  }

  const handleMouseLeave = () =>{
    setHoverVal(undefined)
  }

  return(
    <div style={styles.container}>
      <div>
        {stars.map((_, index) => {
          return (
            <FaStar 
              key={index}
              size={25}
              style={{
                marginRight:10,
                cursor:"pointer",
                marginTop:10,
                marginBottom:10
              }}
              color={(hoverVal || currentVal) > index ? colors.orange : colors.grey}
              onClick={()=>handleClick(index+1)}
              onMouseOver={()=> handleMouseOver(index+1)}
              onMouseLeave={handleMouseLeave}
            />
          )
        })}
      </div>
    </div>
  )
};

const styles={
  container: {
    display:"flex",
    flexDirection:"column",
    alignItem: "right",
    marginLeft:"40px"
  }
}

export default StarRating;