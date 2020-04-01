import * as React from "react";
import { Link } from "react-router-dom";
import { useRecipe } from "./state";

export const Recipe = () => {
    const input = React.useRef<HTMLInputElement>(null);

    const [image, setImage] = React.useState("");

    const { setRecipe } = useRecipe();

    function checkFile() {
        if (!input || !input?.current?.files || input?.current?.files?.length < 1) return;
    
        const reader = new FileReader();
        reader.readAsDataURL(input.current.files[0]);
        reader.onloadend = () => {
          const base64data = reader.result as string;
          setRecipe(base64data);
          setImage(base64data);
          console.log(base64data);
        };
      }
    return (<div>
        <h4 onClick={() => input.current?.click()}>Foto hochladen</h4>
        {image && <>
            <img src={image} style={{ width: "90%", height: "auto" }} />
            <Link to="/delivery">
                <h4>Liefern</h4>
            </Link>
        </>}
        <input ref={input} accept="image/*" capture="environment" id="file-upload" style={{ display: 'none' }} type="file" onChange={checkFile} />
    </div>
    );
}