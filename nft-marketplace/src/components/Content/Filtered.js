import CollectionContext from "../../store/collection-context";
import { useContext } from "react";
const Filtered = (props) => {
  const collectionCtx = useContext(CollectionContext);
  const filteredData = () => {};
  return (
    <div>
      {collectionCtx.collection
        .filter((nft) => nft.owner == props.id)
        .map((nft) => (
          <ul className="di">
            <li>{nft.id}</li>
            <li>{nft.title}</li>
            <img src={`https://ipfs.infura.io/ipfs/${nft.img}`} />
            <li>{nft.owner}</li>
          </ul>
        ))}
    </div>
  );
};
export default Filtered;
