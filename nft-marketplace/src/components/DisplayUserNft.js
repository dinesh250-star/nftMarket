import { useState } from "react";
import Filtered from "./Content/Filtered";
const DisplayUserNft = () => {
  const [hashValue, setHashValue] = useState("");
  const hashValueHandler = (e) => {
    setHashValue(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const search = (e) => {
    e.preventDefault();
    window.open(`https://ipfs.io/ipfs/${hashValue}`, "_blank");
    setHashValue("");
  };
  const nft = (e) => {
    setHashValue(e.target.value);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="hi">
          <input
            type="text"
            placeholder="Enter hash or id"
            value={hashValue}
            onChange={hashValueHandler}
          />
          <button
            type="submit"
            className="btn btn-outline-danger"
            onClick={search}
          >
            Search ipfs
          </button>
        </div>
      </form>
      <Filtered id={hashValue} />
    </div>
  );
};
export default DisplayUserNft;
