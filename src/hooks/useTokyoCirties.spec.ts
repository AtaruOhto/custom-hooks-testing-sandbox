import axios from "axios";
import { renderHook } from "@testing-library/react-hooks";
import MockAdapter from "axios-mock-adapter";

import { useTokyoCities } from "./useTokyoCities";

const mock = new MockAdapter(axios);

mock
  .onGet("https://www.land.mlit.go.jp/webland/api/CitySearch?area=13")
  .reply(200, {
    data: [
      {
        id: 1,
        name: "Shinjuku"
      }
    ]
  });

describe("useTokyoCities", () => {
  it("should have Tokyo cities", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useTokyoCities());
    await waitForNextUpdate();
    const expected = [
      {
        id: 1,
        name: "Shinjuku"
      }
    ];
    const { cities } = result.current;
    expect(cities).toEqual(expected);
  });
});
