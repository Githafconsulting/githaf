
import { Dispatch, SetStateAction } from 'react';

export type ConsultationType = {
  id: string;
  name: string;
  duration: number;
};

export type TimeSlot = string;

export type BookingFormData = {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
};

export type BookingCalendarProps = {
  selectedDate: Date | undefined;
  setSelectedDate: (date: Date | undefined) => void;
  selectedTime: string | undefined;
  setSelectedTime: (time: string | undefined) => void;
  showTimeSlots: boolean;
};

export type BookingFormProps = {
  formData: BookingFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  selectedType: string | undefined;
  setSelectedType: Dispatch<SetStateAction<string | undefined>>;
  handleSubmit: (e: React.FormEvent) => void;
  selectedDate: Date | undefined;
  selectedTime: string | undefined;
};

export type ConfirmationDialogProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  formData: BookingFormData;
  selectedDate: Date | undefined;
  selectedTime: string | undefined;
  selectedType: string | undefined;
  onConfirm: () => void;
  isSubmitting: boolean;
  consultationTypes: ConsultationType[];
};
