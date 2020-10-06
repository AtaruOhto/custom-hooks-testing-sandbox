import { useEffect, useState } from "react";
import axios from "axios";

type City = {
  id: number;
  name: string;
};

type Cities = Array<City>;

// Custom Hooks
export const useTokyoCities = () => {
  const [cities, setCities] = useState<Cities>([]);

  useEffect(() => {
    (async () => {
      // 国土交通省都道府県内市区町村一覧取得API
      const cities = await axios.get<{ data: Cities }>(
        "https://www.land.mlit.go.jp/webland/api/CitySearch?area=13"
      );
      setCities(cities.data.data);
    })();
  }, []);

  return { cities };
};
