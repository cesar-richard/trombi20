import React from "react";
import constants from "../../constants";
import { FileManager, FileUploader } from "reactjs-file-uploader";

export default function FileUpload() {
  const [files, setFiles] = React.useState([]);
  const uploadFile = file => {
    return (
      <FileUploader
        key={file.key}
        file={file}
        url={constants.uploadUrl}
        formData={{
          file,
          upload_preset: "trombi47",
          tags: "trombi47"
        }}
        autoUpload
        readFile
      >
        {fileProgress}
      </FileUploader>
    );
  };
  const uploadFiles = files => {
    return files.map(uploadFile);
  };

  const fileProgress = ({
    /*
        References to the Event objects.
        Initial state is null and each propert gets assigned on Event.
         */
    uploadReady,
    uploadStart,
    uploadProgress,
    uploadComplete,
    downloadStart,
    downloadProgress,
    downloadComplete,
    error,
    abort,
    timeout,

    /*
        The sequential state of the request
        enum {
            uploadReady, uploadStart, uploadProgress, uploadComplete, downloadStart
            downloadStart, downloadProgress, downloadComplete
        }
         */
    requestState,

    /*
        Function references to start / abort request
          */
    startUpload,
    abortRequest,

    /*
        Request Object reference (XMLHttpReqeust)
         */
    request,

    /*
        Response text Object (JSON)
         */
    response,

    /*
        Data of the file being uploaded (if readData props is true)
         */
    fileData
  }) => {
    return (
      <div>
        {fileData && <img src={fileData} width={200} alt="Preview" />}
        {startUpload && <button onClick={startUpload}>Upload File</button>}
        {requestState && requestState}
      </div>
    );
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={event =>
          setFiles(files.concat(Array.from(event.target.files)))
        }
        multiple
      />
      <FileManager files={files}>{uploadFiles}</FileManager>
    </div>
  );
}
