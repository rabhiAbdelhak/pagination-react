import { useState } from "react";
import useFetch from "./Hooks/useFetch";
import Loading from "./Layouts/Loading";
import SingleUser from "./Layouts/SingleUser";

function App() {
  const [index, setIndex] = useState(0);
  const [ userPerPage, setUserPerPage ] = useState(10);
  const [loading, users] = useFetch(userPerPage);

  const checkIndex = (number) => {
    if (number < 0) return users.length - 1;
    if (number >= users.length) return 0;
    return number;
  };
  if (loading) return <Loading />;
  return (
    <div className="App">
      <div className="App_title">
        <h1>Pagination</h1>
        <div className="underline"></div>
      </div>
      <div className="actions">
        <form>
          <label htmlFor="upp" className="label">
            Show Per Page :
          </label>
          <select
            id="upp"
            value={userPerPage}
            onChange={(e) => setUserPerPage(parseInt(e.target.value))}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </form>
      </div>
      <section className="items">
        {users[index].map((user) => {
          return <SingleUser key={user.id} {...user} />;
        })}
      </section>
      <section className="btns-container">
        <button
          className="move-btn next"
          onClick={() => setIndex(checkIndex(index - 1))}
        >
          Previous
        </button>
        {users.map((page, ind) => {
          return (
            <button
              key={ind}
              className={`page-btn ${ind === index ? "active" : ""}`}
              onClick={() => setIndex(ind)}
            >
              {ind + 1}
            </button>
          );
        })}
        <button
          className="move-btn next"
          onClick={() => setIndex(checkIndex(index + 1))}
        >
          Next
        </button>
      </section>
    </div>
  );
}

export default App;
