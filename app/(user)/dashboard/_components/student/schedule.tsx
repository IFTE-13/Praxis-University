"use client";

import BigCalendar from "@/components/big-calendar/big-calendar";
import moment from "moment";
import { SetStateAction, useState } from "react";
import { momentLocalizer, Views } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

const DnDCalendar = withDragAndDrop(BigCalendar);
const localizer = momentLocalizer(moment);

const Schedule = () => {
  const [view, setView] = useState(Views.WEEK);
  const [date, setDate] = useState(new Date());

  const handleNavigate = (newDate: Date) => {
    setDate(newDate);
  };

  const handleViewChange = (newView: SetStateAction<any>) => {
    setView(newView);
  };

  return (
    <main className="container">
      <DnDCalendar
        localizer={localizer}
        style={{ height: 864, width: "100%" }}
        selectable
        date={date}
        onNavigate={handleNavigate}
        view={view}
        onView={handleViewChange}
        resizable
        draggableAccessor={() => true}
        resizableAccessor={() => true}
      />
    </main>
  );
};

export default Schedule;