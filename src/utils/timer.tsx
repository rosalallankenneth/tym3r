export function getTimeUntilMinuteMark(minuteMark = 30) {
  const now = new Date();
  const next = new Date(now);

  // Move to next hour if we've passed the mark
  if (now.getMinutes() > minuteMark || (now.getMinutes() === minuteMark && now.getSeconds() > 0)) {
    next.setHours(now.getHours() + 1);
  }

  // Set to the target minute mark
  next.setMinutes(minuteMark, 0, 0);

  // ✅ Explicitly convert to timestamps (numbers)
  const msRemaining = next.getTime() - now.getTime();
  const secondsRemaining = Math.floor(msRemaining / 1000);
  const minutesRemaining = Math.floor(secondsRemaining / 60);

  return {
    msRemaining,
    secondsRemaining,
    minutesRemaining,
    nextMark: next,
  };
}

export function requestNotificationPermission() {
  if ('Notification' in window) {
    if (Notification.permission === 'default') {
      Notification.requestPermission().then((permission) => {
        console.log('Notification permission:', permission)
      })
    }
  } else {
    console.warn('Browser does not support notifications.')
  }
}
export function showTimerNotification() {
  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification('⏰ Timer Done!', {
      body: 'Your countdown has finished.',
      icon: '/icon.png', // optional, from your public folder
    })
  }
}

// TODOS
// Every n minutes timer
// Countdown Timer