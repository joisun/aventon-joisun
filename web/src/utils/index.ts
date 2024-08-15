export const newDate = () => {
  return new Date().toISOString().split('T')[0]
}

//! 这个地方用的时候， 最好判断一下当地时间，不然在中国显示的也是美国时间
// TODO:
export const formatDateToLocal = (
    dateStr: string,
    locale: string = 'en-US',
  ) => {
    const date = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    };
    const formatter = new Intl.DateTimeFormat(locale, options);
    return formatter.format(date);
  };