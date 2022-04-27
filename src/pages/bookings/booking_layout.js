import * as React from 'react';
import {
  AppointmentForm,
} from '@devexpress/dx-react-scheduler-material-ui';
import { Button } from 'react-bootstrap';

const BookingLayout = ({ onFieldChange, appointmentData, ...restProps }) => {
    const onDescriptionChange = (nextValue) => {
      onFieldChange({ description: nextValue });
    };

    const onMaxParticipantsChange = (nextValue) => {
        onFieldChange({ maxParticipants: nextValue });
      };

    return (
      <AppointmentForm.BasicLayout
        appointmentData={appointmentData}
        onFieldChange={onFieldChange}
        {...restProps}
      >
        <AppointmentForm.Label
          text="Description"
          type="title"
        />
        <AppointmentForm.TextEditor
          value={appointmentData.description}
          onValueChange={onDescriptionChange}
          placeholder="Description"
        />
        <AppointmentForm.Label
          text="Max Participants"
          type="title"
        />
        <AppointmentForm.TextEditor
          value={appointmentData.maxParticipants}
          type="numberEditor"
          onValueChange={onMaxParticipantsChange}
          placeholder="5"
        />
        <Button>TESTING</Button>
      </AppointmentForm.BasicLayout>
    );
  };

  export default BookingLayout;
