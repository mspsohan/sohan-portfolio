import axios from "axios"

export const imageUpload = async (image) => {
   const preset_key = "qhxhdogr";
   const cloud_name = "dztfe8thu";
   const formData = new FormData()
   formData.append('file', image)
   formData.append('upload_preset', preset_key)
   const { data } = await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData)
   return data
}