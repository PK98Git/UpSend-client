import Header from "./Header";
import React, { useState } from "react";
import axios from "axios";
import CTAImage from './../assets/file.jpg';

const FileUploader = () => {

  const [File, setFile] = useState(null);
  const [error, setError] = useState("");
  const [fileName, setFileName] = useState("Click here to browse files");
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
            <label class="sm:text-4xl text-3xl mb-4 font-bold max-w-[500px] text-[#24695C]">
                 Upload Files & Documents
            </label>

            <div class="mb-8">
            <br/><input type="file" name="file" id="file" class="sr-only focus:border-[#24695C] focus:shadow-md" onChange={fileHandler}/>
              <label
                for="file"
                class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
              >
                <div>
                  <span class="mb-2 block text-xl font-semibold text-[#07074D]">
                    {fileName}
                  </span>
                  <span class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                    Browse
                  </span>
                </div>
              </label>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded transform -scale-x-100" alt="hero" src={CTAImage} />
          </div>
          </div>

          <div>
            <button onClick={fileUpload} class="hover:shadow-form w-full rounded-md bg-[#24695C] py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Submit File
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FileUploader;
