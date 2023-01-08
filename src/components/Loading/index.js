import React from 'react';
import './loading.css'
import { CircularProgress} from "@mui/material";


export default function Loading() {
  return (
      <div className="Loader__container">
      <CircularProgress />
          </div>
  );
}