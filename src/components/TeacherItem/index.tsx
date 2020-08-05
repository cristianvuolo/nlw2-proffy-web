import React from "react";
import './style.css'
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import api from "../../services/api";

export interface TeacherInterface {
    name: string;
    subject: string;
    avatar: string;
    cost: string;
    bio: string;
    id: string;
    whatsapp: string;
}

interface TeacherItemsInterface {
    teacher: TeacherInterface
}

const TeacherItem: React.FC<TeacherItemsInterface> = ({teacher}) => {

    function handleWhatsappClick() {
        api.post('/connections', {
            user_id: teacher.id
        }).then((_) => {
            const link = 'http://wp.me/' + teacher.whatsapp;
            window.open(link, "_blank")
        });
    }

    return (
        <article className="teacher-item">
            <header>
                <img
                    src={teacher.avatar}
                    alt={teacher.name}
                />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>
                {teacher.bio}
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ {teacher.cost}</strong>
                </p>
                <button type="button" onClick={handleWhatsappClick}>
                    <img src={whatsappIcon} alt="Entrar em contato"/>
                    Entrar em Contato
                </button>
            </footer>
        </article>
    );
}


export default TeacherItem;
