import { useState } from "react";
import { HeartHandshake, CheckCircle2, Loader2, Download } from "lucide-react";

// Vite: VITE_API_URL   |   Create React App: change to process.env.REACT_APP_API_URL
const API = (import.meta.env.VITE_API_URL || "http://localhost:5000").replace(/\/+$/, "");

const PRESETS = [500, 1000, 2500, 5000];
const PROGRAMMES = [
  "General Donation",
  "Education",
  "Health",
  "Livelihood",
  "Women Empowerment",
  "Animal Welfare",
  "Tree Plantation",
];

function loadRazorpay() {
  return new Promise((resolve) => {
    if (window.Razorpay) return resolve(true);
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    s.onload = () => resolve(true);
    s.onerror = () => resolve(false);
    document.body.appendChild(s);
  });
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default function Donate() {
  const [programme, setProgramme] = useState(PROGRAMMES[0]);
  const [amount, setAmount] = useState(1000);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState(null); // { type: 'success' | 'error', text }
  const [paidId, setPaidId] = useState(null); // set only after a confirmed payment
  const [downloading, setDownloading] = useState(false);

  // Ask the server to confirm. Retry a few times in case Razorpay is still capturing.
  const confirmPayment = async (paymentId) => {
    for (let i = 0; i < 4; i++) {
      const res = await fetch(`${API}/api/payments/success`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paymentId }),
      });
      const data = await res.json();
      if (data.status === "successful") return true;
      await sleep(1500);
    }
    return false;
  };

  const downloadCertificate = async () => {
    if (!paidId) return;
    setDownloading(true);
    try {
      const res = await fetch(`${API}/api/certificates/${paidId}`);
      if (!res.ok) throw new Error("Could not create your certificate. Please try again.");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Amisankalp-Certificate-${paidId}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      setMessage({ type: "error", text: err.message });
    } finally {
      setDownloading(false);
    }
  };

  const handleDonate = async (e) => {
    e.preventDefault();
    setMessage(null);
    setPaidId(null);

    if (!(Number(amount) >= 1)) return setMessage({ type: "error", text: "Enter a valid amount." });

    setBusy(true);
    try {
      const loaded = await loadRazorpay();
      if (!loaded) throw new Error("Could not load the payment window. Check your connection.");

      const { keyId } = await (await fetch(`${API}/api/payments/config`)).json();

      const res = await fetch(`${API}/api/payments/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ programme, amount: Number(amount), name, email }),
      });
      const order = await res.json();
      if (!res.ok) throw new Error(order.error || "Could not start payment.");

      const rzp = new window.Razorpay({
        key: keyId,
        order_id: order.orderId,
        amount: order.amount,
        currency: order.currency,
        name: "AmiSankalp Social Foundation",
        description: programme,
        prefill: { name, email },
        theme: { color: "#0f766e" },
        handler: async (r) => {
          const ok = await confirmPayment(r.razorpay_payment_id);
          if (ok) {
            setPaidId(r.razorpay_payment_id);
            setMessage({ type: "success", text: "Payment successful. Thank you for your support!" });
          } else {
            setMessage({
              type: "error",
              text: `We received your payment but could not confirm it yet. Please contact us with payment ID ${r.razorpay_payment_id}.`,
            });
          }
          setBusy(false);
        },
        modal: { ondismiss: () => setBusy(false) },
      });

      rzp.on("payment.failed", (f) => {
        setMessage({ type: "error", text: `Payment failed: ${f.error.description}` });
        setBusy(false);
      });
      rzp.open();
    } catch (err) {
      setMessage({ type: "error", text: err.message });
      setBusy(false);
    }
  };

  return (
    <section className="bg-[#f3f9fa] py-12 sm:py-16">
      <div className="mx-auto max-w-xl px-4">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
            <HeartHandshake size={24} />
          </div>
          <h1 className="text-3xl font-bold text-brand-navy">Make a Donation</h1>
          <p className="mt-2 text-sm text-gray-600">
            Choose a programme and give. Your payment is confirmed instantly.
          </p>
        </div>

        <form onSubmit={handleDonate} className="rounded-2xl bg-white p-5 shadow-[0_18px_50px_rgba(6,43,70,0.08)] sm:p-7">
          {/* Programme */}
          <label htmlFor="programme" className="mb-1 block text-sm font-medium text-brand-navy">
            Programme
          </label>
          <select
            id="programme"
            value={programme}
            onChange={(e) => setProgramme(e.target.value)}
            className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
          >
            {PROGRAMMES.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>

          {/* Amount */}
          <label className="mb-2 mt-6 block text-sm font-medium text-brand-navy">Amount</label>
          <div className="grid grid-cols-4 gap-2">
            {PRESETS.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setAmount(p)}
                className={`rounded-lg border py-2 text-sm font-semibold transition ${
                  Number(amount) === p
                    ? "border-brand-teal bg-teal-50 text-brand-teal"
                    : "border-gray-200 text-gray-700 hover:border-brand-teal"
                }`}
              >
                ₹{p.toLocaleString("en-IN")}
              </button>
            ))}
          </div>
          <div className="relative mt-2">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
            <input
              type="number"
              min="1"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              aria-label="Custom amount in rupees"
              className="w-full rounded-lg border border-gray-200 py-2.5 pl-7 pr-3 text-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
            />
          </div>

          {/* Donor */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-brand-navy">Your name</label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-brand-navy">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={busy}
            className="mt-6 flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand-orange to-brand-orange-light text-sm font-semibold text-white shadow-[0_8px_20px_rgba(245,130,32,0.2)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {busy ? <Loader2 size={18} className="animate-spin" /> : <HeartHandshake size={18} />}
            {busy ? "Processing..." : `Donate ₹${Number(amount || 0).toLocaleString("en-IN")}`}
          </button>

          <div aria-live="polite" className="mt-4">
            {message && (
              <p
                className={`flex items-start gap-2 rounded-lg p-3 text-sm ${
                  message.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-700"
                }`}
              >
                {message.type === "success" && <CheckCircle2 size={18} className="mt-0.5 shrink-0" />}
                {message.text}
              </p>
            )}

            {paidId && (
              <button
                type="button"
                onClick={downloadCertificate}
                disabled={downloading}
                className="mt-3 flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand-navy text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {downloading ? <Loader2 size={18} className="animate-spin" /> : <Download size={18} />}
                {downloading ? "Preparing certificate..." : "Download Certificate"}
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}