"use client";

import { useTranslations } from "next-intl";
import React from "react";
import type { ReactElement } from "react";

export default function Page(): ReactElement {
    const t = useTranslations();

    return <div>{t("welcome")}</div>;
}
