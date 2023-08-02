import React from "react";

function RenderingArrayOfObjects() {
  const data = [
    {
      Name: "Nikita",
      surname: "Mkhize",
      date_of_birth: "1987/09/23",
      address: "134 Red street, Soweto, Johannesburg,1874",
      country: "ZAR",
      email: "nikita@gmail.com",
      telephone: "076-234-8765",
      profile_picture: "https://example.com/images/john.jpg"
    },
    {
      Name: "Mpho",
      surname: "Mbombo",
      date_of_birth: "1982/01/20",
      address: "134 Blue street, Thembisa, Johannesburg,1874",
      country: "ZAR",
      email: "mpho@gmail.com",
      telephone: "083-241-7465",
      profile_picture: "https://example.com/images/john.jpg"
    },
    {
      Name: "Eon",
      surname: "Mbatha",
      date_of_birth: "1997/05/03",
      address: "134 White street, Soweto, Johannesburg,1874",
      country: "ZAR",
      email: "eon@gmail.com",
      telephone: "071-009-6575",
      profile_picture: "https://example.com/images/john.jpg"
    },
    {
      Name: "Joe",
      surname: "Mbele",
      date_of_birth: "1988/11/17",
      address: "2334 Black street, Soweto, Johannesburg,1874",
      country: "ZAR",
      email: "joe@gmail.com",
      telephone: "081-476-0985",
      profile_picture: "https://example.com/images/john.jpg"
    },
    {
      Name: "Thukzen",
      surname: "Zulu",
      date_of_birth: "1999/15/13",
      address: "1355 Grean street, Orange Farm, Johannesburg,1874",
      country: "ZAR",
      email: "thukzen@gmail.com",
      telephone: "074-254-8005",
      profile_picture: "https://example.com/images/john.jpg"
    }
  ];
  const tableRows = data.map((element) => {
    return (
      <tr>
        <td>{element.Name}</td>
        <td>{element.surname}</td>
        <td>{element.date_of_birth}</td>
        <td>{element.address}</td>
        <td>{element.country}</td>
        <td>{element.email}</td>
        <td>{element.telephone}</td>
        <td>{element.company}</td>
        <td>{element.profile_picture}</td>
      </tr>
    );
  });
  return (
    <div>
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Date of birth</th>
          <th>Address</th>
          <th>Country</th>
          <th>Email</th>
          <th>Telephone</th>
          <th>company</th>
          <th>Profile Picture</th>
        </tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <div>
        <h1 style={{ color: "green" }}>Shopping Cart</h1>
        <h3>User Details</h3>

        <br></br>
        <RenderingArrayOfObjects />
      </div>
    </div>
  );
}

export default App;