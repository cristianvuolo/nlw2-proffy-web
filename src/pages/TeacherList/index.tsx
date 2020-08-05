import React, {FormEvent, useState} from "react";

import './styles.css'
import PageHeader from "../../components/PageHeader";

import TeacherItem, {TeacherInterface} from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";
import api from "../../services/api";


function TeacherList() {
    const [subject, setSubject] = useState('');
    const [weekDay, setWeekDay] = useState('');
    const [time, setTime] = useState('');
    const [teachers, setTeachers] = useState<TeacherInterface[]>([]);

    function handleSearchTeachers(e: FormEvent) {
        e.preventDefault();
        console.log(subject, weekDay, time)
        api.get('/classes', {
            params: {
                subject,
                week_day: weekDay,
                time
            }
        }).then((response) => {
            setTeachers(response.data)
        })
    }

    return (
        <div id="page-teacher-list">
            <PageHeader title="Estes são os Proffys disponíveis.">
                <form id="search-teachers" onSubmit={handleSearchTeachers}>
                    <Select
                        name="subject"
                        label="Matéria"
                        value={subject}
                        onChange={(e) => {
                            setSubject(e.target.value)
                        }}
                        options={[
                            {value: 'Artes', label: 'Artes'},
                            {value: 'Biologia', label: 'Biologia'},
                            {value: 'Ciências', label: 'Ciências'},
                            {value: 'Ed. Física', label: 'Ed. Física'},
                            {value: 'Física', label: 'Física'},
                            {value: 'Português', label: 'Português'},
                            {value: 'Química', label: 'Química'},
                        ]}/>

                    <Select
                        name="week_day"
                        label="Dia da Semana"
                        value={weekDay}
                        onChange={(e) => {
                            setWeekDay(e.target.value)
                        }}
                        options={[
                            {value: '0', label: 'Domingo'},
                            {value: '1', label: 'Segunda-feira'},
                            {value: '2', label: 'Terça-feira'},
                            {value: '3', label: 'Quarta-feira'},
                            {value: '4', label: 'Quinta-feira'},
                            {value: '5', label: 'Sexta-feira'},
                            {value: '6', label: 'Sábado'},
                        ]}/>

                    <Input
                        name="time"
                        label="Hora"
                        value={time}
                        onChange={(e) => {
                            setTime(e.target.value)
                        }}
                        type="time"
                    />

                    <button type="submit">Buscar</button>
                </form>
            </PageHeader>
            <main>
                {teachers.map((teacher) => {
                    return (<TeacherItem teacher={teacher} key={teacher.id}/>)
                })}
            </main>
        </div>
    );
}

export default TeacherList;
