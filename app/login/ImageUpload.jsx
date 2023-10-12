import { Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import React, { useCallback, useState } from "react";

export default function ImageUpload() {
  const [image, setImage] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const objectURL = URL.createObjectURL(file);
    setImage(objectURL);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop,
  });

  const dropzoneSize = "80px";
  const imageSize = "80px";

  return (
    <div>
      <Card
        style={{
          backgroundColor: "rgba(0, 0, 0, 0)",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          border: "3px solid #43ff64d9",
        }}
      >
        <CardContent>
          <div
            {...getRootProps()}
            style={{
              ...dropzoneStyles,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: dropzoneSize,
              height: dropzoneSize,
            }}
          >
            <input {...getInputProps()} />
            <div
              style={{ ...circleStyles, width: imageSize, height: imageSize }}
            >
              {image ? (
                <Image
                  src={image}
                  alt="Uploaded"
                  width={100}
                  height={100}
                  objectFit="cover"
                />
              ) : (
                <p style={{ fontSize: "8px", color: "white" }}>
                  Drag & drop an image here, or click to select one
                </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

const dropzoneStyles = {
  border: "2px dashed transparent",
  borderRadius: "50%",
  textAlign: "center",
  padding: "0px",
  cursor: "pointer",
  margin: "0 auto",
};

const circleStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  overflow: "hidden",
};
