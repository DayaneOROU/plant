import { JSX } from "react/jsx-runtime";

export function Alink({ balise }: { balise: JSX.Element }) {
  return (
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition duration-200"
    >
      {balise}
    </a>
  );
}

export function Tiktok() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.03 1.6 4.17 1.22 1.32 2.97 2.07 4.75 2.13v3.87c-1.39-.07-2.74-.51-3.91-1.3-.67-.47-1.24-1.07-1.68-1.77v6.32c.03 2.15-.65 4.31-2.02 5.92-1.8 2.05-4.57 3.07-7.27 2.68-2.52-.33-4.8-1.92-5.96-4.18-1.52-2.83-1.12-6.52 1.01-8.89 1.7-1.89 4.3-2.73 6.82-2.2v3.91c-1.15-.22-2.37.12-3.18.96-.86.91-1.04 2.32-.45 3.42.53.98 1.62 1.6 2.73 1.55 1.48-.02 2.71-1.25 2.73-2.73l-.03-13.62Z" />
    </svg>
  );
}

export function Youtube(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round"
      {...props}
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon
        points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
        className="fill-current stroke-0"
      />
    </svg>
  );
}

export function Instagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function X(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
