import React, { useState } from "react";

const Model = (props) => {
  const [updateItem, setUpdateItem] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  
  const updateItemHandler = () => {
    props.updateItem(updateItem);
  };
  return (
    <div>
      <div
        className="modal modal-sheet d-block bg-secondary py-5"
        tabIndex="-1"
        role="dialog"
        id="modalSheet"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content rounded-6 shadow">
            <div className="modal-header border-bottom-0">
              <button
                onClick={props.showModels}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body py-0">
              <form onSubmit={updateItemHandler}>
                <div className="form">
                  <div className="mb-3">
                    <h6 for="exampleFormControlInput1" className="form-label">
                      Update the Task :
                    </h6>
                    <input
                      value={updateItem}
                      onChange={(e) => setUpdateItem(e.target.value)}
                      type="text"
                      className="form-control"
                    />
                    <button type="submit" className="btn btn-primary">
                      Update
                    </button>
                  </div>
                  {success && <p className="success">{success}</p>}
                  {error && <p className="error">{error}</p>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
