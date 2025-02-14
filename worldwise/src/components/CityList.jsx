import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";

function CityList({ cities, isLoading }) {
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <ul className={styles.CityList}>
      {cities.map((city, index) => {
        return <li key={index}>{<CityItem city={city} key={city.id} />}</li>;
      })}
    </ul>
  );
}

export default CityList;
