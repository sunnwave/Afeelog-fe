import { describe, it, expect, beforeAll } from "vitest";
import moment from "moment";
import "moment/locale/ko";

import { formatDate, fromNow } from "./date";

describe("date utils", () => {
  beforeAll(() => {
    // 테스트 환경에서 locale 보장
    moment.locale("ko");
  });

  it("formatDate: YYYY.MM.DD 형식으로 포맷한다", () => {
    expect(formatDate("2026-02-06T00:00:00.000Z")).toBe("2026.02.06");
    expect(formatDate("2026-12-31T23:59:59.000Z")).toBe("2026.12.31");
  });

  it("fromNow: ko locale 기준 상대시간을 반환한다", () => {
    // moment는 내부적으로 현재 시간을 쓰므로, 기준 시간을 고정해야 테스트가 안정적임
    const base = moment("2026-02-06T12:00:00.000Z");
    const nowSpy = moment.now;

    // moment.now를 고정(밀리초)
    moment.now = () => base.valueOf();

    try {
      // 1시간 전
      expect(fromNow("2026-02-06T11:00:00.000Z")).toBe("한 시간 전");

      // 5분 전(환경에 따라 "5분 전"으로 나옴)
      expect(fromNow("2026-02-06T11:55:00.000Z")).toBe("5분 전");
    } finally {
      moment.now = nowSpy; // 원복
    }
  });
});
