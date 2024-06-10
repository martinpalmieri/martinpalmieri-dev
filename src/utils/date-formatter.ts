export function formatISODate(dateString: string): string {
  const date = new Date(dateString)
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]
  const monthIndex = date.getMonth()
  const year = date.getFullYear()
  return `${monthNames[monthIndex]} ${year}`
}
