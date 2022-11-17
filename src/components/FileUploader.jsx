import Header from "./Header";
import React, { useState } from "react";
import axios from "axios";

const FileUploader = () => {

  const [File, setFile] = useState(null);
  const [error, setError] = useState("");
  const [fileName, setFileName] = useState("Drop files here");
  const [buttonStatus, setButtonStatus] = useState(false);

  const fileHandler = (e) =>{
    const selectedFile = e.target.files[0];
		setFile(selectedFile);
    setFileName(selectedFile.name)
  }

  

  const fileUpload = async (e) => {
    e.preventDefault();
		if (File) {
      console.log(File);
			var formData = new FormData();
			formData.append("file", File);

      try {
      await axios.post("/file/upload", formData);
      setButtonStatus(false);
      setFile(null);
      setFileName("Drop files here")
    } catch (err) {
      setError(err.response.data.message);
      setButtonStatus(false);
    }

    }
  }

  return (
    <div>
    <Header/>
      <div class="mx-auto w-full max-w-[550px] bg-white">
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <form
          class="py-6 px-9"
          action="https://formbold.com/s/FORM_ID"
          method="POST"
        >
          <div class="mb-6 pt-4">
            <label class="mb-5 block text-xl font-semibold text-[#07074D]">
              Upload File
            </label>

            <div class="mb-8">
              <input type="file" name="file" id="file" class="sr-only" onChange={fileHandler}/>
              <label
                for="file"
                class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
              >
                <div>
                  <span class="mb-2 block text-xl font-semibold text-[#07074D]">
                    {fileName}
                  </span>
                  <span class="mb-2 block text-base font-medium text-[#6B7280]">
                    Or
                  </span>
                  <span class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                    Browse
                  </span>
                </div>
              </label>
            </div>
          </div>

          <div>
            <button onClick={fileUpload} class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Send File
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FileUploader;
