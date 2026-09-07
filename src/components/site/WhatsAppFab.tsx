import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { trackConversion } from "@/lib/analytics";
import { saveLead } from "@/lib/leads";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";

const WA_NUMBER = "919326287420";

export function WhatsAppFab() {
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name.trim().length < 2 || form.phone.trim().length < 6) {
      toast.error("Please share your name and phone number.");
      return;
    }
    setBusy(true);
    await saveLead({ ...form, source: "whatsapp_fab" });
    setBusy(false);
    trackConversion("generate_lead", { method: "whatsapp_fab" });

    const text = `Hi MONOPOLYMERS,%0A%0AName: ${form.name}%0APhone: ${form.phone}%0A%0A${
      form.message || "I'd like to enquire about your polymer supply."
    }`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
    toast.success("Thanks! Opening WhatsApp with your enquiry…");
    setOpen(false);
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] text-white px-4 py-3 shadow-elegant hover:scale-105 transition-transform"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline text-sm font-semibold">Quick Enquiry</span>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Quick Enquiry</DialogTitle>
            <DialogDescription>
              Share your details and we'll continue the conversation on WhatsApp.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={onSubmit} className="space-y-4">
            <Input
              placeholder="Your Name *"
              maxLength={120}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <Input
              placeholder="Phone *"
              maxLength={30}
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <Textarea
              rows={3}
              maxLength={4000}
              placeholder="Polymer type, grade, quantity…"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <Button type="submit" disabled={busy} className="w-full bg-[#25D366] hover:opacity-95 text-white">
              {busy ? "Sending…" : "Continue on WhatsApp"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
