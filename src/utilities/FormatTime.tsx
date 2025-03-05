import i18n from '@locales';

const isEnglish = i18n.locale.startsWith('en');

const formatTime = (date: Date) => {
  const now = new Date();

  // If the date is today
  const isToday = now.toDateString() === date.toDateString();
  if (isToday) {
    if (isEnglish) {
      return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
    } else {
      const period = date.getHours() < 12 ? '오전' : '오후';
      const hours = date.getHours() % 12 || 12;
      const minutes = date.getMinutes().toString().padStart(2, '0');
      return `${period} ${hours}:${minutes}`;
    }
  }

  // If the date is yesterday
  const yesterday = new Date();
  yesterday.setDate(now.getDate() - 1);
  if (date.toDateString() === yesterday.toDateString()) {
    return isEnglish ? 'Yesterday' : '하루 전';
  }

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  // English months array
  const monthsEn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // If the date is within the same year
  if (year === now.getFullYear()) {
    return isEnglish ? `${monthsEn[month]} ${day}` : `${month + 1}월 ${day}일`;
  }

  // If the date is in a past year
  return isEnglish ? `${month + 1}/${day}/${year}` : `${year}년 ${month + 1}월 ${day}일`;
};

export default formatTime;
