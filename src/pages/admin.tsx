import { useCallback, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import type { Session } from "@supabase/supabase-js";
import type { Tables } from "@/integrations/supabase/types";

type Lead = Tables<"leads">;

const STATUSES = ["new", "contacted", "quoted", "won", "lost"] as const;

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [mode, setMode] = useState<"signin" | "signup">("signin");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    if (mode === "signup") {
      const { error } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: { emailRedirectTo: `${window.location.origin}/admin` },
      });
      setBusy(false);
      if (error) toast.error(error.message);
      else toast.success("Account created. Check your email if confirmation is required.");
      return;
    }
    const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
    setBusy(false);
    if (error) toast.error(error.message);
  };

  return (
    <form onSubmit={submit} className="mx-auto max-w-sm space-y-4 py-24">
      <h1 className="text-2xl font-bold text-charcoal">
        {mode === "signin" ? "Admin sign in" : "Create admin account"}
      </h1>
      <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button type="submit" disabled={busy} className="w-full bg-red-gradient hover:opacity-95">
        {busy ? "Please wait…" : mode === "signin" ? "Sign in" : "Create account"}
      </Button>
      <button
        type="button"
        onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
        className="text-sm text-muted-foreground hover:text-primary w-full text-center"
      >
        {mode === "signin" ? "Need an account? Create one" : "Already have an account? Sign in"}
      </button>
    </form>
  );
}


export default function AdminPage() {
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [denied, setDenied] = useState(false);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setReady(true);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  const load = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });
    setLoading(false);
    if (error) {
      setDenied(true);
      return;
    }
    setDenied(false);
    setLeads(data ?? []);
  }, []);

  useEffect(() => {
    if (session) load();
  }, [session, load]);

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase.from("leads").update({ status }).eq("id", id);
    if (error) {
      toast.error("Could not update this enquiry.");
      return;
    }
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)));
  };

  if (!ready) return null;

  return (
    <>
      <Helmet>
        <title>Enquiries · MONOPOLYMERS Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {!session ? (
          <SignIn />
        ) : (
          <>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-charcoal">Enquiries</h1>
                <p className="text-sm text-muted-foreground">{session.user.email}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={load} disabled={loading}>
                  {loading ? "Refreshing…" : "Refresh"}
                </Button>
                <Button variant="outline" onClick={() => supabase.auth.signOut()}>
                  Sign out
                </Button>
              </div>
            </div>

            {denied ? (
              <p className="mt-10 text-muted-foreground">
                This account doesn't have admin access to enquiries.
              </p>
            ) : leads.length === 0 && !loading ? (
              <p className="mt-10 text-muted-foreground">No enquiries yet.</p>
            ) : (
              <div className="mt-8 grid gap-4">
                {leads.map((l) => (
                  <div key={l.id} className="rounded-2xl border border-border bg-card p-5">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <div className="font-semibold text-charcoal">
                          {l.name}
                          {l.company ? <span className="text-muted-foreground"> · {l.company}</span> : null}
                        </div>
                        <div className="mt-1 text-sm">
                          <a href={`tel:${l.phone}`} className="text-primary font-medium">{l.phone}</a>
                          {l.email ? <span className="text-muted-foreground"> · {l.email}</span> : null}
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-muted-foreground">
                          {new Date(l.created_at).toLocaleString()}
                        </span>
                        <Select value={l.status} onValueChange={(v) => updateStatus(l.id, v)}>
                          <SelectTrigger className="w-[140px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {STATUSES.map((s) => (
                              <SelectItem key={s} value={s}>{s}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    {l.message ? (
                      <p className="mt-3 text-sm text-muted-foreground whitespace-pre-line">{l.message}</p>
                    ) : null}
                    <div className="mt-3 text-xs text-muted-foreground">
                      Source: {l.source}
                      {l.page_url ? ` · ${l.page_url}` : ""}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
