import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import Input from "@mui/material/Input";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import { createStyles, makeStyles } from "@mui/styles";
const useInputStyles = makeStyles(() => ({
  root: {
    paddingBottom: 0,
  },
  input: {
    paddingTop: 29,
    paddingBottom: 8,
  },
}));

const Home = () => {
  const [name, setName] = useState("Name");
  const [email, setemail] = useState("email");
  const [age, setage] = useState(67);
  const [address, setaddress] = useState("#address");
  const [phoneno, setPhoneno] = useState("Name");
  const [ahdar, setadhar] = useState("Name");
  const [sign, setsign] = useState("Name");
  const [certificates, setcertificates] = useState("");
  const inputStyles = useInputStyles();

  useEffect(()=>{
    if(certificates.length < 1){
      alert("Please sunmit the  CERTIFICATE");
      console.log("clicked")
    }
  },[certificates])
  

  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <>
      <div className=" d-flex flex-column p-5 justify-content-around">
        <TextField
          id="outlined-name"
          label="Name:"
          value={name}
          onChange={handleChange}
          className="m-3"
        />
        <TextField
          id="outlined-name"
          label="Age:"
          value={age}
          onChange={handleChange}
          className="m-3"
        />
        <TextField
          id="outlined-name"
          label="Email:"
          value={email}
          onChange={handleChange}
          className="m-3"
        />

        <TextField
          id="outlined-name"
          label="Address:"
          value={address}
          onChange={handleChange}
          className="m-3"
        />
        <TextField
          id="outlined-name"
          label="Phone No:"
          value={phoneno}
          onChange={handleChange}
          className="m-3"
        />
        <div className="d-flex justify-content-between">
          <div className="px-2">
            <InputLabel htmlFor="Adhar" variant="">
              Aadhar card photo
            </InputLabel>
            <OutlinedInput
              type="file"
              id="Adhar"
              // value={ahdar}
              classes={inputStyles}
              onChange={(e) => setadhar(e.target.value)}
            />
          </div>
          <div className="px-2">
            <InputLabel htmlFor="sign" variant="">
              Sign photo
            </InputLabel>
            <OutlinedInput
              type="file"
              id="sign"
              // value={ahdar}
              classes={inputStyles}
              onChange={(e) => setsign(e.target.value)}
            />
          </div>
          <div className="px-2">
            <InputLabel htmlFor="certificate" variant="">
              Certificate
            </InputLabel>
            <OutlinedInput
              type="file"
              id="certificate"
              // value={ahdar}
              classes={inputStyles}
              onChange={(e) => setcertificates(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
