 let seconds = 0
 let time = []
 let years = Math.floor(seconds/31536000)
 let days = Math.floor((seconds-(years*31536000))/86400) 
 let hours = Math.floor((seconds -(years*31536000 + days*86400))/3600)
 let mins = Math.floor((seconds -(years*31536000 + days*86400 + hours*3600))/60)
 let secs = seconds - (years*31536000 + days*86400 + hours*3600 + mins*60)
  console.log(seconds)
  console.log(years)
  console.log(days)
  console.log(hours)
  console.log(mins)
  console.log(secs)
  if (years > 1) {time.push(years + ' years')}
  if (years == 1) {time.push(years + ' year')}
  if (days > 1) {time.push(days + ' days')}
  if (days == 1) {time.push(day + ' day')}
  if (hours > 1) {time.push(hours + ' hours')}
  if (hours == 1) {time.push(hours + ' hour')}
  if (mins > 1) {time.push(mins + ' minutes')}
  if (mins == 1) {time.push(mins + ' minute')}
  if (secs > 1) {time.push(secs + ' seconds')}
  if (secs == 1) {time.push(secs + ' second')}
  if (time.length == 5) {
    time.splice(1,0,', ')
    time.splice(3,0,', ')
    time.splice(5,0,', ')
    time.splice(7,0,' and ') 
  }
  if (time.length == 4) {
    time.splice(1,0,', ')
    time.splice(3,0,', ')
    time.splice(5,0,' and ')
 } 
 if (time.length == 3) {
    time.splice(1,0,', ')
    time.splice(3,0,' and ')
 }
 if (time.length == 2) {
    time.splice(1,0,' and ')
    
 }
 if (seconds == 0) {time = ["now"]}
  console.log(time.join(""))