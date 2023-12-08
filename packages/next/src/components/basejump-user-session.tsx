"use client";

import {ReactNode} from "react";
import {BasejumpUserSession as BasejumpUserSessionReact} from "@usebasejump/react";
import {createClient} from "../utils/create-client.ts";

type Props = {
  children: ReactNode;
};

export const BasejumpUserSession = ({
  children
}: Props) => {
  const supabaseClient = createClient();
  return (
    <BasejumpUserSessionReact supabaseClient={supabaseClient}>
      {children}
    </BasejumpUserSessionReact>
  );
};