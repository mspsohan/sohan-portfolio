
import { useState } from "react";
import { imageUpload } from "../../api/utils";

const Test = () => {
   const [image, setImage] = useState("")
   const [url, setUrl] = useState("")
   const handleUpload = async () => {
      const data = await imageUpload(image)
      setUrl(data?.url)
   }
   return (
      <>
         <div className="h-[100vh] flex justify-center items-center bg-black">
            <div className="flex flex-col items-center pt-20">
               <div>
                  <input onChange={(e) => setImage(e.target.files[0])} type="file" name="image" id="" className="bg-white rounded p-1 mr-5" />
                  <button onClick={handleUpload} className="bg-white p-2 rounded">Upload</button>
               </div>
               <img src={url} alt="" />
            </div>
         </div>
      </>
   );
};

export default Test;