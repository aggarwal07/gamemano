"use client";
import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Modal from "@mui/material/Modal";
import { useSelector } from "react-redux";
const Loader = (props) => {
  const reduxLoadingState = useSelector((state) => state.globalState.isLoading);
  const isLoading = props.loading ? props.loading : reduxLoadingState;
  return (
    <Modal
      open={isLoading}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <React.Fragment>
        <ClipLoader color={"#f48120"} loading={isLoading} size={80} />
        {/* <img
          src=""
          width="30px"
          height="18px"
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            marginBottom: 0,
          }}
        /> */}
      </React.Fragment>
    </Modal>
  );
};

export default Loader;
