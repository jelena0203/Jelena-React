import React from "react";
import "./flat.css";

class Flat extends React.Component{
render (){
  const title = this.props.flat.price +
                this.props.flat.priceCurrency+" - "+
                this.props.flat.name;

  //let variable = this.props.flat.imageUrl.toString();

  const style = {
    //Template literals ES6
    backgroundImage: `url('${this.props.flat.imageUrl}')`
  };

  return (
    <div className = "flat">
      <div className = "flat-picture"
        style={style}>
      </div>
      <div className = "flat-title">
        {title}
      </div>
    </div>
  );
}
}

export default Flat;
