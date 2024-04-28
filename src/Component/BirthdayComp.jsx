import React from "react";
import { useState } from "react";

export default function BirthdayComp() {
  const [isshow, setishow] = useState(false);
  const [data, setdata] = useState([
    {
      id: 1,
      name: "Bertie Yates",
      age: 29,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
    },
    {
      id: 2,
      name: "Hester Hogan",
      age: 32,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
    },
    {
      id: 3,
      name: "Larry Little",
      age: 36,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    },
    {
      id: 4,
      name: "Sean Walsh",
      age: 34,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    },
    {
      id: 5,
      name: "Lola Gardner",
      age: 29,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    },
    {
      id: 5,
      name: "Lola Gardner",
      age: 29,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    },
  ]);

  const handleremove = () => {
    setdata([]);
    setishow(true);
  };
  return (
    <div>
      <h1>{data.length} birthday today</h1>
      {data.map((da) => (
        <div>
          <img height={"100"} width={"100"} src={da.image} />
          <h1>{da.name}</h1>
          <p>{da.age}years ago</p>
        </div>
      ))}

      <h1>{isshow ? "No birthday FOUND " : ""}</h1>
      <button onClick={handleremove}>Clear All</button>
    </div>
  );
}
