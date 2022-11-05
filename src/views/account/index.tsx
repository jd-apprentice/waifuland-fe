import DefaultLayout from "../../layout";
import { ChangeEvent, useEffect, useState } from "react";
import { useCheckToken } from "../../hooks/checkToken";
import api from "../../services/base/api";
import { Account } from "../../components";

export const AccountView = () => {
  const [image, setImage] = useState<File | null | undefined>();

  useEffect(() => {
    useCheckToken();
  }, [api.api.token]);

  return (
    <DefaultLayout
      route={
        <Account
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const newImage = e?.target?.files?.item(0);
            setImage(newImage);
          }}
        />
      }
    />
  );
};
