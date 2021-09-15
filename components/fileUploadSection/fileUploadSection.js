import React from "react";
import { BsUpload } from "react-icons/bs";

export const UiFileInputButton = (props) => {
  const { handleGetImageName } = props;
  const fileInputRef = React.useRef();
  const formRef = React.useRef();

  const onClickHandler = () => {
    fileInputRef.current?.click();
  };

  const onChangeHandler = (event) => {
    if (!event.target.files?.length) {
      return;
    }

    handleGetImageName(event.target.files[0].name);

    const formData = new FormData();

    Array.from(event.target.files).forEach((file) => {
      formData.append(event.target.name, file);
    });

    props.onChange(formData);

    formRef.current?.reset();
  };

  return (
    <form ref={formRef}>
      <label
        onClick={onClickHandler}
        htmlFor="file"
        className="text-center d-block py-2 bg-white my-3 textColor cursor-poiter fontMedium"
      >
        <BsUpload className="me-2" /> Upload File{" "}
      </label>
      <input
        accept={props.acceptedFileTypes}
        multiple={props.allowMultipleFiles}
        name={props.uploadFileName}
        onChange={onChangeHandler}
        ref={fileInputRef}
        style={{ display: "none" }}
        type="file"
      />
    </form>
  );
};
