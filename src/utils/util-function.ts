export function getCurrentTime() {
    const now = new Date();
  
    // Extract individual components of the time
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const milliseconds = now.getMilliseconds().toString().padStart(3, '0');
  
    // Create the formatted time string
    const formattedTime = `${hours}:${minutes}:${seconds}:${milliseconds}`;
  
    return formattedTime;
  }