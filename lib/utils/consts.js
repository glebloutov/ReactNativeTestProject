export const USER_ROLES = {
  PRINCIPAL_ROLE: 'principal',
  COUNSELLOR_ROLE: 'counsellor',
  STUDENT_ROLE: 'student',
  ADMIN_ROLE: 'admin',
  ALLBRY_COUNSELLOR_ROLE: 'allbryCounsellor'
};

export const USER_STATUSES = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  DEACTIVATED: 'deactivated'
};

export const SURVEY_STATUSES = {
  STUDENT_SURVEY: 'studentSurvey'
};

export const AFTER_SURVEY_STUDENT_STEPS = {
  FIRST_STEP: 'navbar.home.title',
  SECOND_STEP: 'navbar.chat.title',
  THIRD_STEP: 'navbar.appointments.title'
};

export const AFTER_SURVEY_COUNSELLOR_STEPS = {
  FIRST_STEP: 'navbar.appointments.title',
  SECOND_STEP: 'navbar.chat.title',
  THIRD_STEP: 'navbar.profile.title'
};

export const CHAT_MESSAGE_TYPES = {
  TEXT: 'text',
  ATTACHMENT: 'attachment',
  TEXT_ATTACHMENT: 'textAttachment',
  END: 'end'
};

export const GENDERS = [{
  label: 'profile.edit.gender.male',
  value: 'Male'
}, {
  label: 'profile.edit.gender.female',
  value: 'Female'
}, {
  label: 'profile.edit.gender.other',
  value: 'Other'
}];

export const PROFILE_GENDERS = {
  MALE: 'Male',
  FEMALE: 'Female',
  OTHER: 'Other'
};

export const NOTE_TYPES = {
  MANUAL: 'manual',
  APPOINTMENT: 'appointment',
  META: 'meta'
};

export const FREE_TIME_REPEAT_TYPES = {
  NONE: 'none',
  EVERYDAY: 'everyday',
  WEEKLY: 'weekly',
  EVERY_WEEKDAY: 'every_weekday'
};

export const NOTIFICATION_TYPES = {
  CHAT_START: 'chatStart',
  CHAT_END: 'chatEnd',
  CHAT_DELETE: 'chatDelete',
  CHAT_MESSAGE: 'chatMessage',
  APPOINTMENT_CREATED: 'appointmentCreated',
  APPOINTMENT_CANCELLED: 'appointmentCancelled',
  APPOINTMENT_RESCHEDULED: 'appointmentRescheduled',
  APPOINTMENT_CREATED_SCHEDULE: 'appointmentCreatedSchedule',
  APPOINTMENT_CANCELLED_SCHEDULE: 'appointmentCancelledSchedule',
  APPOINTMENT_RESCHEDULED_SCHEDULE: 'appointmentRescheduledSchedule'
};