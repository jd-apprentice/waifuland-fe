import DefaultLayout from "../../layout";
import { ChangeEvent, useEffect, useState } from "react";
import { useCheckToken } from "../../hooks/checkToken";
import api from "../../services/base/api";
import { Account } from "../../components";
import { IUser } from "../../models/types";

export const AccountView = () => {
    const token = localStorage.getItem("token");
    const [image, setImage] = useState<File>();
    const [user, setUser] = useState<IUser | null>();

    useEffect(() => {
        const isLogged = useCheckToken();
        if (isLogged) {
            if (token) {
                api.userApi
                    .getUserInfo(token)
                    .then((response) => setUser(response as IUser));
            }
        } else {
            window.location.href = "/login";
        }
    }, [api.api.token, image]);

    return (
        <DefaultLayout
            route={
                <Account
                    picture={user?.profile_picture || ""}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        const newImage = e?.target?.files?.item(0);
                        setImage(newImage as File);
                    }}
                    onClick={() => {
                        api.userApi
                            .updateUserInfo(user?.id as string, image as File)
                            .then((response: any) =>
                                setImage(response?.picture)
                            );
                    }}
                />
            }
        />
    );
};
