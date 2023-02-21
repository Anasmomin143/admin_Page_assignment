import React, { useEffect, useState } from "react";
import axios from "axios";
export default function UserPage() {
  const [users, SetUsers] = useState([]);
  const getAllusers = async () => {
    return await axios.post("http://localhost:9000/users");
  };

  useEffect(() => {
    getAllusers().then(async (res) => {
      const result = await res.data;
      console.log(result)
      SetUsers(result)
    });
  }, []);

  return (
    <div>
      <center>
        <table>
          <tr>
            <th>name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
          {users.map((ele) => {
            return (
              <>
                <tr>
                  <td>{ele.name}</td>
                  <td>{ele.age}</td>
                  <td>{ele.email}</td>
                </tr>
              </>
            );
          })}
        </table>
      </center>
    </div>
  );
}
