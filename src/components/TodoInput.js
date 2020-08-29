import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book" />
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add a todo item"
              value={item}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className={ editItem ? "btn btn-block btn-success mt-3": "btn btn-block btn-primary mt-3" }
          >
            { editItem ? "edit item" : "add item"}
          </button>
        </form>
      </div>
    );
  }
}
//line 27 display button name as "add" if value of edit item is false. Otherwise show "edit".
//line 25 dispaly button color green if button name is "edit". Otherwise show button color blue.
//submit button pe hi edit button and add button made.