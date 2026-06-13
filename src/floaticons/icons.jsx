import * as React from "react";

export function GoogleIcon(props) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
      <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
      <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
      <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C39.971 35.205 44 30 44 24c0-1.341-.138-2.65-.389-3.917z"/>
    </svg>
  );
}

export function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path fill="#fff" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  );
}

export function MicrosoftIcon(props) {
  return (
    <svg viewBox="0 0 23 23" {...props}>
      <rect x="1" y="1" width="10" height="10" fill="#F25022"/>
      <rect x="12" y="1" width="10" height="10" fill="#7FBA00"/>
      <rect x="1" y="12" width="10" height="10" fill="#00A4EF"/>
      <rect x="12" y="12" width="10" height="10" fill="#FFB900"/>
    </svg>
  );
}

export function ReactIcon(props) {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" {...props}>
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  );
}

export function SlackIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <rect x="9.2" y="2" width="2.6" height="7.5" rx="1.3" fill="#36C5F0"/>
      <rect x="9.2" y="14.5" width="2.6" height="7.5" rx="1.3" fill="#2EB67D"/>
      <rect x="2" y="9.2" width="7.5" height="2.6" rx="1.3" fill="#ECB22E"/>
      <rect x="14.5" y="9.2" width="7.5" height="2.6" rx="1.3" fill="#E01E5A"/>
      <rect x="12.2" y="9.2" width="2.6" height="2.6" rx="1.3" fill="#36C5F0"/>
      <rect x="9.2" y="12.2" width="2.6" height="2.6" rx="1.3" fill="#2EB67D"/>
    </svg>
  );
}

export function FirebaseIcon(props) {
  const id = React.useId();
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <defs>
        <linearGradient id={id} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#FF8F00"/>
          <stop offset="0.5" stopColor="#FFA000"/>
          <stop offset="1" stopColor="#FFCA28"/>
        </linearGradient>
      </defs>
      <path fill={`url(#${id})`} d="M5 20.5 8 2.5 12.5 9.5 15.5 6.5 19 20.5 12 23 Z"/>
      <path fill="#fff" opacity="0.15" d="M8 2.5 12.5 9.5 15.5 6.5 13.5 17 Z"/>
    </svg>
  );
}

export function DiscordIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path fill="#5865F2" d="M19.5 5.4c-1.4-.7-3-1.1-4.6-1.4l-.3.5c1.5.4 2.7 1 3.9 1.7-1.6-.8-3.3-1.3-5.1-1.4-1.9-.1-3.8.2-5.6.9l-.1-.1c-.1 0-.1 0-.2.1C5.6 6.1 4.4 7.9 3.5 10c-1 2.5-1.6 5.2-1.5 8 1.7 1.2 3.5 2 5.5 2.4l.7-1.2c-1.1-.4-2.1-.9-3-1.6.3.2.6.3.9.5 2.6 1.2 5.5 1.8 8.6 1.4 1.4-.2 2.8-.5 4.1-1.1-.9.7-1.9 1.2-3 1.6l.7 1.2c2-.4 3.9-1.3 5.5-2.4.2-3.5-.6-7.1-2.6-10.4zM9 13.8c-.8 0-1.5-.8-1.5-1.8s.7-1.8 1.5-1.8 1.5.8 1.5 1.8-.7 1.8-1.5 1.8zm6 0c-.8 0-1.5-.8-1.5-1.8s.7-1.8 1.5-1.8 1.5.8 1.5 1.8-.7 1.8-1.5 1.8z"/>
    </svg>
  );
}

export function SpotifyIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="12" r="12" fill="#1ED760"/>
      <path fill="#0a0a0c" d="M17.3 16.6c-.2.3-.6.4-.9.2-2.4-1.5-5.5-1.8-9.1-1-.3.1-.7-.1-.8-.5-.1-.3.1-.7.5-.8 3.9-.9 7.3-.5 10 1.2.4.2.5.6.3.9zm1.2-2.7c-.3.4-.7.5-1.1.3-2.8-1.7-7-2.2-10.3-1.2-.4.1-.9-.1-1-.5-.1-.4.1-.9.5-1 3.7-1.1 8.4-.6 11.6 1.4.4.2.5.7.3 1zm.1-2.8C15.2 9 9.3 8.8 5.9 9.8c-.5.2-1-.2-1.1-.6-.2-.5.1-1 .6-1.2 3.9-1.2 10.4-1 14.1 1.2.4.3.6.8.3 1.3-.3.4-.8.6-1.2.3z"/>
    </svg>
  );
}

export function FigmaIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <circle cx="9" cy="7" r="5" fill="#F24E1E"/>
      <circle cx="15" cy="7" r="5" fill="#A259FF"/>
      <circle cx="12" cy="15" r="5" fill="#0ACF83"/>
      <circle cx="6.5" cy="17" r="3.2" fill="#FF7262"/>
      <circle cx="17.5" cy="17" r="3.2" fill="#1ABCFE"/>
    </svg>
  );
}

export function VercelIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path fill="#fff" d="M12 2 22 20H2Z"/>
    </svg>
  );
}
