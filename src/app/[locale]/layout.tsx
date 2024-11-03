import "server-only";

import React from "react";
import type { ReactElement } from "react";


import { notFound } from "next/navigation";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { locales, LocaleType } from "../../i18n/routing";

export default async function LocaleLayout({
    children,
    params,
}: LocaleLayoutProps): Promise<ReactElement> {
    const { locale } = await params;

    if (!locales.includes(locale as LocaleType)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            <div lang={locale}>{children}</div>
        </NextIntlClientProvider>
    );
}

type LocaleLayoutProps = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};
