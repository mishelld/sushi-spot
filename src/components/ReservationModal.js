import React, { useState, useEffect } from "react";
import "./Reservation.css";

const openingHours = {
  Monday: [17, 22],
  Tuesday: [17, 22],
  Wednesday: [17, 22],
  Thursday: [17, 22],
  Friday: [17, 23],
  Saturday: [17, 23],
  Sunday: [16, 21],
};

export default function ReservationModal({ show, onClose }) {
  const [selectedDay, setSelectedDay] = useState(""); // will hold date string
  const [times, setTimes] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");
  const [weekDates, setWeekDates] = useState([]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // Generate next 7 days
  useEffect(() => {
    const today = new Date();
    const dates = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      const formatted = date.toISOString().split("T")[0]; // "YYYY-MM-DD"
      dates.push({ date: formatted });
    }

    setWeekDates(dates);
    setSelectedDay(dates[0].date); // default to today
  }, []);

  // Update time slots whenever selectedDay changes
  useEffect(() => {
    if (!selectedDay) return;

    const dateObj = new Date(selectedDay);
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayName = daysOfWeek[dateObj.getDay()];
    const [start, end] = openingHours[dayName];

    const options = [];
    for (let hour = start; hour <= end; hour++) {
      options.push(`${hour}:00`);
      if (hour !== end) options.push(`${hour}:30`);
    }

    // Fetch booked times and filter
    fetch(`http://localhost:5000/api/reservations/booked/${selectedDay}`)
      .then((res) => res.json())
      .then((bookedTimes) => {
        const available = options.filter((time) => !bookedTimes.includes(time));
        setTimes(available);
        setSelectedTime(available[0] || "");
      })
      .catch((err) => console.error(err));
  }, [selectedDay]);

  const handleConfirm = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          day: selectedDay,
          time: selectedTime,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Reservation saved successfully!");

        onClose();
      } else {
        alert("Error: " + data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
    onClose();
  };

  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Choose Day & Time</h3>

        <label>Day</label>
        <select
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
        >
          {weekDates.map(({ date, dayName }) => (
            <option key={date} value={date}>
              {dayName} - {date}
            </option>
          ))}
        </select>

        <label>Time</label>
        <select
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
        >
          {times.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Phone Number</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <div className="modal-actions">
          <button className="confirm-btn" onClick={handleConfirm}>
            Confirm
          </button>
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
