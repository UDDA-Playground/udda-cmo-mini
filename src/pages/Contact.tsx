
import React from 'react';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    toast.success("Message sent successfully! We'll get back to you soon.");
    form.reset();
    console.log(values);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-100 font-rubik relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-udda-primary/10 blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-udda-cta/15 blur-3xl"></div>
      </div>
      
      {/* Main Content */}
      <div className="container max-w-6xl mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <div className="flex justify-center mb-8">
          <img 
            src="/lovable-uploads/e1681008-d3d8-49f3-b325-85568a551641.png" 
            alt="UDDA Logo" 
            className="h-8 sm:h-10" 
          />
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-udda-text">Get in Touch</h1>
          <p className="text-lg text-udda-lightGray max-w-2xl mx-auto">
            Have questions about our marketing strategy services? 
            Send us a message and we'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll respond within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="What is this regarding?" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="How can we help you?" className="min-h-[150px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full bg-udda-cta text-udda-ctaText hover:bg-udda-cta/90">
                    Send Message
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          
          {/* Address Information */}
          <div className="flex flex-col justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 mb-8">
              <div className="flex items-start mb-4">
                <MapPin className="h-6 w-6 text-udda-primary mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-2">Our Office</h3>
                  <address className="not-italic text-udda-lightGray leading-relaxed">
                    UDDA Marketing Strategies<br />
                    Strandvägen 1<br />
                    114 51 Stockholm<br />
                    Sweden
                  </address>
                </div>
              </div>
            </div>
            <div className="bg-udda-primary/5 rounded-lg p-6">
              <h3 className="font-medium text-lg mb-3 text-udda-primary">Our Hours</h3>
              <div className="space-y-2 text-udda-lightGray">
                <p>Monday - Friday: 9:00 AM - 5:00 PM CET</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="p-4 text-center mt-20">
        <div className="text-udda-lightGray text-xs flex flex-wrap justify-center gap-4 items-center">
          <span className="flex items-center">
            © 2025 UDDA
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
