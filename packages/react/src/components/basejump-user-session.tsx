"use client";

import {createContext, ReactNode, useContext, useEffect, useMemo, useState} from "react";
import {AuthError, SupabaseClient} from "@supabase/supabase-js";
import {Session} from "@supabase/auth-helpers-react";

type Props = {
  supabaseClient: SupabaseClient;
  children: ReactNode;
};

type BASEJUMP_PROVIDER = {
  supabaseClient: SupabaseClient | null;
  loading: boolean;
  error: AuthError | null;
  session: null | Session;
};
const BasejumpContext = createContext<BASEJUMP_PROVIDER | null>({
  supabaseClient: null,
  loading: true,
  error: null,
  session: null,
});

export const BasejumpUserSession = ({
  supabaseClient,
  children
}: Props) => {
  const [session, setSession] = useState<null | Session>(null);
  const [loading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<AuthError | null>(null);

  useEffect(() => {
    let mounted = true;

    async function getSession() {
      const {
        data: { session },
        error,
      } = await supabaseClient.auth.getSession();

      // only update the react state if the component is still mounted
      if (mounted) {
        if (error) {
          setError(error);
          setIsLoading(false);
          return;
        }

        setSession(session);
        setIsLoading(false);
      }
    }

    getSession();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange((event, session) => {
      if (session && (event === "SIGNED_IN" || event === "TOKEN_REFRESHED")) {
        setSession(session);
      }

      if (event === "SIGNED_OUT") {
        setSession(null);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const providerValue: BASEJUMP_PROVIDER = useMemo(() => {
    if (loading) {
      return {
        loading: true,
        session: null,
        error: null,
        supabaseClient
      };
    }

    if (error) {
      return {
        loading: false,
        session: null,
        error,
        supabaseClient
      };
    }

    return {
      loading: false,
      session,
      error: null,
      supabaseClient
    };
  }, [loading, session, error]);

  return (
    <BasejumpContext.Provider value={providerValue}>
      {children}
    </BasejumpContext.Provider>
  );
};

export const useBasejumpClient = () => {
  const context = useContext(BasejumpContext);
  if (context === undefined) {
    throw new Error(
      "useBasejumpClient must be used within a BasejumpUserSession"
    );
  }
  return context?.supabaseClient;
};

export const useBasejumpSession = () => {
  const context = useContext(BasejumpContext);
  if (context === undefined) {
    throw new Error(
      "useBasejumpSession must be used within a BasejumpUserSession"
    );
  }
  return context?.session;
};

export const useBasejumpProvider = () => {
  const context = useContext(BasejumpContext);
  if (context === undefined) {
    throw new Error(
      "useBasejumpClient must be used within a BasejumpUserSession"
    );
  }
  return context;
};
