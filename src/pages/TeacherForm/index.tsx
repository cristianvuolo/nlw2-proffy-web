import React, {FormEvent, useState} from "react";
import './styles.css'
import { useHistory } from 'react-router-dom';
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";

import iconWarning from "../../assets/images/icons/warning.svg"
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";
import api from "../../services/api";

function TeacherForm() {
    const history = useHistory();
    const [scheduleItems, setScheduleItems] = useState([{week_day: 0, from: '', to: ''},]);
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    function handleAddNewTime() {
        setScheduleItems([...scheduleItems, {week_day: 0, from: '', to: ''}])
    }

    function handleCreateClass(e: FormEvent) {
        e.preventDefault();
        api.post('classes', {
            name, avatar, whatsapp, bio, subject, cost, schedule: scheduleItems
        }).then(() => {
            alert('cadastro adicionado');
            history.push('/');
        })
        console.log({name, avatar, whatsapp, bio, subject, cost, scheduleItems})
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const items = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return {
                    ...scheduleItem,
                    [field]: value
                }
            }
            return scheduleItem;
        });

        setScheduleItems(items);
    }

    return (
        <div id="page-teacher-form">
            <PageHeader
                title="Que incrível que você quer dar aulas!"
                description="O primeiro passo é preencher esse formulário de inscrição
            "/>
            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>
                        <Input name="name" label="Nome Completo" value={name}
                               onChange={(e) => setName(e.target.value)}/>
                        <Input name="avatar" label="Avatar" value={avatar} onChange={(e) => setAvatar(e.target.value)}/>
                        <Input name="whatsapp" label="Whatsapp" value={whatsapp}
                               onChange={(e) => setWhatsapp(e.target.value)}/>
                        <Textarea name="bio" label="Biografia" value={bio} onChange={(e) => setBio(e.target.value)}/>
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a Aula</legend>
                        <Select name="subject" label="Matéria" value={subject}
                                onChange={(e) => setSubject(e.target.value)} options={[
                            {value: 'Artes', label: 'Artes'},
                            {value: 'Biologia', label: 'Biologia'},
                            {value: 'Ciências', label: 'Ciências'},
                            {value: 'Ed. Física', label: 'Ed. Física'},
                            {value: 'Física', label: 'Física'},
                            {value: 'Português', label: 'Português'},
                            {value: 'Química', label: 'Química'},
                        ]}/>
                        <Input name="cost" label="Custo da sua hora por aula" value={cost}
                               onChange={(e) => setCost(e.target.value)}/>
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis
                            <button type="button" onClick={handleAddNewTime}>+ Novo horário</button>
                        </legend>
                        {scheduleItems.map((schedule, index) => {
                            return (
                                <div className="schedule-item" key={schedule.week_day}>
                                    <Select
                                        name="week_day"
                                        label="Dia da Semana"
                                        value={schedule.week_day}
                                        onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                                        options={[
                                            {value: '0', label: 'Domingo'},
                                            {value: '1', label: 'Segunda-feira'},
                                            {value: '2', label: 'Terça-feira'},
                                            {value: '3', label: 'Quarta-feira'},
                                            {value: '4', label: 'Quinta-feira'},
                                            {value: '5', label: 'Sexta-feira'},
                                            {value: '6', label: 'Sábado'},
                                        ]}/>
                                    <Input label="Das" type="time" name="from" value={schedule.from}
                                           onChange={e => setScheduleItemValue(index, 'from', e.target.value)}/>
                                    <Input label="Até" type="time" name="to" value={schedule.to}
                                           onChange={e => setScheduleItemValue(index, 'to', e.target.value)}/>
                                </div>
                            )
                        })}
                    </fieldset>

                    <footer>
                        <p>
                            <img src={iconWarning} alt="Aviso Importante"/>
                            Importante
                            <br/>

                            preencha todos os dados
                        </p>

                        <button type="submit">Salvar Cadastro</button>
                    </footer>
                </form>
            </main>
        </div>
    );
}

export default TeacherForm;
