import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

function Edit() {
  const [data, setData] = useState({}); //State

  const { id } = useParams(); // nyesuiaikan sama titik dua router

  useEffect(() => {
    //fungsi untuk nampilin data di awal

    axios
      .get(`https://61601920faa03600179fb8d2.mockapi.io/pegawai/${id}`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      });
  }, []);

  //untuk record data sementara yang dimasukin ke state
  const handleChange = (e) => {
    const { name, type, value } = e.target;
    setData((a) => {
      return type === "number"
        ? { ...a, [name]: Number(value) }
        : { ...a, [name]: value };
    });
  };

  // data yang udh di masukkin di submit ke axios
  const handleSubmit = (e) => {
    e.preventDefault();
    const { nama, jalan, provinsi, kabupaten, kecamatan, kelurahan } = data;
    axios
      .put(`https://61601920faa03600179fb8d2.mockapi.io/pegawai/${id}`, {
        nama,
        jalan,
        provinsi,
        kabupaten,
        kecamatan,
        kelurahan,
      })
      .then((res) => {
        console.log(res);
        alert("Berhasil di Update");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        alert("Berhasil di Update");
        window.location.reload();
      });
  };

  //DATA AUTO COMPLATE

  //  const autocomplate = (provinsi) => {
  //     const  setData= {provinsi}

  const [provinsi, setProvinsi] = useState([]);
  const [namaprovinsi, setNamaprovinsi] = useState([]);

  useEffect(() => {
    //fungsi untuk nampilin data di awal

    const getProvinsi = () => {
      const provinsiCoba = sessionStorage.getItem("namaProvinsi");
      const provinsibaru = provinsiCoba.map((nama) => nama.nama);
      setNamaprovinsi(provinsibaru);
      console.log(provinsibaru);
    };

    axios
      .get(`https://dev.farizdotid.com/api/daerahindonesia/provinsi`)
      .then((response) => {
        setProvinsi(response.data.provinsi);
        console.log(response.data.provinsi);
        sessionStorage.setItem("namaProvinsi", provinsi);
      })

      .then(() => {
        getProvinsi();
        // provinsi.forEach((item) => {
        //   setNamaprovinsi(namaprovinsi => ([...namaprovinsi, item.nama])
        // )})
      });
  }, []);
  // console.log(namaprovinsi);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nama" className="form-label">
            nama
          </label>
          <input
            name="nama"
            value={data.nama ? data.nama : ""}
            onChange={handleChange}
            type="text"
            className="form-control"
            aria-describedby="nama"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="jalan" className="form-label">
            Jalan
          </label>
          <input
            name="jalan"
            value={data.jalan ? data.jalan : ""}
            onChange={handleChange}
            type="text"
            className="form-control"
            aria-describedby="Jalan"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="provinsi" className="form-label">
            Provinsi
          </label>

          <Autocomplete
            disablePortal
            id="provinsi"
            options={namaprovinsi}
            // sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="provinsi" />}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="kabupaten" className="form-label">
            Kota/Kabupaten
          </label>
          <input
            name="kabupaten"
            value={data.kabupaten ? data.kabupaten : ""}
            onChange={handleChange}
            type="text"
            className="form-control"
            aria-describedby="kabupaten"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="kecamatan" className="form-label">
            Kecamatan
          </label>
          <input
            name="kecamatan"
            value={data.kecamatan ? data.kecamatan : ""}
            onChange={handleChange}
            type="text"
            className="form-control"
            aria-describedby="kecamatan"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="kelurahan" className="form-label">
            Kelurahan
          </label>
          <input
            name="kelurahan"
            value={data.kelurahan ? data.kelurahan : ""}
            onChange={handleChange}
            type="text"
            className="form-control"
            aria-describedby="kelurahan"
          />
        </div>

        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select your currency"
        >
          {provinsi.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Edit;
