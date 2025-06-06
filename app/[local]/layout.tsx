/* eslint-disable @typescript-eslint/no-explicit-any */
import { getTranslations } from "../helpers/helpers";
import { getSharedMetadata } from "../helpers/getSharedMetadata";

export async function generateMetadata({ params }: any) {
  const local = (await params.local) || "en";
  const translations = getTranslations(local);

  const sharedMetadata = getSharedMetadata(local, translations);

  return {
    title: translations.layoutMeta.title,
    description: translations.layoutMeta.description,
    ...sharedMetadata,
  };
}

export default function LocalLayout({ children }: any) {
  return <>{children}</>;
}
