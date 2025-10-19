"use client";

import { SectionContainer } from "@/components/section-container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { Mail, CheckCircle2 } from "lucide-react";

export function CTASection() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "I am interested in your company, could you tell me more?"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          message: "I am interested in your company, could you tell me more?"
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!mounted) {
    return (
      <SectionContainer id="contact" className="bg-gradient-to-br from-primary via-accent to-secondary">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-3xl bg-white/95 backdrop-blur p-10 shadow-xl border border-white/40 text-center text-slate-900">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary">
              Get in Touch
            </h2>
            <p className="text-lg md:text-xl text-slate-600">
              Ready to modernize your fleet infrastructure?
            </p>
            <div className="mt-10 flex h-48 items-center justify-center rounded-2xl border border-slate-200 bg-white">
              <p className="text-slate-500">Loading form...</p>
            </div>
          </div>
        </div>
      </SectionContainer>
    );
  }

  return (
    <SectionContainer id="contact" className="bg-gradient-to-br from-primary via-accent to-secondary">
      <div className="max-w-3xl mx-auto">
        <div className="rounded-3xl bg-white/95 backdrop-blur p-10 shadow-2xl border border-white/40">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary">
              Get in Touch
            </h2>
            <p className="text-lg md:text-xl text-slate-600">
              Ready to modernize your fleet infrastructure?
            </p>
          </div>

          <div className="mt-8">
            {isSubmitted ? (
              <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-slate-900">Thank you!</h3>
                <p className="text-slate-600">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
                <div className="space-y-6 text-left text-slate-900">
                  <div>
                    <Label htmlFor="name" className="text-slate-700 mb-2">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-1"
                      placeholder="Your name"
                      suppressHydrationWarning
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-slate-700 mb-2">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-1"
                      placeholder="your@email.com"
                      suppressHydrationWarning
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-slate-700 mb-2">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="mt-1 min-h-32"
                      placeholder="Your message"
                      suppressHydrationWarning
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full !bg-primary hover:!bg-primary/90 text-white text-lg py-6 h-auto"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Mail className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-600">
              Or email us directly at{" "}
              <a href="mailto:sk@stefankaiser.net" className="hover:underline text-primary font-semibold">
                sk@stefankaiser.net
              </a>
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
