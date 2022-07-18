import { useState } from "react";
import "./styles.css";

export default function App() {
  const [image, setImage] = useState();

  function teste(event) {
    setImage(event.target.files[0]);
  }

  function renderInfos() {
    function imageSize(size) {
      if(size < 1024) {
        return size + 'bytes';
      } else if(size >= 1024 && size < 1048576) {
        return (size/1024).toFixed(1) + 'KB';
      } else if(size >= 1048576) {
        return (size/1048576).toFixed(1) + 'MB';
      }
    }

    return(
      <div className="card-image">
        <div className="img-description">
          <span>{`Nome: ${image.name}`}</span>
          <span>{`Tamanho: ${imageSize(image.size)}`}</span>
        </div>
        <img src={URL.createObjectURL(image)} alt={image.name} />
      </div> 
    );
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Enviou!");
  }

  return (
    <div className="App">
      <h1>Sobe Aí</h1>
      <div className="viewer">
        {image?
          renderInfos()
          : 
          <p className="no-image">{"Nenhuma imagem inserida ainda :("}</p>         
        }
      </div>
      <form onSubmit={handleSubmit}>
        <div className="botoes">
          <label htmlFor="upload_image">Selecione a imagem</label>
          {image? <button type="submit">Enviar</button> : ''}
        </div>
        <input
          type="file"
          id="upload_image"
          name="upload_image"
          accept="image/png, image/jpeg, image/svg"
          onChange={(event) => teste(event)}
        />
      </form>
    </div>
  );
}
