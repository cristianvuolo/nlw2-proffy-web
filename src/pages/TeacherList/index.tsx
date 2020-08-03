import React from "react";

import './styles.css'
import PageHeader from "../../components/PageHeader";

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import TeacherItem from "../../components/TeacherItem";

function TeacherList() {
    return (
        <div id="page-teacher-list">
            <PageHeader title="Estes são os Proffys disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="subject">Dia da Semana</label>
                        <input type="text" id="week_day"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="subject">Hora</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>
            <main>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
            </main>
        </div>
    );
}

export default TeacherList;