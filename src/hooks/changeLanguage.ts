import { TFunction } from "i18next";
import { useTranslation } from "react-i18next";

/**
 * @description Changes the language of the application to the specified language
 * @param { string } lng - The language to translate
 * @returns { Promise<TFunction> } Hook to change the language
 */

export const useChangeLanguage = (lng: string): Promise<TFunction> => {
  const { i18n } = useTranslation();
  return i18n.changeLanguage(lng);
};
