A.SchedulerEventRepeat = {
	dayly: {
		description: 'Every day',
		validate: function(evt, date) {
			return true;
		}
	},

	monthly: {
		description: 'Every month',
		validate: function(evt, date) {
			var endDate = evt.get(END_DATE);
			var startDate = evt.get(START_DATE);

			return (startDate.getDate() === evt.getDate());
		}
	},

	monWedFri: {
		description: 'Every Monday, Wednesday and Friday',
		validate: function(evt, date) {
			return DateMath.isMonWedOrFri(date);
		}
	},

	tuesThurs: {
		description: 'Every Tuesday and Thursday',
		validate: function(evt, date) {
			return DateMath.isTueOrThu(date);
		}
	},

	weekDays: {
		description: 'Every week days',
		validate: function(evt, date) {
			return DateMath.isWeekDay(date);
		}
	},

	weekly: {
		description: 'Every week',
		validate: function(evt, date) {
			var endDate = evt.get(END_DATE);
			var startDate = evt.get(START_DATE);

			return (startDate.getDay() === evt.getDay());
		}
	}

};