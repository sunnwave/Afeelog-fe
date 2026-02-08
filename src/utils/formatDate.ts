import moment from "moment";

export default function formatDate(dateString: string): string {
  return moment(dateString).format("YYYY.MM.DD");
}
