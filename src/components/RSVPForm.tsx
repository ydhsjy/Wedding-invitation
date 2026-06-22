"use client";

import { Send } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import type { Wish } from "@/data/wedding";
import { WishCard } from "@/components/WishCard";

const googleFormAction = "https://docs.google.com/forms/d/e/1FAIpQLScqfChPrpESyEHrD5plSqKUPcO15uzMU83lL_HKL9h1pfzzsQ/formResponse";
const googleEntries = {
  name: "entry.704358519",
  attendance: "entry.392014282",
  message: "entry.1983435122"
};
const wishesCsvUrl =
  process.env.NEXT_PUBLIC_RSVP_SHEET_CSV_URL ||
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTXr1T7qlMsZifIfbA6SnquhIbW2Prl3I9J7OekvJ9S2XZfsJrCuh1GaBthzCv43m1t3M3nKR2NMCNi/pub?gid=1700159473&single=true&output=csv";

function toGoogleAttendance(attendance: Wish["attendance"]) {
  return attendance === "Berhalangan" ? "Tidak Hadir" : attendance;
}

function toWishAttendance(attendance: string): Wish["attendance"] {
  return attendance.toLowerCase().includes("tidak") ? "Berhalangan" : "Hadir";
}

function parseCsv(content: string) {
  const rows: string[][] = [];
  let row: string[] = [];
  let value = "";
  let quoted = false;

  for (let index = 0; index < content.length; index += 1) {
    const char = content[index];
    const next = content[index + 1];

    if (char === '"' && quoted && next === '"') {
      value += '"';
      index += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(value);
      value = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") {
        index += 1;
      }
      row.push(value);
      rows.push(row);
      row = [];
      value = "";
    } else {
      value += char;
    }
  }

  if (value || row.length > 0) {
    row.push(value);
    rows.push(row);
  }

  return rows;
}

function csvToWishes(content: string): Wish[] {
  const [headers, ...rows] = parseCsv(content);
  if (!headers) return [];

  const normalizedHeaders = headers.map((header) => header.trim().toLowerCase());
  const nameIndex = normalizedHeaders.findIndex((header) => header.includes("nama"));
  const attendanceIndex = normalizedHeaders.findIndex((header) => header.includes("konfirmasi"));
  const messageIndex = normalizedHeaders.findIndex((header) => header.includes("ucapan"));

  return rows
    .map((row) => {
      const name = (row[nameIndex] || "").trim();
      const attendance = (row[attendanceIndex] || "").trim();
      const message = (row[messageIndex] || "").trim();

      if (!name) return undefined;

      return {
        name,
        attendance: toWishAttendance(attendance),
        message: message || "Selamat menempuh hidup baru. Tuhan memberkati."
      } satisfies Wish;
    })
    .filter((wish): wish is Wish => Boolean(wish))
    .reverse();
}

export function RSVPForm({ initialWishes }: { initialWishes: Wish[] }) {
  const [wishes, setWishes] = useState<Wish[]>(initialWishes);
  const [status, setStatus] = useState<Wish["attendance"]>("Hadir");
  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const actionButtonClass = "border-[#315f9f] bg-[#315f9f] text-white shadow-[0_10px_22px_rgba(49,95,159,0.2)]";
  const mutedButtonClass = "border-[#6f91bd]/45 bg-[#5d8195] text-white hover:border-[#315f9f] hover:bg-[#315f9f]";

  useEffect(() => {
    if (!wishesCsvUrl) return;

    const controller = new AbortController();

    const loadWishes = async () => {
      try {
        const response = await fetch(wishesCsvUrl, { signal: controller.signal });
        if (!response.ok) return;
        const content = await response.text();
        setWishes(csvToWishes(content));
      } catch {
        // Keep local wishes visible if the published sheet is unavailable.
      }
    };

    void loadWishes();
    const id = window.setInterval(loadWishes, 30000);

    return () => {
      controller.abort();
      window.clearInterval(id);
    };
  }, []);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const name = String(form.get("name") || "").trim();
    const message = String(form.get("message") || "").trim();

    if (!name) {
      return;
    }

    const wish: Wish = {
      name,
      attendance: status,
      message: message || "Selamat menempuh hidup baru. Tuhan memberkati."
    };
    const googleForm = new FormData();
    googleForm.append(googleEntries.name, wish.name);
    googleForm.append(googleEntries.attendance, toGoogleAttendance(wish.attendance));
    googleForm.append(googleEntries.message, wish.message);
    setSubmitStatus("submitting");

    try {
      await fetch(googleFormAction, {
        method: "POST",
        body: googleForm,
        mode: "no-cors"
      });
    } catch {
      setSubmitStatus("error");
      return;
    }

    setWishes((current) => [
      wish,
      ...current
    ]);
    formElement.reset();
    setStatus("Hadir");
    setSubmitStatus("success");
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
      <form onSubmit={submit} className="luxury-card rounded-lg p-5 sm:p-7">
        <div className="grid gap-5">
          <label className="grid gap-2 font-sans text-xs font-semibold uppercase tracking-[0.21em] text-clay lg:text-[6px]">
            Nama
            <input
              name="name"
              required
              placeholder="Nama Anda"
              className="rounded-md border border-[#6f91bd]/35 bg-white px-4 py-3 font-serif text-base normal-case leading-6 tracking-normal text-ink outline-none transition focus:border-[#315f9f] lg:text-[8px] lg:leading-3"
            />
          </label>
          <fieldset className="grid gap-3">
            <legend className="font-sans text-xs font-semibold uppercase tracking-[0.21em] text-clay lg:text-[6px]">Konfirmasi</legend>
            <div className="grid grid-cols-2 gap-3">
              {(["Hadir", "Berhalangan"] as const).map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => setStatus(item)}
                  className={`rounded-md border px-4 py-3 font-button text-[15px] font-bold transition lg:text-[8px] ${
                    status === item ? actionButtonClass : mutedButtonClass
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </fieldset>
          <label className="grid gap-2 font-sans text-xs font-semibold uppercase tracking-[0.21em] text-clay lg:text-[6px]">
            Ucapan
            <textarea
              name="message"
              rows={5}
              placeholder="Tulis doa dan ucapan"
              className="resize-none rounded-md border border-[#6f91bd]/35 bg-white px-4 py-3 font-serif text-base normal-case leading-6 tracking-normal text-ink outline-none transition focus:border-[#315f9f] lg:text-[8px] lg:leading-3"
            />
          </label>
          <button
            type="submit"
            disabled={submitStatus === "submitting"}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-[#6f91bd]/45 bg-[#5d8195] px-6 py-3 font-sans text-sm font-medium text-white shadow-[0_14px_30px_rgba(49,95,159,0.18)] transition hover:border-[#315f9f] hover:bg-[#315f9f] lg:text-[7px]"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            {submitStatus === "submitting" ? "Mengirim..." : "Kirim Ucapan"}
          </button>
          {submitStatus === "success" && <p className="text-center text-sm font-medium text-[#315f9f] lg:text-[7px]">Ucapan terkirim. Terima kasih.</p>}
          {submitStatus === "error" && <p className="text-center text-sm font-medium text-red-700 lg:text-[7px]">Ucapan belum terkirim. Silakan coba lagi.</p>}
        </div>
      </form>

      <div className="grid max-h-[34rem] gap-4 overflow-y-auto pr-1">
        {wishes.map((wish, index) => (
          <WishCard wish={wish} key={`${wish.name}-${index}`} />
        ))}
      </div>
    </div>
  );
}
