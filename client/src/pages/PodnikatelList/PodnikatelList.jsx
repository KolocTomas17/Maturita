import { Link } from "react-router-dom";
import PodnikatelLink from "./PodnikatelLink";
import { useState, useEffect } from "react";
import { getAllPodnikatels } from "../../models/Podnikatel";
import "./PodnikatelList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function PodnikatelList() {
  const [podnikatels, setPodnikatels] = useState();
  const [loaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllPodnikatels();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setPodnikatels(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (load === null) {
    return (
      <>
        <p>Podnikatels not found</p>
      </>
    );
  }
  if (!loaded) {
    return (
      <>
        <p>Podnikatels are loading...</p>
      </>
    );
  }

  return (
    <>
      <div className="podnikatel-title-container">
        <h1 className="title is-1">Podnikatel list form</h1>
      </div>
      <div className="PodnikatelListContainer is-flex-wrap-wrap ">
        {podnikatels.map((podnikatel, index) => (
          <PodnikatelLink
            className="podnikatel-container"
            key={index}
            name={podnikatel.name}
            id={podnikatel._id}
          />
        ))}
      </div>
      <Link to={"/"} className="podnikatelIcon">
        <FontAwesomeIcon icon={faArrowLeft} size="2x" color="black" />
      </Link>
    </>
  );
}
