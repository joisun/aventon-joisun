export const newDate = () => {
  return new Date().toISOString().split('T')[0]
}

//locle navigator.language 也行
export const formatDateToLocal = (
  dateStr: Date,
  locale: string = 'en-US',
) => {
  const date = new Date(dateStr)
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }
  const formatter = new Intl.DateTimeFormat(locale, options)
  return formatter.format(date)
}

// 后置防抖
export const trailingDebounce = (func: (...params: any[]) => void, delay: number) => {
  //  let timer: NodeJS.Timeout | null = null;
  let timer: number
  return (...params: any[]) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(()=>{
      func(params)
    }, delay)
  }
}
