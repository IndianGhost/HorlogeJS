function MyDay() {
	var Hour, Today;
	Today = new Date();
	Hour = Today.getHours();
	if (Hour<12) {
		Sleep();
	}
	else{
		WakeUp();
		if (DoSomeThing) {
			Failed();
		}
		else {
			Regret();
		}
		HateLife();
		Sleep();
	}
	setTimeout(MyDay, 1000*3600*24);
}