import "./HomeStyles.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Model from "./Model";
const Home = (props) => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [showModel, setShowModel] = useState(false);

  const showModelHandler = () => {
    setShowModel(!showModel);
  };
  const addNewItem = async (event) => {
    event.preventDefault();
    try {
      if (!newItem) {
        setError("Add something!");
      }
      const result = await axios.post("/item/new", { newItem: newItem });
      if (result.data.success) {
        setSuccess(result.data.success);
        setError("");
      }
      if (result.data.error) {
        setError(result.data.error);
        setSuccess("");
      }
    } catch (error) {
      console.log(error.message);
    }
    setNewItem("");
  };
  const deleteItem = async (item) => {
    try {
      const result = await axios.delete(`/item/delete/${item._id}`);
      if (result.data.success) {
        setSuccess(result.data.success);
        setError("");
      }
      if (result.data.error) {
        setError(result.data.error);
        setSuccess("");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const updateItem = async (item, newItems) => {
    try {
      const result = await axios.delete(`/item/update/${item._id}`, {
        name: props.newItems,
      });
      if (result.data.success) {
        setSuccess(result.data.success);
        setError("");
      }
      if (result.data.error) {
        setError(result.data.error);
        setSuccess("");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    const getAllItems = async () => {
      try {
        const result = await axios.get("/item/get");
        setItems(result.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getAllItems();
  }, [success]);

  setTimeout(() => {
    setError("");
    setSuccess("");
  }, 10000);
  console.log(props.data);
  var myDate = new Date();
  var hrs = myDate.getHours();
  var greet;
  if (hrs < 12) greet = "Good Morning";
  else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon";
  else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";
  return (
    <section className="box">
      {showModel && (
        <Model showModels={showModelHandler} updateItem={updateItem} />
      )}
      <form onSubmit={addNewItem}>
        <div className="form">
          <h1>
            {greet}, <span>Mike!</span>
          </h1>
          <p className="date">{new Date().toDateString()}</p>
          <div className="mb-3">
            <h6 htmlFor="exampleFormControlInput1" className="form-label">
              Add the Task :
            </h6>
            {success && <p className="success">{success}</p>}
            {error && <p className="error">{error}</p>}
            <input
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              type="text"
              className="form-control"
            />
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </form>
      <div className="form">
        <h3>Yours Tasks Today :</h3>
        <ul class="list-group list-group-flush ms-auto">
          {items.length === 0 && (
            <div className="flex-div list-group-item">
              <div>
                <li>No Items To display, Add new!</li>
              </div>
              <div className="ms-auto"></div>
            </div>
          )}
          {items.map((item) => (
            <div key={item._id} className="flex-div list-group-item">
              <div>
                <li>{item.name}</li>
              </div>
              <div className="ms-auto">
                <form className="formNew" action="" onClick={showModelHandler}>
                  <i
                    onClick={() => updateItem(item)}
                    className="fas fa-edit icon ms-auto"
                  ></i>
                </form>
                <div onClick={() => deleteItem(item)} className="formNew">
                  <i className="fas fa-trash-alt icon"></i>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Home;
