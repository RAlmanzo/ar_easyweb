"use client"

import { sendEmail } from "@/actions/email";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInLeft, fadeInRight, fadeInUp } from "@/lib/animations";
import { Mail, MapPin, Phone } from "lucide-react";
import * as motion from "motion/react-client"
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        budget: "",
        deadline: "",
        message: "",
        company: "",
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleOnSubmit = async () => {
        setLoading(true);
        /*try {
            await sendContactForm(form, window.navigator?.connection?.downlink || "unknown");
            setSuccess(true);
        } catch (err: any) {
            alert(err.message || "Er is iets misgegaan.");
        } finally {
            setLoading(false);
        }*/
    };



    /*const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Form submission logic would go here
        console.log("Form submitted:", formData)
        alert("Bedankt voor je bericht! Ik neem zo snel mogelijk contact met je op.")
        setFormData({ name: "", company: "", email: "", message: "" })
    }*/

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    return (
        <div className="min-h-screen">
            <section className="w-full pt-32 pb-3 px-4 md:px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.div {...fadeInUp}
                        className="text-center max-w-5xl mx-auto mb-16"
                    >
                        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">Neem Contact Op</h1>
                        <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                            Klaar om je project te bespreken? Vul het formulier in of gebruik de onderstaande contactgegevens. Ik
                            reageer meestal binnen 24 uur.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="pt-2 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <motion.div {...fadeInLeft} className="lg:col-span-2">
                            <Card className="border-border shadow-sm">
                                <CardContent className="pt-6">
                                    <form className="space-y-6">
                                        <label htmlFor="name">Naam *</label>
                                        <input name="name" placeholder="Naam" value={formData.name} onChange={handleOnChange} className="w-full p-3 border rounded" />

                                        <label htmlFor="name">Email *</label>
                                        <input name="email" placeholder="Email" value={formData.email} onChange={handleOnChange} className="w-full p-3 border rounded" />

                                        <label htmlFor="name">Telefoon *</label>
                                        <input name="phone" placeholder="Telefoon (optioneel)" value={formData.phone} onChange={handleOnChange} className="w-full p-3 border rounded" />

                                        <label htmlFor="name">Projecttype *</label>
                                        <select name="projectType" value={formData.projectType} onChange={handleOnChange} className="w-full p-3 border rounded">
                                            <option value="">Type project</option>
                                            <option value="Website">Website</option>
                                            <option value="CMS">CMS</option>
                                            <option value="E-commerce">E-commerce</option>

                                        </select>

                                        <label htmlFor="name">Budget</label>
                                        <select name="budget" value={formData.budget} onChange={handleOnChange} className="w-full p-3 border rounded">
                                            <option value="">Budget</option>
                                            <option value="<1500">Minder dan €1.500</option>
                                            <option value="1500-3000">€1.500 - €3.000</option>
                                            <option value=">3000">Meer dan €3.000</option>
                                        </select>

                                        <label htmlFor="name">Deadline</label>
                                        <input name="deadline" type="date" value={formData.deadline} onChange={handleOnChange} className="w-full p-3 border rounded" />

                                        <label htmlFor="name">Bericht *</label>
                                        <textarea name="message" placeholder="Bericht" value={formData.message} onChange={handleOnChange} className="w-full p-3 border rounded h-32" />

                                        <label htmlFor="name">bedrijfswebsite *</label>
                                        <input name="company_website" type="hidden" value={formData.company} />

                                        <div className="flex justify-between">
                                            <Button type="submit" disabled={loading} className="px-4 py-2 bg-green-500 text-white rounded">
                                                {loading ? "Versturen..." : "Verstuur"}
                                            </Button>
                                        </div>
                                    </form>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div {...fadeInRight} className="space-y-6">
                            <Card className="border-border shadow-sm">
                                <CardContent className="pt-6">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="h-10 w-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                                            <Mail size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground mb-1">E-mail</h3>
                                            <a
                                                href="mailto:contact@webdev.be"
                                                className="text-muted-foreground hover:text-accent transition-colors"
                                            >
                                                contact@webdev.be
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="h-10 w-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                                            <Phone size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground mb-1">Telefoon</h3>
                                            <a href="tel:+32123456789" className="text-muted-foreground hover:text-accent transition-colors">
                                                +32 123 45 67 89
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="h-10 w-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground mb-1">Locatie</h3>
                                            <p className="text-muted-foreground">
                                                Vlaanderen, België
                                                <br />
                                                Remote werken mogelijk
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-border shadow-sm bg-muted/50">
                                <CardContent className="pt-6">
                                    <h3 className="font-semibold text-foreground mb-3">Verwachte reactietijd</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Ik streef ernaar om binnen 24 uur te reageren op alle aanvragen. Voor dringende zaken kun je me ook
                                        telefonisch bereiken.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}