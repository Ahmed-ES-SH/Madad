import { getTranslations } from "../helpers/helpers";
import { getSharedMetadata } from "../helpers/getSharedMetadata";

interface Props {
  params: { local: "en" | "ar" };
  children: React.ReactNode;
}

export async function generateMetadata({ params }: Props) {
  const local = (await params.local) || "en";
  const translations = getTranslations(local);

  const sharedMetadata = getSharedMetadata(local, translations);

  return {
    title: translations.layoutMeta.title,
    description: translations.layoutMeta.description,
    ...sharedMetadata,
  };
}

export default function LocalLayout({ children }: Props) {
  return <>{children}</>;
}
