import axios from 'axios';
import React  from 'react'
import  {useState} from 'react'
import "./contacto.css"

function Contacto() {

    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const sendMessage = async (e) => {
        
        e.preventDefault();
        axios.post("/api/enviarContacto",
        {
            name:name,
            message:message
        } );

        console.log(name+"//"+message);
        setName("");
        setMessage("");
       
        
    }

    return (
        <div className="contact">
            <div className="contacto__title"><h1><center>Contacto</center></h1>
            </div>

            <div className="contact__form">
                <form>
                      <input value={name} onChange={(e)=>setName(e.target.value)}name="nombre" placeholder="nombre"/>
                      <textarea value={message} onChange={(e)=>setMessage(e.target.value)}placeholder="Escribe aquí tu mensaje..."></textarea>
                      <button onClick={sendMessage}>Envíar mensaje</button>
                    
                </form>
            </div>
            
        </div>
    )
}

export default Contacto
