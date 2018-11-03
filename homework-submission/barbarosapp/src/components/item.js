import React from "react";
import CheckBox from "./checkBox";

class Item extends React.Component {
  render() {
    const { name, deadLine, handleCheck, done, id } = this.props;

    return (
      <section className="ToDos">
        <div className="CheckBoxDiv">
          <CheckBox handleCheck={handleCheck} id={id} done={done} />
        </div>

        <div className="Info">
          <p>
            Name : <span className="Color1"> {name} </span>
          </p>
          <p>
            Deadline : <span className="Color2"> {deadLine} </span>
          </p>
        </div>

        <div className="removeButtonDiv">
          <button
            onClick={item => this.handleRemove(item.id)}
            className="removeButton"
          >
            Remove
          </button>
        </div>
      </section>
    );
  }
}

export default Item;
