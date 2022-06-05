import React from "react";
import { Button, InputLabel, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Forget = () => {
  const Navigate = useNavigate();
  return (
    <>
      <main className="Login min-h-[80vh] sm:min-h-[85vh] relative">
        <div className="  mb-10  flex flex-col items-center justify-around rounded-sm">
          <h3 className="text-4xl  text-[#1976d2]">Forget Password</h3>
          <form className=" flex flex-col items-center gap-3 mt-10 ">
            <div>
              <InputLabel htmlFor={"text"} required>
                Email Id or Phone Number
              </InputLabel>
              <TextField
                autoFocus={true}
                type={"text"}
                id={"text"}
                required
                size={"small"}
              />
            </div>
            <div className=" self-center flex flex-col items-center justify-center mb-5">
              <Button variant="contained" type={"submit"} className="btn1 bg-violet-400 mt-2 ">
                Send
              </Button>
              <span>OR</span>
              <h3
                className="font-semibold text-[#1976d2] cursor-pointer"
                onClick={() => Navigate("/login")}
              >
                Login ?
              </h3>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Forget;