import './App.css';
import { useState } from 'react';

function App() {
  const appointments = [
    { 
      id: 'p1', 
      name: 'Shakirth Anisha', 
      type: 'Consultation', 
      date: '3 November 2024', 
      status: 'Scheduled' 
    },
    { 
      id: 'p2', 
      name: 'Ryan Gooseling', 
      type: 'Follow Up', 
      date: '3 November 2024', 
      status: 'Scheduled' 
    },
    { 
      id: 'p3', 
      name: 'Batman', 
      type: 'Routine Checkup', 
      date: '5 November 2024', 
      status: 'Scheduled' 
    },
  ];

  const [done, new_done] = useState(0);

  const consul_complete = (event) => {
    const p_div = event.target.closest('div');
    const status = p_div.querySelector('.status');
    const name = p_div.querySelector('.name');
    const but = p_div.querySelector('.button');

    status.textContent = "Status: Completed";
    p_div.style.opacity = 0.5;
    name.style.color = '#888';
    name.style.textDecoration = 'line-through';
    but.style.display = 'none';

    new_done((prevCount) => prevCount + 1);
  };

  return (
    <div className="App">
      <header>
        <h1 className="center_itw">Patient Appointments</h1>
      </header>

      {appointments.map((appointment) => (
        <Appointment
          key={appointment.id}
          id={appointment.id}
          name={appointment.name}
          type={appointment.type}
          date={appointment.date}
          status={appointment.status}
          onStatusChange={consul_complete}
        />
      ))}

      <h1>Total Completed Appointments: {done}</h1>
    </div>
  );
}

function Appointment(props) {
  return (
    <div id={props.id} className="patient">
      <li className="name">{props.name}</li>
      <ul>{props.type}</ul>
      <ul>{props.date}</ul>
      <ul className="status">Status: {props.status}</ul>
      <ul>
        <button className="button" onClick={props.onStatusChange}>Mark As Completed</button>
      </ul>
    </div>
  );
}

export default App;
