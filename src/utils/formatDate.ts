export default function formatDate(dateString: string): string {
  const dateText = new Date(dateString).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return dateText;
}
