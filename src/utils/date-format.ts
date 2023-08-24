type FormatToLocaleStringProps = {
  date: Date
  locale?: string
}

export const formatToLocaleString = ({
  date,
  locale = 'en-US',
}: FormatToLocaleStringProps) => {
  return new Intl.DateTimeFormat(locale).format(date)
}
