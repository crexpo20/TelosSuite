import React ,{useState}from 'react';
import { Container, FormGroup, Input } from 'reactstrap';
const Subir = ({ onImageChange }) => {
    const [image, setimage] = useState("");
    const [loading, setLoading] = useState(false);

     const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file",files[0]);
        data.append("upload_preset","telosSuite2023");
        setLoading(true);
        const res = await fetch(
            "https://api.cloudinary.com/v1_1/dra6e6bat/image/upload",
            {
                method:"POST",
                body: data,
               
            }
        )
            const file= await res.json();
            console.log(file.secure_url)
            setimage(file.secure_url)
            setLoading(false)
            onImageChange(file.secure_url);
            
     }


    return(
     <div>
        <Container>
          <h1>IMG</h1>
          <FormGroup>
            <Input
             type='file'
             name='file'
             placeholder="sube tu imagen"
             onChange={uploadImage}
            />
           \ <img src={image} style={{width: "100px"}}/>
          </FormGroup>     
        </Container>
        
     </div>   
    )
}

export default Subir;

