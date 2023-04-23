import axios from "axios";
import React, { useState } from "react";

function Create() {

const [data, setData] = useState({}); //State


//untuk record data sementara yang dimasukin ke state
const handleChange = (e) => {                         
  const {name, type, value} = e.target;
  setData((a) => {
    return type === "number"
    ? { ...a, [name]: Number(value)}
    : { ...a, [name] : value}
  })
};


// data yang udh di masukkin di submit ke axios
  const handleSubmit = (e) => {
    e.preventDefault();
    const { nama , jalan, provinsi, kabupaten, kecamatan, kelurahan } = data;
    axios
    .post(`https://61601920faa03600179fb8d2.mockapi.io/pegawai`, {
      nama,
     jalan,
      provinsi,
     kabupaten,
     kecamatan,
     kelurahan
    })
    .then((res) => {
      console.log(res)
      alert("Berhasil di Update");
      window.location.reload();
    })
    .catch((error) => {
      console.log(error)
      alert("Berhasil di Update");
      window.location.reload();
    })
  }







  return (
    <div className="container">
      <form onSubmit = {handleSubmit}>
        <div className="mb-3">
          <label for="nama" className="form-label">
            nama
          </label>
          <input
            name="nama"
        
            onChange={handleChange} 
            type="text"
            className="form-control"
            aria-describedby="nama"
          />
        </div>

        <div className="mb-3">
          <label for="jalan" className="form-label">
            Jalan
          </label>
          <input
            name="jalan"
     
            onChange={handleChange} 
            type="text"
            className="form-control"
            aria-describedby="Jalan"
          />
        </div>

        <div className="mb-3">
          <label for="provinsi" className="form-label">
            Provinsi
          </label>
          <input
            name="provinsi"
         
            onChange={handleChange} 
            type="text"
            className="form-control"
            aria-describedby="provinsi"
          />
        </div>

        <div className="mb-3">
          <label for="kabupaten" className="form-label">
            Kota/Kabupaten
          </label>
          <input
            name="kabupaten"
         
            onChange={handleChange} 
            type="text"
            className="form-control"
            aria-describedby="kabupaten"
          />
        </div>

        <div className="mb-3">
          <label for="kecamatan" className="form-label">
            Kecamatan
          </label>
          <input
            name="kecamatan"
         
            onChange={handleChange} 
            type="text"
            className="form-control"
            aria-describedby="kecamatan"
          />
        </div>

        <div className="mb-3">
          <label for="kelurahan" className="form-label">
            Kelurahan
          </label>
          <input
            name="kelurahan"
          
            onChange={handleChange} 
            type="text"
            className="form-control"
            aria-describedby="kelurahan"
          />
        </div>

        <button type="submit" className="btn btn-primary" >
          Submit
        </button>
      </form>
    </div>
  );
}


export default Create;
