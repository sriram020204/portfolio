"use client";

import { portfolioData } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import Link from "next/link";
import { useActionState, useEffect } from "react"; // Changed from react-dom's useFormState
import { useFormStatus } from "react-dom";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";
import { useToast } from "@/hooks/use-toast";

const initialState: ContactFormState = {
  message: "",
  status: "idle",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? "Sending..." : "Send Message"}
      {!pending && <Send className="ml-2 h-4 w-4" />}
    </Button>
  );
}

export function ContactSection() {
  const [state, formAction] = useActionState(submitContactForm, initialState); // Changed to useActionState
  const { toast } = useToast();

  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: "Message Sent!",
        description: state.message,
      });
      // Optionally reset form fields here if not handled by useActionState behavior
    } else if (state.status === "error" && state.message && !state.errors) { // General error message
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);


  return (
    <section id="contact" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold text-primary sm:text-5xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a chat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">Contact Information</h3>
            <div className="space-y-4">
              <Link href={`mailto:${portfolioData.contact.email}`} className="flex items-center group">
                <Mail className="mr-3 h-6 w-6 text-primary/80 group-hover:text-primary transition-colors" />
                <span className="text-foreground/90 group-hover:text-primary transition-colors">{portfolioData.contact.email}</span>
              </Link>
              <Link href={`tel:${portfolioData.contact.phone.replace(/\s/g, "")}`} className="flex items-center group">
                <Phone className="mr-3 h-6 w-6 text-primary/80 group-hover:text-primary transition-colors" />
                <span className="text-foreground/90 group-hover:text-primary transition-colors">{portfolioData.contact.phone}</span>
              </Link>
              <Link href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center group">
                <Linkedin className="mr-3 h-6 w-6 text-primary/80 group-hover:text-primary transition-colors" />
                <span className="text-foreground/90 group-hover:text-primary transition-colors">LinkedIn Profile</span>
              </Link>
              <Link href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center group">
                <Github className="mr-3 h-6 w-6 text-primary/80 group-hover:text-primary transition-colors" />
                <span className="text-foreground/90 group-hover:text-primary transition-colors">GitHub Profile</span>
              </Link>
            </div>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-primary">Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form action={formAction} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground/90">Full Name</Label>
                  <Input type="text" id="name" name="name" required className="mt-1" />
                  {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>}
                </div>
                <div>
                  <Label htmlFor="email" className="text-foreground/90">Email Address</Label>
                  <Input type="email" id="email" name="email" required className="mt-1" />
                  {state.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>}
                </div>
                <div>
                  <Label htmlFor="message" className="text-foreground/90">Your Message</Label>
                  <Textarea id="message" name="message" rows={5} required className="mt-1" />
                  {state.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message[0]}</p>}
                </div>
                <div>
                  <SubmitButton />
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
