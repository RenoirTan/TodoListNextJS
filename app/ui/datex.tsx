import { format } from "date-fns";

export default function Datex({ date }: { date: Date }) {
  return <time
    dateTime={`${date}`}
  >
    {format(date, "d MMM y, h:mm:ss aaaa")}
  </time>
}