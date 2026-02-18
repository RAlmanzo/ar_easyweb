import { GitBranchPlus, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-border bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground">AR EasyWeb</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Moderne websites voor KMO&apos;s. Van concept tot lancering.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-foreground">Navigatie</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/diensten"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Diensten
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/portfolio"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link href="/over" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    Over Mij
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-foreground">Diensten</h4>
                        <ul className="space-y-2">
                            <li className="text-sm text-muted-foreground">Frontend Websites</li>
                            <li className="text-sm text-muted-foreground">Headless CMS</li>
                            <li className="text-sm text-muted-foreground">Onderhoud & Support</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-foreground">Contact</h4>
                        <div className="flex gap-4">
                            <a
                                href="mailto:contact@webdev.be"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Mail size={20} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <GitBranchPlus size={20} />
                            </a>
                        </div>
                        <p className="text-sm text-muted-foreground">Vlaanderen & Remote</p>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border">
                    <p className="text-sm text-muted-foreground text-center">
                        © {new Date().getFullYear()} Freelance Web Developer. Alle rechten voorbehouden.
                    </p>
                </div>
            </div>
        </footer>
    );
}