import moment from "moment";
import "moment/locale/ko";

moment.locale("ko");

export function formatDate(dateString: string): string {
  return moment(dateString).format("YYYY.MM.DD");
}

export function fromNow(dateString: string): string {
  return moment(dateString).fromNow();
}
