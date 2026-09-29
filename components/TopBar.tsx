import { APP } from "@/config/app.config";
export function TopBar({ children }: { children: React.ReactNode }) { return <header className="topbar"><div className="brand"><strong>{APP.name}</strong><span>{APP.version}</span></div><div className="controls">{children}</div></header>; }
