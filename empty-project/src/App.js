import { useState, useEffect } from "react";
import "./App.css";
import Users from "./componets/Users";

function App() {
  // const marks = [60, 55, 44, 22, 79, 70];
  // let result = marks.reduce(
  //   (accumulatedValue, mark) => mark + accumulatedValue,
  //   0
  // );

  // const userDetails = {
  //   name: "Jone Due",
  //   email: "jone@gmail.com",
  //   address: {
  //     address_line: "Urban Bulding",
  //     postcode: "SW1W 0NY",
  //     city: "London",
  //     country: "United Kingdom",
  //   },
  // };

  // const {
  //   email,
  //   address: { city },
  // } = userDetails;

  // console.log(result, email, city);

  // const person1 = {
  //   name: "rohit",
  //   address: {
  //     city: "mumbai",
  //     state: "maharashtra",
  //   },
  // };

  // const person2 = { ...person1 };
  // const person3 = person1;

  // const person2 = Object.assign({}, person1);

  // person2.name = "kohli";
  // person2.address.city = "bangalore";
  // person1.address.city = "delhi";

  // console.log(person1.address.city, person2.address.city);

  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("https://reqres.in/api/users");
      const data = await response.json();
      console.log(data);
      setUsersData(data.data);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Users usersData={usersData} />
    // <div className="container">
    //   <div className="top-left box"></div>
    //   <div className="top-right box"></div>
    //   <div className="bottom-left box"></div>
    //   <div className="bottom-right box"></div>
    // </div>
  );
}

export default App;
