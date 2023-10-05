// Initial call to JQuery.
$(document).ready(function () {
	const currentDate = dayjs().format("dddd, MMMM D, YYYY");
	const currentTime = dayjs().format("YYYY-MM-DD HH:mm:ss");

	function updateTimeAndDate() {
		// Get the current time using Day.js
		$("#date").text(currentDate);
	}

	function getLocalStorage() {
		for (let i = 0; i < 18; i++) {
			let id = "hour" + i;
			let value = localStorage.getItem(id);
			$("#" + id)
				.children("textarea")
				.val(value);
		}
	}
	// Call the function initially to display data saved in local storage
	getLocalStorage();

	// Call the function initially to display the time and date
	updateTimeAndDate();

	// Update the time and date every second (1000 milliseconds)
	setInterval(updateTimeAndDate, 1000);

	// saves input data to local storage
	$(".saveBtn").click(function () {
		const value = $(this).siblings(".description").val();
		const key = $(this).parent().attr("id");
		localStorage.setItem(key, value);
	});

	// jQuery for loop to iterate through time blocks and assign classes
	let currentHour = dayjs().hour();
	$(".time-block").each(function () {
		let timeBlockHour = $(this).attr("id").split("hour")[1];
	if (timeBlockHour > currentHour) {
			$(this).addClass("future");
		} else if (timeBlockHour == currentHour) {
			$(this).addClass("present");
		} else {
			$(this).addClass("past");
		}
	});
	
	// button to clear local storage
	$("#clearBtn").click(function () {
		localStorage.clear();
		window.location.reload();
	});
});
