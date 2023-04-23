import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]); //State

  useEffect(() => {
    //fungsi untuk nampilin data di awal

    axios
      .get("https://61601920faa03600179fb8d2.mockapi.io/pegawai")
      .then((response) => {
        setUsers(response.data);
        console.log(response.data);
      });
  }, []);


  // DELETE

  const deletedata = async (id) => {
    let deleteItem = await window.confirm("Hapus produk ini ?");
    if (deleteItem){
      axios
        .delete(`https://61601920faa03600179fb8d2.mockapi.io/pegawai/${id}`, )
        .then(() => {
          alert("Produk berhasil dihapus")
          window.location.reload();
        })
        .catch((error) => console.log(error));
    }
  }
  



  return (
    <div className="container">

    <Link to="/Create">
    <button className="btn btn-primary my-3">Create +</button>
    </Link>


      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nama</th>
            <th scope="col">Jalan</th>
            <th scope="col">Provinsi</th>   
            <th scope="col">Kota/Kabupaten</th>
            <th scope="col">Kecamatan</th>
            <th scope="col">Kelurahan</th>
            <th scope="col">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id ? user.id : ""}</td>
              <td>{user.nama ? user.nama : ""}</td>
              <td>{user.jalan ? user.jalan : ""}</td>
              <td>{user.provinsi ? user.provinsi : ""}</td>
              <td>{user.kabupaten ? user.kabupaten : ""}</td>
              <td>{user.kecamatan ? user.kecamatan : ""}</td>
              <td>{user.kelurahan ? user.kelurahan : ""}</td>
              <td>

                <Link to={`/Edit/${user.id}`}>
                <button className="btn btn-sm btn-primary ms-2">Edit</button>
                </Link>

               
                <button className="btn btn-sm btn-danger ms-2" onClick={() => deletedata(user.id)}>Delete</button>
            

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
