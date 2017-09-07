import React from 'react';

class Utils {
	monthMap = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	getFormattedDate = (date) => {
		date = date || new Date();
		let day 	= date.getDate();
		let month 	= this.monthMap[parseInt(date.getMonth())];
		let year 	= date.getFullYear().toString().substr(2,2);
		let hour 	= date.getHours();
		let mins 	= date.getMinutes();
		let secs 	= date.getSeconds();
		//let fd = `${day}/${month}/${year} @ ${hour}:${mins}:${secs}`;
		let fd = `${month} ${day}'${year} at ${hour}:${mins}`;
		return fd;	
	}
}


export default Utils;