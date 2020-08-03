import React from "react";
import './style.css'
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

const TeacherItem = () => {
    return (
        <article className="teacher-item">
            <header>
                <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80"
                    alt="Roberta Mendes"
                />
                <div>
                    <strong>Roberta Mendes</strong>
                    <span>Laravel</span>
                </div>
            </header>

            <p>
                texto sobre a pessoa que é bem grande
                <br/>
                texto sobre a pessoa que é bem grandetexto sobre a pessoa que é bem grandetexto sobre a pessoa que é bem grande
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 350,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Entrar em contato"/>
                    Entrar em Contato
                </button>
            </footer>
        </article>
    );
}


export default TeacherItem;
